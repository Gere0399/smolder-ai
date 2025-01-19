import { Navbar } from "@/components/Navbar";
import { CreationTabs } from "@/components/CreationTabs";
import { ProcessVisualization } from "@/components/ProcessVisualization";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Bridge the gap between your imagination and the physical world
            </h1>
            
            <div className="relative">
              <textarea
                className="w-full h-32 bg-smolder-muted/20 backdrop-blur-sm rounded-lg p-4 text-white placeholder-smolder-text/50 focus:outline-none focus:ring-2 focus:ring-smolder-accent resize-none border border-smolder-border/20"
                placeholder="Create a 3d sculpture of a golden bird"
              />
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-smolder-text hover:text-white">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button 
                  className="bg-white hover:bg-white/90 text-black"
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