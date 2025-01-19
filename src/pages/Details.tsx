import { ArrowLeft, Heart, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Details = () => {
  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - Title and contact */}
          <div className="col-span-12 lg:col-span-3">
            <Link 
              to="/create" 
              className="inline-flex items-center text-smolder-text hover:text-smolder-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-lg">Back</span>
            </Link>
            
            <h1 className="mt-4 text-3xl font-semibold text-smolder-text max-w-2xl">
              3D - This is the prompt resumed as a title for easy access
            </h1>
            
            <div className="mt-4 flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-smolder-border"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-smolder-border"
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-3 text-sm text-smolder-text/60">Made by SmolderAI group</div>
            
            <Button 
              variant="outline" 
              className="mt-4 rounded-full text-sm border-smolder-border"
            >
              Contact us
            </Button>
          </div>

          {/* Center column - Main Image */}
          <div className="col-span-12 lg:col-span-5">
            <Card className="overflow-hidden rounded-xl border-0 shadow-lg bg-smolder-muted">
              <div className="relative aspect-[4/5]">
                <img 
                  src="/lovable-uploads/679b8c6e-5fc5-4233-bd07-0c1b4966e8dd.png"
                  alt="Concept preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md">
                  <span className="text-white text-sm font-medium">CONCEPT</span>
                </div>
                <Button 
                  variant="outline" 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm gap-2 hover:bg-white"
                >
                  Modify idea
                </Button>
              </div>
            </Card>
          </div>

          {/* Right column - Details */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="bg-smolder-muted rounded-xl overflow-hidden">
              <div className="p-6 space-y-8">
                {/* Price and status */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-3xl font-bold text-smolder-accent">$27</div>
                    <div className="text-sm text-smolder-text/60">/current-total-costs</div>
                  </div>
                  <div className="space-y-2">
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
                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-4">Full Prompt:</h3>
                  <p className="text-sm text-smolder-text/80">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                  </p>
                </div>

                {/* Materials & colors */}
                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-4">
                    Printing materials & colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-lg bg-transparent border-smolder-border text-smolder-text"
                    >
                      <span className="mr-1">🛠️</span> PLA ×
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-lg bg-transparent border-smolder-border text-smolder-text"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#FEA500] mr-1"></span> #FEA500 ×
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-lg bg-transparent border-smolder-border text-smolder-text"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#4A4A4A] mr-1"></span> #4A4A4A ×
                    </Button>
                  </div>
                </div>

                {/* Next steps */}
                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-4">
                    Next steps for your delivered 3D model
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm font-medium">
                        Concept image
                      </span>
                      <ArrowRight className="w-4 h-4 text-smolder-text/40" />
                      <span className="text-sm text-smolder-text/80">Conversion to 3D</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-smolder-text/40" />
                      <span className="text-sm text-smolder-text/80">3D printable</span>
                      <ArrowRight className="w-4 h-4 text-smolder-text/40" />
                      <span className="text-sm text-smolder-text/80">Printing & delivering</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-smolder-text/60">Next: Conversion to 3D</div>
                    <Button className="bg-transparent text-smolder-text hover:bg-smolder-border border border-smolder-border">
                      Proceed -$3.00
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom carousel */}
        <div className="mt-12 mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <Card className="overflow-hidden rounded-xl border-0 shadow-lg bg-smolder-muted">
                    <div className="relative aspect-video">
                      <img 
                        src={`/lovable-uploads/679b8c6e-5fc5-4233-bd07-0c1b4966e8dd.png`}
                        alt={`Step ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md">
                        <span className="text-white text-sm font-medium">
                          {index === 1 ? "CONCEPT" : 
                           index === 2 ? "3D" :
                           index === 3 ? "PRINTABLE FILE" :
                           index === 4 ? "PRINTING 3D MODEL" :
                           "DELIVERY TO YOU"}
                        </span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Details;