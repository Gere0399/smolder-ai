import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export default function Terms() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("terms");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tableOfContents = {
    terms: [
      "Acceptance of Terms",
      "Use License",
      "Disclaimer",
      "User Obligations",
      "Account Terms"
    ],
    privacy: [
      "What Personal Information we collect",
      "How we use your information",
      "Information sharing",
      "Data retention and deletion",
      "Security measures"
    ],
    cookies: [
      "What are cookies",
      "How we use cookies",
      "Types of cookies",
      "Managing cookies",
      "Third-party cookies"
    ]
  };
  
  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex items-center mb-8 pl-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white/90 hover:text-white hover:bg-transparent mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-semibold text-white">Legal</h1>
        </div>

        <div className="flex gap-12">
          <div className="flex-1 max-w-4xl">
            <Tabs 
              defaultValue="terms" 
              className="space-y-8"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="bg-transparent w-fit h-10 p-1">
                <TabsTrigger 
                  value="terms"
                  className="data-[state=active]:bg-smolder-accent data-[state=active]:text-white px-4"
                >
                  Terms of Service
                </TabsTrigger>
                <TabsTrigger 
                  value="privacy"
                  className="data-[state=active]:bg-smolder-accent data-[state=active]:text-white px-4"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger 
                  value="cookies"
                  className="data-[state=active]:bg-smolder-accent data-[state=active]:text-white px-4"
                >
                  Cookie Policy
                </TabsTrigger>
              </TabsList>

              <ScrollArea className="h-[60vh] pr-6">
                <TabsContent value="terms" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <p className="mb-4">Welcome to Smolder AI. By accessing our website, you agree to these terms of service.</p>
                    <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                    <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    <h3 className="text-lg font-semibold mb-3">2. Use License</h3>
                    <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Smolder AI's website for personal, non-commercial transitory viewing only.</p>
                    <h3 className="text-lg font-semibold mb-3">3. Disclaimer</h3>
                    <p className="mb-4">The materials on Smolder AI's website are provided on an 'as is' basis. Smolder AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <p className="mb-4">Your privacy is important to us. It is Smolder AI's policy to respect your privacy regarding any information we may collect from you across our website.</p>
                    <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                    <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                    <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                    <p className="mb-4">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                  </div>
                </TabsContent>

                <TabsContent value="cookies" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-xl font-semibold mb-4">Cookie Policy</h2>
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <p className="mb-4">This Cookie Policy explains how Smolder AI uses cookies and similar technologies to recognize you when you visit our website.</p>
                    <h3 className="text-lg font-semibold mb-3">What are cookies?</h3>
                    <p className="mb-4">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                    <h3 className="text-lg font-semibold mb-3">How we use cookies</h3>
                    <p className="mb-4">We use cookies for several purposes, including to track your preferences and profile information, and to customize the content shown to you. Additionally, cookies help us to process your transactions and requests, verify your identity, and prevent fraud.</p>
                  </div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>

          <div className="w-64 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-white/90 mb-3">Table of contents</h3>
                <nav className="space-y-1">
                  {tableOfContents[activeTab as keyof typeof tableOfContents].map((item, index) => (
                    <a 
                      key={index}
                      href={`#section${index + 1}`} 
                      className="block text-sm text-white/70 hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <button
                onClick={scrollToTop}
                className="text-sm text-smolder-accent hover:text-smolder-accent/80 transition-colors mt-8"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}