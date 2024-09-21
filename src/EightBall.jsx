import React, { useState } from 'react';

function EightBall({ answers }) {
  // Initial state: black color and default message
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  // Function to handle click, randomly choosing a message and color
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const newAnswer = answers[randomIndex];
    setMsg(newAnswer.msg);
    setColor(newAnswer.color);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: 'white',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '20px auto',
        cursor: 'pointer',
      }}
    >
      <p>{msg}</p>
    </div>
  );
}

export default EightBall;
