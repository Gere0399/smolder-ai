import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-16">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-white">Reset Password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#222222] border-none h-12"
            />
          </div>

          <Button 
            className="w-full h-12 bg-gradient-to-r from-[#6445AB] to-[#7E3F41] hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Send Reset Link
          </Button>

          <div className="text-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link to="/login" className="text-smolder-accent hover:underline">
                Log in
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-smolder-accent hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}