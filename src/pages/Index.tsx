import { Navbar } from "@/components/Navbar";
import { CreationTabs } from "@/components/CreationTabs";
import { ProcessVisualization } from "@/components/ProcessVisualization";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-smolder-bg text-smolder-text">
      <Navbar />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Bridge the gap between your imagination and the physical world
            </h1>
            
            <div className="relative">
              <textarea
                className="w-full h-32 bg-smolder-muted rounded-lg p-4 text-white placeholder-smolder-text/50 focus:outline-none focus:ring-2 focus:ring-smolder-accent resize-none"
                placeholder="Create a 3d sculpture of a golden bird"
              />
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button className="bg-smolder-accent hover:bg-smolder-accent/90">
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