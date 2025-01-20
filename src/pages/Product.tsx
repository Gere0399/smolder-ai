import { ArrowLeft, Link as LinkIcon, ArrowRight, Download, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const Details = () => {
  const statusRef = useRef<HTMLDivElement>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<{name: string, color: string} | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollStatus = () => {
      if (statusRef.current) {
        if (statusRef.current.scrollLeft >= statusRef.current.scrollWidth - statusRef.current.clientWidth) {
          statusRef.current.scrollLeft = 0;
        } else {
          statusRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scrollStatus, 50);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddMaterial = (material: string) => {
    setSelectedMaterial(material);
  };

  const handleAddColor = (name: string, color: string) => {
    setSelectedColor({ name, color });
  };

  const handleRemoveMaterial = () => {
    setSelectedMaterial(null);
  };

  const handleRemoveColor = () => {
    setSelectedColor(null);
  };

  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      
      <div className={`fixed top-0 left-0 right-0 h-24 transition-all duration-300 z-10 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : ''}`} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                  size="icon"
                  className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center border-0"
                >
                  <Download className="w-4 h-4 text-white" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Card className="rounded-xl border-smolder-border">
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-3xl font-bold text-smolder-accent">$27</div>
                    <div className="text-sm text-smolder-text/60">/current-total-costs</div>
                  </div>
                  <div 
                    ref={statusRef}
                    className="flex items-center gap-8 text-sm text-smolder-text whitespace-nowrap overflow-hidden"
                    style={{ scrollBehavior: 'smooth' }}
                  >
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
                  <div className="max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted/50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <p className="text-sm text-smolder-text/80">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. It has survived not only five centuries, but also the leap into 
                      electronic typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-3">
                    Printing materials & colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-lg bg-transparent border-smolder-border text-smolder-text"
                        >
                          <Plus className="w-4 h-4" /> Add
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-smolder-bg border-smolder-border">
                        <DropdownMenuLabel className="text-smolder-text">Materials</DropdownMenuLabel>
                        {!selectedMaterial && ["PLA", "ABS", "PETG"].map((material) => (
                          <DropdownMenuItem 
                            key={material}
                            onClick={() => handleAddMaterial(material)}
                            className="text-smolder-text hover:bg-smolder-muted focus:bg-smolder-muted"
                          >
                            {material}
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator className="bg-smolder-border" />
                        <DropdownMenuLabel className="text-smolder-text">Colors</DropdownMenuLabel>
                        {!selectedColor && [
                          { name: "Orange", color: "#FEA500" },
                          { name: "Dark Gray", color: "#4A4A4A" }
                        ].map((color) => (
                          <DropdownMenuItem 
                            key={color.name}
                            onClick={() => handleAddColor(color.name, color.color)}
                            className="text-smolder-text hover:bg-smolder-muted focus:bg-smolder-muted"
                          >
                            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color.color }}></span>
                            {color.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    {selectedMaterial && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-lg bg-transparent border-smolder-border text-smolder-text group"
                        onClick={handleRemoveMaterial}
                      >
                        <span className="mr-1">🛠️</span> {selectedMaterial}
                        <X className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    )}
                    
                    {selectedColor && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-lg bg-transparent border-smolder-border text-smolder-text group"
                        onClick={handleRemoveColor}
                      >
                        <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: selectedColor.color }}></span>
                        {selectedColor.name}
                        <X className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-smolder-text mb-3">
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
                    <Button 
                      className="relative bg-transparent text-smolder-text hover:bg-transparent border-2 border-[#6445AB] before:absolute before:inset-0 before:bg-gradient-to-r before:from-smolder-gradient-from before:to-smolder-gradient-to before:rounded-md before:-z-10 after:absolute after:inset-[1px] after:bg-smolder-muted after:rounded-[4px] after:-z-10 transition-all duration-300 hover:border-opacity-80"
                    >
                      Proceed -$3.00
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 mb-8 -mx-4 sm:mx-0">
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted/50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 pl-4">
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
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute bottom-1 right-2 bg-black/50 backdrop-blur-md hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center border-0"
                        >
                          <Download className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;