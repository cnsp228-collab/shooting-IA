
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => (
  <header className="flex flex-col items-center text-center">
    <div className="flex items-center gap-4">
      <SparklesIcon className="w-10 h-10 text-purple-400" />
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        AI Image Generator
      </h1>
      <SparklesIcon className="w-10 h-10 text-pink-500" />
    </div>
  </header>
);
