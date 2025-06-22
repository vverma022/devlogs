"use client";
import React from 'react';
import { Github, Activity, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "GitHub Integration",
      description: "Seamlessly connect to your GitHub repositories and sync your coding activity in real-time.",
      icon: (
        <Github size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Activity Tracking",
      description: "Monitor your daily coding patterns, commit frequency, and development streaks.",
      icon: (
        <Activity size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Commit History",
      description: "Visualize your commit timeline with detailed insights and patterns.",
      icon: (
        <Calendar size={24} className="text-cosmic-accent" />
      )
    },
  ];

  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-balance text-foreground">
            Everything you need to track your <span className='text-primary'>code</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive GitHub analytics to understand your development patterns and boost productivity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-cosmic-light/20 cosmic-gradient transition-all duration-300 bg-background p-6 flex flex-col items-start"
            >
              <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium tracking-tighter mb-3 truncate whitespace-nowrap">{feature.title}</h3>
              <p className="text-md text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
