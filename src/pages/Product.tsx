import { useState } from "react";
import { ArrowLeft, Link as LinkIcon, ArrowRight, Download, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ThreeDViewer } from "@/components/product/ThreeDViewer";
import { generateConceptImage, convertToThreeD } from "@/utils/falApi";

const Product = () => {
  const [currentStep, setCurrentStep] = useState<"concept" | "3d">("concept");
  const [conceptImage, setConceptImage] = useState<string>("/lovable-uploads/679b8c6e-5fc5-4233-bd07-0c1b4966e8dd.png");
  const [threeDModel, setThreeDModel] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("This is a prompt sample which created the starting image concept");
  const [isLoading, setIsLoading] = useState(false);

  const handleProceed = async () => {
    setIsLoading(true);
    try {
      if (currentStep === "concept") {
        const newImageUrl = await generateConceptImage(prompt);
        setConceptImage(newImageUrl);
        toast.success("New concept image generated!");
      } else if (currentStep === "3d") {
        const modelUrl = await convertToThreeD(conceptImage);
        setThreeDModel(modelUrl);
        toast.success("3D model generated!");
      }
    } catch (error) {
      toast.error("An error occurred during generation");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-smolder-bg relative w-full overflow-hidden">
      <Navbar />
      
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Title and Info */}
          <div className="col-span-12 lg:col-span-3 w-full">
            <Link 
              to="/create" 
              className="inline-flex items-center text-smolder-text hover:text-smolder-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-lg">Back</span>
            </Link>
            
            <h1 className="mt-4 text-3xl font-semibold text-smolder-text break-words">
              3D - This is the prompt resumed as a title for easy access
            </h1>
            
            <div className="mt-4 flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-smolder-border"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast("Copied link of the product to clipboard");
                }}
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-smolder-text/60">Made by SmolderAI group</div>
            
            <Button 
              variant="outline" 
              className="mt-4 rounded-full text-sm border-smolder-border"
            >
              Contact us
            </Button>
          </div>

          {/* Middle Column - Main Preview */}
          <div className="col-span-12 lg:col-span-5 w-full">
            <Card className="overflow-hidden rounded-xl border-0 shadow-lg bg-smolder-muted">
              <div className="relative aspect-[4/5]">
                {currentStep === "concept" ? (
                  <img 
                    src={conceptImage}
                    alt="Concept preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ThreeDViewer modelUrl={threeDModel || ''} />
                )}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md">
                  <span className="text-white text-sm font-medium">
                    {currentStep === "concept" ? "CONCEPT" : "3D MODEL"}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Details Card */}
          <div className="col-span-12 lg:col-span-4 w-full">
            <Card className="rounded-xl border-smolder-border w-full">
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-3xl font-bold text-smolder-accent">$27</div>
                    <div className="text-sm text-smolder-text/60">/current-total-costs</div>
                  </div>
                  <div className="flex items-center gap-8 text-sm text-smolder-text whitespace-nowrap overflow-hidden">
                    <div className="flex items-center gap-2 min-w-max">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Ready
                    </div>
                    <div className="flex items-center gap-2 min-w-max">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Print & delivery to you
                    </div>
                    <div className="flex items-center gap-2 min-w-max">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Discord staff 24/7
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-3">Full Prompt:</h3>
                  <div className="max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted/50">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full min-h-[80px] bg-transparent border-0 text-sm text-smolder-text/80 resize-none focus:ring-0"
                      placeholder="Enter your prompt here..."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-3">
                    Next steps for your delivered 3D model
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 ${currentStep === "concept" ? "bg-green-500/10 text-green-400" : "bg-gray-500/10 text-gray-400"} rounded-lg text-sm font-medium`}>
                        Concept image
                      </span>
                      <ArrowRight className="w-4 h-4 text-smolder-text/40" />
                      <span className={`text-sm ${currentStep === "3d" ? "text-smolder-text" : "text-smolder-text/60"}`}>Conversion to 3D</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-smolder-text/60">
                      Next: {currentStep === "concept" ? "Conversion to 3D" : "Final 3D Model"}
                    </div>
                    <Button 
                      className="relative bg-transparent text-smolder-text hover:bg-transparent border-2 border-[#6445AB] before:absolute before:inset-0 before:bg-gradient-to-r before:from-smolder-gradient-from before:to-smolder-gradient-to before:rounded-md before:-z-10 after:absolute after:inset-[1px] after:bg-smolder-muted after:rounded-[4px] after:-z-10 transition-all duration-300 hover:border-opacity-80"
                      onClick={handleProceed}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : `Proceed -$${currentStep === "concept" ? "0.05" : "1.00"}`}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
