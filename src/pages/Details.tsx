import { ArrowLeft, Heart, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Details = () => {
  return (
    <div className="min-h-screen bg-smolder-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button and title section */}
        <div className="mb-8">
          <Link to="/create" className="inline-flex items-center text-smolder-text hover:text-smolder-accent transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-lg">Back</span>
          </Link>
          <div className="mt-4 flex items-start justify-between">
            <h1 className="text-3xl font-semibold text-white">3D - This is the prompt resumed as a title for easy access</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-smolder-border">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-smolder-border">
                <LinkIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-2 text-sm text-smolder-text">Made by SmolderAI group</div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main image */}
          <div className="lg:col-span-2">
            <Card className="bg-white overflow-hidden rounded-xl">
              <img 
                src="/placeholder.svg" 
                alt="Concept preview" 
                className="w-full h-[600px] object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div className="text-lg font-medium">CONCEPT</div>
                <Button variant="outline" className="gap-2">
                  Modify idea
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6">
            {/* Price and status */}
            <div className="bg-smolder-muted rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl font-bold text-smolder-accent">$27</div>
                <div className="text-sm text-smolder-text">/current-total-costs</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-smolder-text">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Ready
                </div>
                <div className="flex items-center gap-2 text-sm text-smolder-text">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Print & delivery to you
                </div>
                <div className="flex items-center gap-2 text-sm text-smolder-text">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Discord staff 24/7
                </div>
              </div>
            </div>

            {/* Full prompt */}
            <div className="bg-smolder-muted rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Full Prompt:</h3>
              <p className="text-sm text-smolder-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Materials & colors */}
            <div className="bg-smolder-muted rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Printing materials & colors</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-smolder-border rounded-lg text-sm text-white">PLA ×</span>
                <span className="px-3 py-1.5 bg-smolder-border rounded-lg text-sm text-white">#FEA500 ×</span>
                <span className="px-3 py-1.5 bg-smolder-border rounded-lg text-sm text-white">#4A4A4A ×</span>
                <span className="px-3 py-1.5 bg-smolder-border rounded-lg text-sm text-white">#4A4A4A ×</span>
              </div>
            </div>

            {/* Next steps */}
            <div className="bg-smolder-muted rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Next steps for your delivered 3D model</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-lg text-sm">Concept image</div>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-smolder-text" />
                  <div className="text-sm text-smolder-text">Conversion to 3D</div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 rotate-180 text-smolder-text" />
                  <div className="text-sm text-smolder-text">3D printable</div>
                  <ArrowLeft className="w-4 h-4 rotate-180 text-smolder-text" />
                  <div className="text-sm text-smolder-text">Printing & delivering</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-smolder-text">Next: Conversion to 3D</div>
                <Button className="bg-white text-black hover:bg-white/90">
                  Proceed -$3.00
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress grid */}
        <div className="mt-12 grid grid-cols-5 gap-4">
          {['CONCEPT', '3D', 'PRINTABLE FILE', 'PRINTING 3D MODEL', 'DELIVERY TO YOU'].map((step, index) => (
            <Card key={step} className="bg-smolder-muted border-smolder-border overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="/placeholder.svg" 
                  alt={step} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                  {step}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;