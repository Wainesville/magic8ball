import React from 'react';
import EightBall from './EightBall';
import answers from './answersData'; // Import your answer array

function App() {
  return (
    <div>
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
