import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="text-[#FF6B81] font-semibold text-xl">Smolder AI</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu 
              className="h-8 w-8 text-white/90 hover:text-white transition-colors cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4 mr-32">
              <Link to="/create">
                <Button 
                  variant="ghost" 
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
                >
                  Create
                </Button>
              </Link>
              <Link to="/plans">
                <Button 
                  variant="ghost" 
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
                >
                  Pricing
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
              <Link to="/terms">
                <Button 
                  variant="ghost" 
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
                >
                  Legal terms
                </Button>
              </Link>
            </div>
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:scale-110 transition-transform duration-200 hover:bg-transparent"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4 bg-smolder-bg/95 backdrop-blur-sm rounded-lg p-4 border border-smolder-border">
              <Link to="/create">
                <Button 
                  variant="ghost" 
                  className="w-full text-left text-white/90 justify-start hover:bg-smolder-muted"
                >
                  Create
                </Button>
              </Link>
              <Link to="/plans">
                <Button 
                  variant="ghost" 
                  className="w-full text-left text-white/90 justify-start hover:bg-smolder-muted"
                >
                  Pricing
                </Button>
              </Link>
              <a 
                href="https://discord.gg/uahMNyxd4h" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  className="w-full text-left text-white/90 justify-start hover:bg-smolder-muted"
                >
                  Discord
                </Button>
              </a>
              <Link to="/terms">
                <Button 
                  variant="ghost" 
                  className="w-full text-left text-white/90 justify-start hover:bg-smolder-muted"
                >
                  Legal terms
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  className="w-full text-left text-white/90 justify-start hover:bg-smolder-muted"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
