import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-smolder-bg/80 backdrop-blur-sm border-b border-smolder-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-smolder-accent font-semibold text-xl">Smolder AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-smolder-text hover:text-white">Create</Button>
            <Button variant="ghost" className="text-smolder-text hover:text-white">Discord</Button>
            <Button variant="ghost" className="text-smolder-text hover:text-white">Terms of service</Button>
            <Button className="bg-smolder-accent hover:bg-smolder-accent/90 text-white">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};