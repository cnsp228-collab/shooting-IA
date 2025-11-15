
import React from 'react';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., A cinematic shot of a raccoon astronaut in a retro spaceship"
          className="w-full h-32 p-4 pr-36 text-md text-gray-200 bg-gray-800 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !prompt.trim()}
          className="absolute top-1/2 right-4 -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? <LoadingSpinner /> : 'Generate'}
        </button>
      </div>
    </div>
  );
};
