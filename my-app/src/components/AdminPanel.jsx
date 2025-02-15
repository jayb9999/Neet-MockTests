import React, { useState } from "react";
import axios from "axios";
import './Styles.css'

function AdminPanel() {
  const [title, setTitle] = useState("");
  const [questionData, setQuestionData] = useState({
    test_id: "",
    question: "",
    image: "",
    type: "multiple_choice",
    options: "",
    correct_answer: "",
  });

  const handleTestSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/tests", { title });
    alert("Test created!");
    setTitle("");
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/questions", questionData);
    alert("Question added!");
    setQuestionData({
      test_id: "",
      question: "",
      image: "",
      type: "multiple_choice",
      options: "",
      correct_answer: "",
    });
  };

  return (
    <div></div>
  )
}

export default AdminPanel;