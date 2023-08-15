import React, { useState } from "react";
import "./styles.css";
/*

{
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }

*/

export default function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="App">
      <Form addQuestion={addQuestion} />
      <FlashCards questions={questions} />
    </div>
  );
}

function Form({ addQuestion }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    const newItem = { question, answer, id };
    addQuestion(newItem);
    setQuestion("");
    setAnswer("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        value={question}
        placeholder="Enter your question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        value={answer}
        placeholder="Enter the answer"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div
          className={selectedId === ques.id ? "selected" : ""}
          key={ques.id}
          onClick={() => setSelectedId(ques.id)}
        >
          <p>{selectedId === ques.id ? ques.answer : ques.question}</p>
        </div>
      ))}
    </div>
  );
}
