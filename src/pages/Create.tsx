import { Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const Create = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0D0D17] via-[#121117] to-[#6C383A]">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold text-white">Your creations</h2>
            <span className="text-sm text-smolder-text/60">Created by others</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-[#13111C] border-smolder-border overflow-hidden">
                <div className="p-4 flex items-center space-x-2">
                  <Box className="text-[#C6B47F]" size={20} />
                  <span className="text-[#C6B47F]">concept</span>
                </div>
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-white">
                    <img
                      src="/placeholder.svg"
                      alt="Concept preview"
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute bottom-2 right-2 px-3 py-1 text-sm bg-black/50 text-white rounded backdrop-blur-sm hover:bg-black/60 transition-colors">
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
        </div>
      </main>
    </div>
  );
};

export default Create;