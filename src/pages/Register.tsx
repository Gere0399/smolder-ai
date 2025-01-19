import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Google, Facebook, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="space-y-6">
          <Button 
            variant="outline" 
            className="w-full bg-[#222222] text-white hover:bg-[#2a2a2a] border-none h-12"
            onClick={() => console.log("Google signup")}
          >
            <Google className="mr-2" />
            Continue with Google
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full bg-[#222222] text-white hover:bg-[#2a2a2a] border-none h-12"
            onClick={() => console.log("Facebook signup")}
          >
            <Facebook className="mr-2" />
            Continue with Facebook
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-smolder-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-smolder-bg px-2 text-muted-foreground">
                Or register with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#222222] border-none h-12"
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-[#222222] border-none h-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="bg-[#222222] border-none h-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:opacity-90"
          >
            Sign Up
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-smolder-accent hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}