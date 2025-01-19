import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-16">
        <div className="space-y-6">
          <Button 
            variant="outline"
            className="w-full bg-white hover:bg-white/90 text-black gap-2 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-smolder-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-smolder-bg px-2 text-smolder-text">
                Or continue with
              </span>
            </div>
          </div>

          <Card className="border-smolder-border bg-smolder-muted p-6">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-smolder-text">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="border-smolder-border bg-smolder-bg text-smolder-text"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-smolder-text">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="new-password"
                    className="border-smolder-border bg-smolder-bg text-smolder-text"
                  />
                </div>
                <Button className="bg-white text-black hover:bg-white/90">
                  Create account
                </Button>
              </div>
            </form>
          </Card>

          <div className="text-center text-sm">
            <span className="text-smolder-text mr-1">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="text-smolder-accent hover:text-smolder-accent/90 underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}