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
            <div className="flex items-center space-x-6 mr-8">
              <Link to="/create">
                <Button variant="ghost" className="text-white/90 hover:text-white">Create</Button>
              </Link>
              <Button variant="ghost" className="text-white/90 hover:text-white">Discord</Button>
              <Button variant="ghost" className="text-white/90 hover:text-white">Terms of service</Button>
            </div>
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};