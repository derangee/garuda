import React, { useState } from 'react';

const Question = () => {
  const [question, setQuestion] = useState(''); // State to store the question
  const [isLoading, setIsLoading] = useState(false); // State to handle loading

  const fetchQuestion = () => {
    setIsLoading(true);

    // Simulate fetching a question (replace this with your AI model integration later)
    setTimeout(() => {
      setQuestion('What is the difference between React and Angular?');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-black  rounded-lg shadow-md text-center mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">Question:</h2>
      {isLoading ? (
        <p className="text-gray-400">Fetching question...</p>
      ) : question ? (
        <p className="text-gray-200">{question}</p>
      ) : (
        <p className="text-gray-400">Click the button below to get a question.</p>
      )}
      <button
        onClick={fetchQuestion}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Question
      </button>
    </div>
  );
};

export default Question;