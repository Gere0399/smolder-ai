import { Navbar } from "@/components/Navbar";
import { CreationTabs } from "@/components/CreationTabs";
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
      
      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-[72px] font-bold text-white leading-[1.05] max-w-[540px] tracking-[-0.02em]">
              Bridge the gap between your imagination and the physical world
            </h1>
            
            <div className="relative max-w-xl mt-8">
              <textarea
                className="w-full h-[90px] bg-white rounded-lg p-5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 resize-none"
                placeholder="Create a 3d sculpture of a golden bird"
              />
              <div className="absolute bottom-5 right-5 flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-900 text-white text-sm px-6 py-2 rounded-lg"
                  onClick={handleCreate}
                >
                  Create
                </Button>
              </div>
            </div>
            
            <CreationTabs />
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