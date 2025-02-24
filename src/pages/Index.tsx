import { Navbar } from "@/components/Navbar";
import { ProcessVisualization } from "@/components/ProcessVisualization";
import { Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { usePromptStore } from "@/store/promptStore";

const Index = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState("");
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [placeholderText, setPlaceholderText] = useState("");
  const { setPrompt: setStorePrompt, setAttachedImage: setStoreAttachedImage } = usePromptStore();

  const prompts = [
    "Design a 3D golden bird sculpture",
    "Produce a 3D illustration of a lion with a golden hide",
    "Model a curved, 12mm-diameter tube to connect two shower pipes"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPrompt = prompts[currentIndex];
      
      if (isDeleting) {
        setPlaceholderText(currentPrompt.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setPlaceholderText(currentPrompt.substring(0, currentChar + 1));
        currentChar++;
      }

      if (!isDeleting && currentChar === currentPrompt.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000); // Reduced pause at the end from 1500ms to 1000ms
        return;
      }

      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % prompts.length;
        timeout = setTimeout(type, 200); // Reduced pause between prompts from 500ms to 200ms
        return;
      }

      timeout = setTimeout(type, isDeleting ? 25 : 50); // Reduced typing speed from 50/100ms to 25/50ms

    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const handleCreate = () => {
    setStorePrompt(prompt);
    setStoreAttachedImage(attachedImage);
    const promptBox = document.querySelector('.prompt-box');
    if (promptBox) {
      promptBox.classList.add('animate-slide-out');
    }
    setTimeout(() => {
      navigate("/create");
    }, 300);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAttachedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setAttachedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      
      <main className="flex items-center min-h-screen pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <h1 className="text-[42px] font-bold text-white leading-[1.05] max-w-[540px] tracking-[-0.02em]">
              Bridge the gap between your imagination and the physical world
            </h1>
            
            <div className="relative max-w-xl prompt-box">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                <div className="relative pb-14">
                  {attachedImage && (
                    <div className="flex px-6 pt-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <img
                          src={attachedImage}
                          alt="Attached image"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          onClick={removeImage}
                          className="absolute -top-1.5 -right-1.5 p-0.5 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                  <textarea
                    className={`w-full min-h-[100px] bg-transparent rounded-xl p-6 text-[18px] ${
                      prompt ? 'text-gray-900' : 'text-gray-400'
                    } placeholder:text-gray-400 placeholder:font-[500] focus:outline-none focus:ring-0 resize-none pr-12 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 scrollbar-track-transparent`}
                    placeholder={placeholderText}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
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
                      className="p-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Paperclip className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-4">
                    <Button 
                      className="bg-black hover:bg-gray-900 text-white text-sm px-6 rounded-lg"
                      onClick={handleCreate}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <ProcessVisualization />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
