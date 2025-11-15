
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ImageDisplay } from './components/ImageDisplay';
import { generateImageFromPrompt } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateImageFromPrompt(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate image. ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Header />
        
        <main className="w-full mt-8 md:mt-12 flex flex-col items-center">
          <p className="text-center text-lg text-gray-400 mb-8 max-w-2xl">
            Describe the image you want to create. Be as specific or as imaginative as you like!
          </p>
          
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerateImage}
            isLoading={isLoading}
          />

          {error && (
            <div className="mt-6 p-4 bg-red-900/50 text-red-300 border border-red-700 rounded-lg w-full max-w-2xl text-center">
              {error}
            </div>
          )}

          <div className="w-full max-w-2xl aspect-square mt-8">
             <ImageDisplay generatedImage={generatedImage} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
