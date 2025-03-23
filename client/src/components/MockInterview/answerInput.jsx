import React, { useState } from 'react';

const AnswerInput = () => {
  const [answer, setAnswer] = useState(''); // State to store the input value

  const handleSubmit = () => {
    if (answer.trim() !== '') {
      console.log('Submitted Answer:', answer); // Replace with your submission logic
      setAnswer(''); // Clear the input field after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex items-center w-full max-w-lg bg-gray-800 rounded-lg shadow-md">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your answer here..."
          className="flex-1 px-4 py-3 text-white bg-transparent rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-r-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AnswerInput;