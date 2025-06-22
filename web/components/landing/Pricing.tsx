
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individual developers starting their analytics journey",
      features: [
        "Connect up to 3 repositories",
        "Basic activity tracking",
        "7-day data history",
        "Commit analytics",
        "Language breakdown"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for serious developers who want comprehensive insights",
      features: [
        "Unlimited repositories",
        "Advanced analytics dashboard",
        "1-year data history",
        "Team collaboration insights",
        "Branch analysis",
        "Export capabilities",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "For development teams who need shared analytics",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Unlimited data history",
        "Advanced reporting",
        "Team productivity metrics",
        "Custom integrations",
        "Dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground font-mono">
            Simple pricing for every developer
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            Track your coding journey with plans that scale with your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium font-mono">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground font-mono">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground font-mono">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground font-mono">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6 font-mono text-sm">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={`w-full font-mono ${
                    plan.buttonVariant === "default" 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground font-mono">
          Questions? <a href="#" className="text-primary hover:underline">Contact our team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
