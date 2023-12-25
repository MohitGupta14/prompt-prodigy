import React from 'react';
import ReactMarkdown from 'react-markdown';

const Output = ({ generatedText }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-6 border-t border-gray-300 overflow-y-auto max-h-80 min-h-0 rounded-t-lg flex flex-col items-center justify-center">
      <ReactMarkdown className="text-white">{generatedText}</ReactMarkdown>
      <span className="text-purple-500 text-lg mt-2">&#9733; Give us a star <a href="https://github.com/MohitGupta14/prompt-prodigy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Github</a></span>
    </div>
  );
};

export default Output;
