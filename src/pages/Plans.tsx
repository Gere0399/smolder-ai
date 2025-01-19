import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  const plans = [
    {
      name: "Basic",
      price: billingCycle === 'yearly' ? "$6" : "$9",
      period: "/ month",
      billing: "billed yearly",
      features: [
        "1000x Fast Image Generation",
        "100x Image Generation",
        "Prompt Enhancement",
        "Realism Mode",
        "Quality Boost",
        { text: "Upscale Image", badge: "free" },
        "Access Pro Upscale",
        "Access Remove Background"
      ]
    },
    {
      name: "Standard",
      price: billingCycle === 'yearly' ? "$19" : "$29",
      period: "/ month",
      billing: "billed yearly",
      isPopular: true,
      features: [
        "5000x Fast Image Generation",
        "500x Image Generation",
        "Prompt Enhancement",
        "Realism Mode",
        "Quality Boost",
        { text: "Upscale Image", badge: "free" },
        "Access Pro Upscale",
        "Access Remove Background"
      ]
    },
    {
      name: "Pro",
      price: billingCycle === 'yearly' ? "$38" : "$49",
      period: "/ month",
      billing: "billed yearly",
      features: [
        "10000x Fast Image Generation",
        "2400x Image Generation",
        "Prompt Enhancement",
        "Realism Mode",
        "Quality Boost",
        { text: "Upscale Image", badge: "free" },
        "Access Pro Upscale",
        "Access Remove Background"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-smolder-bg">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-smolder-muted rounded-full p-1">
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-smolder-accent text-white'
                  : 'text-smolder-text/60 hover:text-smolder-text'
              }`}
            >
              Yearly Billing
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-smolder-accent text-white'
                  : 'text-smolder-text/60 hover:text-smolder-text'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className="relative flex flex-col h-full overflow-hidden border-smolder-border bg-smolder-muted hover:border-smolder-accent/50 transition-colors duration-300 p-8"
            >
              {plan.isPopular && (
                <div className="absolute -right-16 top-6 rotate-45 bg-gradient-to-r from-[#6445AB] to-[#7E3F41] px-16 py-1.5 text-sm font-semibold text-white shadow-lg">
                  Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-smolder-text/60 mb-4">{plan.name.toLowerCase()}.</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-lg text-smolder-text/60">{plan.period}</span>
                </div>
                <p className="text-sm text-smolder-text/60 mt-1">{plan.billing}</p>
              </div>
              
              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm gap-3">
                    <Check className="w-5 h-5 text-[#6445AB]" />
                    <span className="text-smolder-text flex items-center gap-2">
                      {typeof feature === 'string' ? (
                        feature
                      ) : (
                        <>
                          {feature.text}
                          <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                            {feature.badge}
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full mt-auto bg-white text-black hover:bg-white/90 transition-colors duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
