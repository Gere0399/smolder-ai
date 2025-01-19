import { ArrowLeft, Heart, Link as LinkIcon, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ProcessVisualization } from "@/components/ProcessVisualization";

const Details = () => {
  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Back button and title section */}
        <div className="mb-8">
          <Link to="/create" className="inline-flex items-center text-smolder-text hover:text-smolder-accent transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-lg">Back</span>
          </Link>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[#0A0A0B]">3D - This is the prompt resumed as a title for easy access</h1>
              <div className="mt-2 text-sm text-gray-600">Made by SmolderAI group</div>
              <div className="mt-4">
                <Button variant="outline" className="rounded-full text-sm bg-white">Contact us</Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-gray-200 bg-white">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-200 bg-white">
                <LinkIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main image */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 overflow-hidden rounded-xl">
              <div className="relative">
                <img 
                  src="/lovable-uploads/46acf481-3c4b-43eb-a0e8-1fbccbb6d766.png"
                  alt="Concept preview" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-md">
                  <span className="text-white text-sm">CONCEPT</span>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <Button variant="outline" className="gap-2 bg-white">
                  Modify idea
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6">
            {/* Price and status */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl font-bold text-[#FF6B81]">$27</div>
                <div className="text-sm text-gray-500">/current-total-costs</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Ready
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Print & delivery to you
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Discord staff 24/7
                </div>
              </div>
            </div>

            {/* Full prompt */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-[#0A0A0B] mb-4">Full Prompt:</h3>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Materials & colors */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-[#0A0A0B] mb-4">Printing materials & colors</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-lg bg-white">
                  <span className="mr-1">🛠️</span> PLA ×
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg bg-white">
                  <span className="w-3 h-3 rounded-full bg-[#FEA500] mr-1"></span> #FEA500 ×
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg bg-white">
                  <span className="w-3 h-3 rounded-full bg-[#4A4A4A] mr-1"></span> #4A4A4A ×
                </Button>
              </div>
            </div>

            {/* Next steps */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-[#0A0A0B] mb-4">Next steps for your delivered 3D model</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-lg text-sm">Concept image</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400" />
                  <span className="text-sm text-gray-600">Conversion to 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400" />
                  <span className="text-sm text-gray-600">3D printable</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400" />
                  <span className="text-sm text-gray-600">Printing & delivering</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">Next: Conversion to 3D</div>
                <Button className="bg-white text-black hover:bg-white/90 border border-gray-200">
                  Proceed -$3.00
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress visualization */}
        <div className="mt-12 pb-8">
          <ProcessVisualization />
        </div>
      </div>
    </div>
  );
};

export default Details;