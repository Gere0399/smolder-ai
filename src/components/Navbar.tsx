import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-smolder-accent font-semibold text-xl">Smolder AI</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/create">
              <Button variant="ghost" className="text-smolder-text hover:text-white">Create</Button>
            </Link>
            <Button variant="ghost" className="text-smolder-text hover:text-white">Discord</Button>
            <Button variant="ghost" className="text-smolder-text hover:text-white">Terms of service</Button>
            <Button className="bg-white hover:bg-white/90 text-black">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};