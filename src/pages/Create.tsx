import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { usePromptStore } from "@/store/promptStore";
import { CreationHeader } from "@/components/create/CreationHeader";
import { CreationGrid } from "@/components/create/CreationGrid";
import { PromptBox } from "@/components/create/PromptBox";

const Create = () => {
  const [activeTab, setActiveTab] = useState<'yours' | 'others'>('yours');
  const { prompt: initialPrompt, attachedImage: initialImage, clear } = usePromptStore();
  const [prompt, setPrompt] = useState(initialPrompt);
  const [attachedImage, setAttachedImage] = useState<string | null>(initialImage);

  useEffect(() => {
    // Animation class for sliding in
    const promptBox = document.querySelector('.prompt-box');
    if (promptBox) {
      promptBox.classList.add('animate-slide-in');
    }
    
    return () => {
      clear(); // Clear the store when unmounting
    };
  }, [clear]);

  const handleImageAttach = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setAttachedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto py-24">
        <div className="space-y-4">
          <CreationHeader 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          <CreationGrid />
          <PromptBox 
            prompt={prompt}
            attachedImage={attachedImage}
            onPromptChange={setPrompt}
            onImageAttach={handleImageAttach}
            onImageRemove={() => setAttachedImage(null)}
          />
        </div>
      </main>
    </div>
  );
};

export default Create;