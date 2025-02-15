import React, { useState, useEffect } from "react";
import './Styles.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const TestInterface = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(200 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAttemptedQtns, setShowAttemptedQtns] = useState(false);
  const [showNotAttemptedQtns, setShowNotAttemptedQtns] = useState(false);
  const [showWrongAnsQtns, setShowWrongAnsQtns] = useState(false);
  const [showRightAnsQtns, setShowRightAnsQtns] = useState(false);
  //const [show, setShow] = useState([])
  const navigate = useNavigate();

  // Fetch questions only once

useEffect(() => {
  const fetchQuestions = async () => {
    try {
      // Retrieve JWT token from cookies (or localStorage)
      const jwtToken = Cookies.get("jwtToken");

      // If JWT token is not present, handle this case (maybe redirect to login or show an error)
      if (!jwtToken) {
        console.error("No JWT token found.");
        return; // or redirect to login page
      }

      // Include the token in the Authorization header
      const response = await axios.get("http://localhost:5000/api/questions", {
        headers: {
          Authorization: `Bearer ${jwtToken}` // Sending token in Authorization header
        }
      });

      //console.log(response);
      setQuestions(response.data); // Ensure questions is always an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchQuestions();
}, []);


  // Timer effect (runs every second)
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleSubmit();
    }
  }, [timer]);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [questionId]: option
    }));
  };

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q) => {
      if (selectedOptions[q.id]) {
        if (selectedOptions[q.id] === q.correct_answer) {
          finalScore += 4;
        } else {
          finalScore -= 2;
        }
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Prevent rendering errors before data loads
  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const attemptedCount = Object.keys(selectedOptions).length;
  const notAttemptedCount = questions.length - attemptedCount;
  //console.log(selectedOptions)
  const rightAnswers = questions.filter(q => selectedOptions[q.id] && selectedOptions[q.id] === q.correct_answer);
  const wrongAnswers = questions.filter(q => selectedOptions[q.id] && selectedOptions[q.id] !== q.correct_answer);
  
  if (isSubmitted) {
    return (
      <div className="dashboard-con scoreboard">
        <h1>Scoreboard</h1>
        <div className="test-title">
          <p style={{color: 'blue', marginBottom: '10px'}}>Marks Gained: <span style={{fontSize: '30px', color: 'green'}}>{score}/{questions.length*4}</span></p>
          <p style={{color: 'brown', marginBottom: '10px'}}>Total Questions: {questions.length}</p>

          <div className="scoreSmry">
            <p style={{color: 'aqua', marginBottom: '10px'}}>Attempted Questions: {attemptedCount}</p>
            <button onClick={() => {
              setShowAttemptedQtns(!showAttemptedQtns);
              setShowNotAttemptedQtns(false);
              setShowRightAnsQtns(false);
              setShowWrongAnsQtns(false);
              //setShow()
            }}>Show</button>
          </div>

          <div className="scoreSmry">
            <p style={{color: 'orange', marginBottom: '10px'}}>Not Attempted Questions: {notAttemptedCount}</p>
            <button onClick={() => {
              setShowNotAttemptedQtns(!showNotAttemptedQtns);
              setShowAttemptedQtns(false);
              setShowRightAnsQtns(false);
              setShowWrongAnsQtns(false);
            }}>Show</button>
          </div>

          <div className="scoreSmry">
            <p style={{color: 'green', marginBottom: '10px'}}>Right Answers: {rightAnswers.length}</p>
            <button onClick={() => {
              setShowRightAnsQtns(!showRightAnsQtns);
              setShowAttemptedQtns(false);
              setShowNotAttemptedQtns(false);
              setShowWrongAnsQtns(false);
            }}>Show</button>
          </div>

          <div className="scoreSmry">
            <p style={{color: 'red'}}>Wrong Answers: {wrongAnswers.length}</p>
            <button onClick={() => {
              setShowWrongAnsQtns(!showWrongAnsQtns);
              setShowAttemptedQtns(false);
              setShowNotAttemptedQtns(false);
              setShowRightAnsQtns(false);
            }}>Show</button>
          </div>
        </div>

          <>
          {showAttemptedQtns && 
          <div className="details">
            <h2>Attempted Questions:</h2>
            {rightAnswers.concat(wrongAnswers).map((q) => (
              <p key={q.id}>
                Q{q.id}: {q.question} <br />- Your Answer: {selectedOptions[q.id]} <br />- Correct Answer: {q.correct_answer}
              </p>
            ))}
          </div>
          }

          {showNotAttemptedQtns &&
          <div className="details">
            <h2>Not Attempted Questions:</h2>
            {questions
              .filter((q) => !selectedOptions[q.id])
              .map((q) => (
                <p key={q.id}>
                  Q{q.id}: {q.question} <br />- Correct Answer: {q.correct_answer}
                </p>
            ))}
          </div>
          }

          {showRightAnsQtns &&
          <div className="details">
            <h2>Right Answered Questions:</h2>
            {rightAnswers
              .map((q) => (
                <p key={q.id}>
                  Q{q.id}: {q.question} <br />- Correct Answer: {q.correct_answer}
                </p>
            ))}
          </div>
          }

          {showWrongAnsQtns &&
          <div className="details">
            <h2>Wrong Answered Questions:</h2>
            {wrongAnswers
              .map((q) => (
                <p key={q.id}>
                  Q{q.id}: {q.question} <br />- Your Answer: {selectedOptions[q.id]} <br />- Correct Answer: {q.correct_answer}
                </p>
            ))}
          </div>
          }
          </>

        <div className="backBtn"><button onClick={() => navigate(`/dashboard`)}>Back</button></div>
      </div>
    );
  }

  return (
    <div className="test-container">
      <div className="title-con">
        <h3 className="qtn-code">NEET 2024 R1</h3>
        <h3 className={timer > 600 ? "timer" : "timer-alert"}>{formatTime(timer)}</h3>
      </div>
      <div className="question-con">
        <div className="qtn-sub">
          <h2>{questions[currentQuestionIndex].subject}</h2>
          <h2 className="qtn-num">{currentQuestionIndex + 1}/{questions.length}</h2>
        </div>

        <h2 className="qtn">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h2>
        {questions[currentQuestionIndex].image_url && (
          <img className='qtnImg' src={questions[currentQuestionIndex].image} alt="Question Image" />
        )}

        <div className="options">
          {questions.length > 0 && questions[currentQuestionIndex]?.options ? (
          <div className="options">
            {JSON.parse(questions[currentQuestionIndex].options).map((option) => (
              <label className="option" key={option}>
                <input
                  className="radio"
                  type="radio"
                  name={`question-${questions[currentQuestionIndex]?.id}`}
                  value={option}
                  checked={selectedOptions[questions[currentQuestionIndex]?.id] === option}
                  onChange={() =>
                    handleOptionChange(questions[currentQuestionIndex]?.id, option)
                  }
                />
                {option}
              </label>
            ))}
          </div>
          ) : (
            <p>No options available</p>
          )}
        </div>
        <div className="navigation-buttons">
            <div>
            <button
                disabled={currentQuestionIndex === 0}
                onClick={() =>
                    setCurrentQuestionIndex((prev) => prev - 1)
                }
            >
                Previous
            </button>
            </div>
            <div>
            <button
                disabled={currentQuestionIndex === questions.length - 1}
                onClick={() =>
                    setCurrentQuestionIndex((prev) => prev + 1)
                }
            >
                Next
            </button>
            </div>
        </div>

        <div className="questions-navigation">
          {questions.map((_, index) => (
            <div key={index} onClick={() => {
              handleNavigation(index)
              window.scrollTo({top: 0, behavior: "smooth",})
            }} className={`navigation-button ${currentQuestionIndex === index ? "active" : ""}`}>
              <button>
                {index + 1}
              </button>
            </div>
          ))}
        </div>

        <div className="quit-button-con">
          <button className="quit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TestInterface;
