'use client'
import React, { useEffect , useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Output = ({ generatedText, generatedAudio, generatedImage }) => {
  return (
    <>
      <div className={generatedImage ? 'fixed bottom-20 mb-8' : 'fixed bottom-0 left-0 right-0 bg-gray-900 p-6 border-t border-gray-300 overflow-y-auto max-h-150 flex flex-col items-center justify-center'} style={{ maxHeight: '40vh' }}>
        {generatedImage && (
          <div>
          <img src={generatedImage} alt="Generated Image" className='h-1/3'  />
          </div>
        )}
        {generatedText && (
          <ReactMarkdown className="text-white overflow-y-auto pb-20 ">{generatedText}</ReactMarkdown>
        )}
        {generatedAudio && (
          <div className="mb-5 pb-12 align-middle">
            <audio controls src={`data:audio/mpeg;base64,${generatedAudio}`} />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0 text-center bg-gray-900 p-6 border-t border-gray-300 text-purple-500 text-lg mt-2">
        &#9733; Give us a star <a href="https://github.com/MohitGupta14/prompt-prodigy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">on Github</a>
      </div>
    </>
  );
};

export default Output;
