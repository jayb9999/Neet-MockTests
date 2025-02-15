import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Styles.css'

function Question() {
  const { testId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get(`http://localhost:3000/questions/${testId}`);
      setQuestions(res.data);
    };
    fetchQuestions();
  }, [testId]);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    for (const [questionId, answer] of Object.entries(answers)) {
      await axios.post("http://localhost:3000/answers", {
        user_id: 1, // Replace with logged-in user ID
        question_id: questionId,
        answer,
      });
    }
    alert("Answers submitted!");
  };

  if (!questions.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Question {currentIndex + 1}</h2>
      <p>{questions[currentIndex].question}</p>
      {questions[currentIndex].image && (
        <img src={questions[currentIndex].image} alt="Question" />
      )}
      {questions[currentIndex].type === "multiple_choice" && (
        <div>
          {JSON.parse(questions[currentIndex].options).map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(questions[currentIndex].id, option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
      >
        Previous
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))
        }
      >
        Next
      </button>
      {currentIndex === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
}

export default Question;