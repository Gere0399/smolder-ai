import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Download, ChevronDown, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const materialColors = {
  plastic: "bg-blue-500",
  metal: "bg-gray-500",
  wood: "bg-yellow-800",
  ceramic: "bg-red-500",
  glass: "bg-blue-200",
};

type MaterialType = keyof typeof materialColors;

export default function Details() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Email sent!",
      description: "We'll get back to you soon.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      
      <div className={`fixed top-0 left-0 right-0 h-24 transition-all duration-300 z-10 ${
        isScrolled ? 'bg-gradient-to-br from-[#13111C]/90 via-[#1A1F2C]/90 to-[#221F26]/90 backdrop-blur-md' : ''
      }`} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-smolder-text">
                3D - This is the prompt resumed as...
              </h1>
              <a href="/details" className="text-smolder-text/60 hover:text-smolder-text transition-colors">
                View original prompt
              </a>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-smolder-muted">
                <img
                  ref={imageRef}
                  src="/placeholder.jpg"
                  alt="3D Model"
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              <div
                ref={sliderRef}
                className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted pb-4"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`relative flex-shrink-0 cursor-pointer ${
                      selectedImage === i ? 'ring-2 ring-smolder-accent' : ''
                    }`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <div className="w-32 aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.jpg"
                        alt={`View ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="w-full bg-gradient-to-br from-[#13111C]/40 via-[#1A1F2C]/40 to-[#221F26]/40 backdrop-blur-sm">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <Card className="p-6 bg-smolder-muted border-smolder-border">
                      <p className="text-smolder-text">
                        This is a detailed description of the 3D model...
                      </p>
                    </Card>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <Card className="p-6 bg-smolder-muted border-smolder-border">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-smolder-text/60">Materials:</span>
                          <div className="flex space-x-2">
                            {(Object.keys(materialColors) as MaterialType[]).map((material) => (
                              <div
                                key={material}
                                className={`w-6 h-6 rounded-full ${materialColors[material]}`}
                                title={material}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                  <TabsContent value="comments" className="mt-4">
                    <Card className="p-6 bg-smolder-muted border-smolder-border">
                      <p className="text-smolder-text">No comments yet.</p>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <Card className="p-6 bg-smolder-muted border-smolder-border">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-smolder-text">Download</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Download as STL</DropdownMenuItem>
                      <DropdownMenuItem>Download as OBJ</DropdownMenuItem>
                      <DropdownMenuItem>Download as FBX</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send us a message</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[100px]"
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Card className="p-6 bg-smolder-muted border-smolder-border">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-smolder-text">Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-smolder-text/60">Created</span>
                    <span className="text-smolder-text">March 8, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-smolder-text/60">File size</span>
                    <span className="text-smolder-text">24.5 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-smolder-text/60">Format</span>
                    <span className="text-smolder-text">STL, OBJ, FBX</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}