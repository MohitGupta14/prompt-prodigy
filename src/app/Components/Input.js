'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Output from './Output';
import { PulseLoader } from 'react-spinners';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'AIzaSyD40bVyLqwo9bew5aiehWdyKVa_4oBngII';
  const apiUrl = '/api/bard'; // Assuming you set up the API route

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(apiUrl, { prompt: inputValue, apiKey });
      const { text } = response.data;
      setGeneratedText(text);
    } catch (error) {
      console.error("Error generating content:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
  <div className="flex justify-center items-center h-5/6 sm:h-5/6 mt-8 sm:mt-40">
      <form onSubmit={handleSubmit} className="w-full max-w-lg relative">
        <input
          type="text"
          placeholder="Type your prompt..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`w-full border border-gray-300 p-3 rounded-full pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${inputValue ? 'text-black' : 'text-gray-900'}`}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 cursor-pointer focus:outline-none"
        >
          {/* Magnifying glass icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m5-7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zm-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            />
          </svg>
        </button>
      </form>

      {loading && (
        <div className="flex items-center justify-center absolute inset-0 bg-gray-900 bg-opacity-50">
          <PulseLoader color="#A854F7" />
        </div>
      )}
      {generatedText && !loading && <Output generatedText={generatedText} />}
    </div>
  );
};

export default Input;
