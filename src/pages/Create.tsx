import { Box, Paperclip } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Create = () => {
  const [activeTab, setActiveTab] = useState<'yours' | 'others'>('yours');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setActiveTab('yours')}
              className={`text-xl font-semibold ${
                activeTab === 'yours' 
                  ? 'text-white' 
                  : 'text-smolder-text/60 hover:text-smolder-text/80'
              }`}
            >
              Your creations
            </button>
            <button
              onClick={() => setActiveTab('others')}
              className={`text-xl font-semibold ${
                activeTab === 'others' 
                  ? 'text-white' 
                  : 'text-smolder-text/60 hover:text-smolder-text/80'
              }`}
            >
              Created by others
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-[#13111C] border-smolder-border overflow-hidden">
                <div className="p-3 flex items-center space-x-2">
                  <Box className="text-[#C6B47F]" size={20} />
                  <span className="text-[#C6B47F] text-sm">concept</span>
                </div>
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-white">
                    <img
                      src="/placeholder.svg"
                      alt="Concept preview"
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute bottom-3 right-3 px-3 py-1.5 text-sm bg-black/50 text-white rounded-md backdrop-blur-sm hover:bg-black/60 transition-colors">
                      See details
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-smolder-text">
                      This is a prompt sample which created the starting image concept, lorem ipsum ipsum lorem
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Prompt Box */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl">
            <div className="bg-white rounded-xl shadow-lg mx-4">
              <div className="relative">
                <Textarea 
                  placeholder="Create a new concept: 3d sculpture of a golden bird"
                  className="min-h-[60px] w-full resize-none border-0 bg-transparent px-4 py-[14px] pr-32 focus-visible:ring-0 focus-visible:ring-offset-0 text-black rounded-xl"
                />
                <div className="absolute right-3 bottom-3 flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <Paperclip className="w-5 h-5 text-gray-500" />
                  </button>
                  <div className="flex items-center gap-2 text-sm">
                    <Box className="w-4 h-4" />
                    <span className="text-gray-600">3D prints</span>
                  </div>
                  <Button className="bg-[#13111C] text-white hover:bg-[#13111C]/90 rounded-lg">
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