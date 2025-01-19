import { Navbar } from "@/components/Navbar";
import { ProcessVisualization } from "@/components/ProcessVisualization";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      
      <main className="flex items-center min-h-screen pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-12">
            <h1 className="text-[48px] font-bold text-white leading-[1.05] max-w-[540px] tracking-[-0.02em]">
              Bridge the gap between your imagination and the physical world
            </h1>
            
            <div className="relative max-w-xl">
              <textarea
                className="w-full h-[140px] bg-white/95 backdrop-blur-sm rounded-xl p-6 text-[15px] text-gray-800 placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200 resize-none"
                placeholder="Create a 3d sculpture of a golden bird"
              />
              <div className="absolute bottom-6 left-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute bottom-6 right-6">
                <Button 
                  className="bg-black hover:bg-gray-900 text-white text-sm px-6 py-2 rounded-xl"
                  onClick={handleCreate}
                >
                  Create
                </Button>
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