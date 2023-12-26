import React from 'react';
import ReactMarkdown from 'react-markdown';

const Output = ({ generatedText, generatedAudio }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-6 border-t border-gray-300 overflow-y-auto max-h-150  flex flex-col items-center justify-center" style={{ maxHeight: '40vh' }}>
      <ReactMarkdown className="text-white">{generatedText}</ReactMarkdown>
      {generatedAudio && (
        <div className="mt-2 pb-12">
          <audio controls src={`data:audio/mpeg;base64,${generatedAudio}`} />
        </div>
      )}
      <span className="text-purple-500 text-lg mt-2">&#9733; Give us a star <a href="https://github.com/MohitGupta14/prompt-prodigy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">on Github</a></span>
    </div>
  );
};

export default Output;
