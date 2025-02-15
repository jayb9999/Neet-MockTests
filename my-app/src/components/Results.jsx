import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Styles.css'

function Results() {
  const { userId, testId } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await axios.get(
        `http://localhost:3000/results/${userId}/${testId}`
      );
      setResults(res.data);
    };
    fetchResults();
  }, [userId, testId]);

  if (!results) return <p>Loading...</p>;

  return (
    <div>
      <h1>Results</h1>
      <p>
        Score: {results.score}/{results.total}
      </p>
      <ul>
        {results.details.map((detail) => (
          <li key={detail.question_id}>
            Question {detail.question_id}: {detail.answer === detail.correct_answer ? "Correct" : "Wrong"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;