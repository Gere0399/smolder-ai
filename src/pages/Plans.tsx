import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      description: "Perfect for getting started",
      features: [
        "5 AI generations per month",
        "Basic support",
        "72h delivery time",
        "Community access"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      description: "Most popular for creators",
      features: [
        "25 AI generations per month",
        "Priority support",
        "48h delivery time",
        "Community access",
        "Custom modifications",
        "Commercial license"
      ]
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For professional creators",
      features: [
        "Unlimited AI generations",
        "24/7 Premium support",
        "24h delivery time",
        "Community access",
        "Custom modifications",
        "Commercial license",
        "API access",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6445AB] to-[#7E3F41] mb-4">
            Choose Your Plan
          </h1>
          <p className="text-smolder-text/60 max-w-2xl mx-auto">
            Select the perfect plan for your creative journey. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative overflow-hidden border-smolder-border bg-smolder-muted p-6">
              {plan.name === "Pro" && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-[#6445AB] to-[#7E3F41] px-12 py-1 text-sm text-white">
                  Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-smolder-text mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-smolder-accent mb-2">
                  {plan.price}<span className="text-sm text-smolder-text/60">/month</span>
                </div>
                <p className="text-sm text-smolder-text/60 mb-6">{plan.description}</p>
              </div>
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-smolder-accent mr-2" />
                    <span className="text-smolder-text">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-8 relative bg-transparent text-smolder-text hover:bg-transparent border-2 border-[#6445AB] before:absolute before:inset-0 before:bg-gradient-to-r before:from-smolder-gradient-from before:to-smolder-gradient-to before:rounded-md before:-z-10 after:absolute after:inset-[1px] after:bg-smolder-muted after:rounded-[4px] after:-z-10 transition-all duration-300 hover:border-opacity-80"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;