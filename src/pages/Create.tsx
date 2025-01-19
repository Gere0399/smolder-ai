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
          <div className="flex items-center space-x-4">
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
              className={`text-sm text-smolder-text/60 hover:text-smolder-text/80 ${
                activeTab === 'others' 
                  ? 'text-white' 
                  : ''
              }`}
            >
              Created by others
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <button className="absolute bottom-4 right-4 px-4 py-1.5 text-sm bg-black/40 text-white rounded-md backdrop-blur-sm hover:bg-black/50 transition-colors">
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
            <div className="bg-white rounded-2xl shadow-lg mx-4">
              <div className="relative">
                <Textarea 
                  placeholder="Create a new concept: 3d sculpture of a golden bird"
                  className="min-h-[72px] w-full resize-none border-0 bg-transparent px-6 py-6 focus-visible:ring-0 focus-visible:ring-offset-0 text-black rounded-2xl placeholder:text-gray-500"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Paperclip className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="flex items-center gap-2 text-sm">
                    <Box className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">3D prints</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
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