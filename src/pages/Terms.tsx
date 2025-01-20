import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Terms() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("terms");
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const getTitleFromTab = (tab: string) => {
    switch(tab) {
      case "terms": return "Terms of Service";
      case "privacy": return "Privacy Policy";
      case "cookies": return "Cookie Policy";
      default: return "Terms of Service";
    }
  };

  useEffect(() => {
    document.title = getTitleFromTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-smolder-bg relative w-full overflow-hidden">
      <Navbar />
      
      {/* Added backdrop for tabs */}
      <div 
        className={`fixed top-0 left-0 right-0 h-24 transition-all duration-300 z-10 
          ${isScrolled ? 'bg-black/40 backdrop-blur-xl' : ''}`} 
      />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex items-center mb-8 pl-4 sm:pl-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white/90 hover:text-white hover:bg-transparent hover:scale-110 transition-transform"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl sm:text-4xl font-semibold text-white ml-4">
            {getTitleFromTab(activeTab)}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:pl-16">
          <div className="flex-1 max-w-5xl">
            <Tabs 
              defaultValue="terms" 
              className="space-y-8"
              onValueChange={(value) => setActiveTab(value)}
            >
              <div className="overflow-x-auto sticky top-24 bg-smolder-bg z-20">
                <TabsList className="bg-transparent border-b border-smolder-border w-fit h-auto p-0 space-x-4 sm:space-x-8 mb-4">
                  <TabsTrigger 
                    value="terms"
                    className="text-sm px-0 py-4 data-[state=active]:bg-transparent data-[state=active]:text-smolder-accent data-[state=active]:border-b-2 data-[state=active]:border-smolder-accent rounded-none transition-colors"
                  >
                    Terms of Service
                  </TabsTrigger>
                  <TabsTrigger 
                    value="privacy"
                    className="text-sm px-0 py-4 data-[state=active]:bg-transparent data-[state=active]:text-smolder-accent data-[state=active]:border-b-2 data-[state=active]:border-smolder-accent rounded-none transition-colors"
                  >
                    Privacy Policy
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cookies"
                    className="text-sm px-0 py-4 data-[state=active]:bg-transparent data-[state=active]:text-smolder-accent data-[state=active]:border-b-2 data-[state=active]:border-smolder-accent rounded-none transition-colors"
                  >
                    Cookie Policy
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pr-0 lg:pr-6">
                <TabsContent value="terms" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <Separator className="my-6" />
                    
                    <div id="section1">
                      <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                      <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your access to and use of Smolder AI's services, including any updates, new features, and new offerings. Please read these Terms carefully before using our services. By using our services, you agree to these Terms. If you do not agree to these Terms, do not use our services.</p>
                    </div>

                    <div id="section2">
                      <h3 className="text-lg font-semibold mb-3">2. Use License</h3>
                      <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Smolder AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on Smolder AI's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</p>
                    </div>

                    <div id="section3">
                      <h3 className="text-lg font-semibold mb-3">3. Disclaimer</h3>
                      <p className="mb-4">The materials on Smolder AI's website are provided on an 'as is' basis. Smolder AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Furthermore, Smolder AI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                    </div>

                    <div id="section4">
                      <h3 className="text-lg font-semibold mb-3">4. User Obligations</h3>
                      <p className="mb-4">As a user of our services, you agree to use them only for lawful purposes and in accordance with these Terms. You agree not to use our services: in any way that violates any applicable federal, state, local, or international law or regulation; to transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation; to impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</p>
                    </div>

                    <div id="section5">
                      <h3 className="text-lg font-semibold mb-3">5. Account Terms</h3>
                      <p className="mb-4">You must be 13 years or older to use this Service. You must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process. Your login may only be used by one person - a single login shared by multiple people is not permitted. You are responsible for maintaining the security of your account and password. The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <Separator className="my-6" />
                    
                    <div id="section1">
                      <h3 className="text-lg font-semibold mb-3">1. What Personal Information we collect</h3>
                      <p className="mb-4">We collect information that you provide directly to us, including: name, email address, postal address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services, including: IP address, web browser type, operating system version, mobile device identifier, and usage information about your interactions with our services.</p>
                    </div>

                    <div id="section2">
                      <h3 className="text-lg font-semibold mb-3">2. How we use your information</h3>
                      <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, develop new features, communicate with you, monitor and analyze trends and usage, detect and prevent security incidents, and personalize your experience. We process your information for these purposes given our legitimate interest in improving our services and your experience with it.</p>
                    </div>

                    <div id="section3">
                      <h3 className="text-lg font-semibold mb-3">3. Information sharing</h3>
                      <p className="mb-4">We do not share your personal information with third parties without your consent, except: with vendors and service providers who need access to such information to carry out work on our behalf; in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process; if we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or others.</p>
                    </div>

                    <div id="section4">
                      <h3 className="text-lg font-semibold mb-3">4. Data retention and deletion</h3>
                      <p className="mb-4">We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.</p>
                    </div>

                    <div id="section5">
                      <h3 className="text-lg font-semibold mb-3">5. Security measures</h3>
                      <p className="mb-4">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and where appropriate, notify those individuals whose information may have been compromised.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cookies" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <p className="mb-4">Last updated: March 14, 2024</p>
                    <Separator className="my-6" />
                    
                    <div id="section1">
                      <h3 className="text-lg font-semibold mb-3">1. What are cookies</h3>
                      <p className="mb-4">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies help provide additional functionality to the site or help us analyze site usage more accurately.</p>
                    </div>

                    <div id="section2">
                      <h3 className="text-lg font-semibold mb-3">2. How we use cookies</h3>
                      <p className="mb-4">We use cookies for several purposes, including: to enable certain functions of the service; to provide analytics; to store your preferences; to enable advertisements delivery, including behavioral advertising. We use both session-based and persistent cookies, dependent upon how you use or interact with our services.</p>
                    </div>

                    <div id="section3">
                      <h3 className="text-lg font-semibold mb-3">3. Types of cookies</h3>
                      <p className="mb-4">Essential cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Performance cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. Functionality cookies: These cookies enable the website to provide enhanced functionality and personalization. Analytics cookies: These cookies help us understand how visitors interact with our website.</p>
                    </div>

                    <div id="section4">
                      <h3 className="text-lg font-semibold mb-3">4. Managing cookies</h3>
                      <p className="mb-4">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>
                    </div>

                    <div id="section5">
                      <h3 className="text-lg font-semibold mb-3">5. Third-party cookies</h3>
                      <p className="mb-4">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. The cookies placed by third-party services are governed by the respective privacy policies of these third parties.</p>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="w-full lg:w-64 order-first lg:order-last">
            <div className="lg:sticky lg:top-32">
              <div className="lg:h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-transparent">
                <h3 className="text-sm font-medium text-white/90 mb-3">Table of contents</h3>
                <nav className="space-y-1">
                  {tableOfContents[activeTab as keyof typeof tableOfContents].map((item, index) => (
                    <a 
                      key={index}
                      href={`#section${index + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(`section${index + 1}`);
                      }}
                      className="block text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                {!isMobile && (
                  <div className="pt-6">
                    <button
                      onClick={scrollToTop}
                      className="text-sm text-smolder-accent hover:text-smolder-accent/80 transition-colors"
                    >
                      Back to top
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 h-8 px-3 text-xs bg-smolder-accent/90 hover:bg-smolder-accent text-white rounded-md flex items-center gap-1 shadow-lg transition-colors"
        >
          <ArrowUp className="h-3 w-3" />
          <span>Top</span>
        </button>
      )}
    </div>
  );
}
