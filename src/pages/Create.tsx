import { Box, Paperclip, X, Image, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";

const Create = () => {
  const [activeTab, setActiveTab] = useState<'yours' | 'others'>('yours');
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (
        e.target instanceof HTMLElement && 
        (e.target.tagName === 'TEXTAREA' || 
         e.target.closest('.max-h-24'))
      ) {
        return;
      }

      e.preventDefault();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

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
      <main className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto py-24">
        <div className="space-y-4">
          <div className="flex items-end space-x-4">
            <button
              onClick={() => setActiveTab('yours')}
              className={`transition-all duration-200 ${
                activeTab === 'yours' 
                  ? 'text-2xl font-semibold text-white' 
                  : 'text-base text-smolder-text/60 hover:text-smolder-text/80'
              }`}
            >
              Your creations
            </button>
            <button
              onClick={() => setActiveTab('others')}
              className={`transition-all duration-200 ${
                activeTab === 'others' 
                  ? 'text-2xl font-semibold text-white' 
                  : 'text-base text-smolder-text/60 hover:text-smolder-text/80'
              }`}
            >
              Created by others
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 space-x-4 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted hover:scrollbar-thumb-smolder-accent/50"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-[#13111C] border-smolder-border overflow-hidden w-[360px] flex-shrink-0">
                <div className="py-3 flex items-center justify-center space-x-2">
                  <Box className="text-[#C6B47F]" size={16} />
                  <span className="text-[#C6B47F] text-base">concept</span>
                </div>
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-white">
                    <img
                      src="/placeholder.svg"
                      alt="Concept preview"
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute bottom-3 right-4 px-4 py-1.5 text-sm bg-black/40 text-white rounded-md backdrop-blur-sm hover:bg-black/50 transition-colors">
                      See details
                    </button>
                  </div>
                  <div className="p-4 pt-4 pb-5">
                    <div className="max-h-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted hover:scrollbar-thumb-smolder-accent/50">
                      <p className="text-sm text-smolder-text">
                        This is a prompt sample which created the starting image concept, lorem ipsum ipsum lorem. This text can now scroll if it gets too long and extends beyond the visible area. The content will remain contained within its designated space while allowing users to scroll through longer descriptions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Prompt Box */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="bg-white rounded-2xl shadow-lg">
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
                <Textarea 
                  placeholder="Create a new concept: 3d sculpture of a golden bird"
                  className="min-h-[96px] max-h-[200px] w-full resize-y overflow-y-auto border-0 bg-transparent px-6 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 text-black rounded-2xl placeholder:text-gray-500 text-[15px] scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 scrollbar-track-transparent pr-8"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
                <div className="absolute bottom-2 left-4 flex items-center gap-4">
                  <button 
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="flex items-center gap-2 text-sm">
                    <Box className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 font-medium">3D prints</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-4">
                  <Button className="bg-[#13111C] text-white hover:bg-[#13111C]/90 rounded-lg px-6">
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;