import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="text-[#FF6B81] font-semibold text-xl">Smolder AI</Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-4 mr-32">
              <Link to="/create">
                <Button 
                  variant="ghost" 
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
                >
                  Create
                </Button>
              </Link>
              <a 
                href="https://discord.gg/uahMNyxd4h" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
                >
                  Discord
                </Button>
              </a>
              <Button 
                variant="ghost" 
                className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
              >
                Terms of service
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};