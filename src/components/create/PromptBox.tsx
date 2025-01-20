import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, X } from "lucide-react";

interface PromptBoxProps {
  prompt: string;
  attachedImage: string | null;
  onPromptChange: (value: string) => void;
  onImageAttach: (file: File) => void;
  onImageRemove: () => void;
}

export const PromptBox = ({ 
  prompt, 
  attachedImage, 
  onPromptChange, 
  onImageAttach, 
  onImageRemove 
}: PromptBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('image/')) {
      onImageAttach(file);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 w-full max-w-2xl sm:px-4">
      <div className="bg-white rounded-2xl shadow-lg prompt-box">
        <div className="relative pb-14">
          {attachedImage && (
            <div className="flex px-4 sm:px-6 pt-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src={attachedImage}
                  alt="Attached image"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={onImageRemove}
                  className="absolute -top-1.5 -right-1.5 p-0.5 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
          )}
          <Textarea 
            placeholder="Create a 3d sculpture of a golden bird"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            className={`min-h-[96px] max-h-[200px] w-full resize-y overflow-y-auto border-0 bg-transparent px-4 sm:px-6 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 text-base sm:text-[18px] rounded-2xl ${
              prompt ? 'text-gray-900' : 'text-gray-500'
            } placeholder:text-gray-500 placeholder:font-normal scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 scrollbar-track-transparent pr-8`}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileSelect}
          />
          <div className="absolute bottom-2 left-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="absolute bottom-2 right-4">
            <Button className="bg-[#13111C] text-white hover:bg-[#13111C]/90 rounded-lg px-4 sm:px-6">
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};