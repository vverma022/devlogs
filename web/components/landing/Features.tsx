"use client";
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Github, Activity, BarChart3, Calendar, GitBranch, Clock } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "GitHub Integration",
      description: "Seamlessly connect to your GitHub repositories and sync your coding activity in real-time.",
      expandedDescription: "Authenticate with GitHub OAuth, access public and private repositories, and automatically track commits, pull requests, and contributions. Monitor multiple repositories across different organizations with comprehensive permission management.",
      icon: (
        <Github size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Activity Tracking",
      description: "Monitor your daily coding patterns, commit frequency, and development streaks.",
      expandedDescription: "Track when you code most productively, identify your peak coding hours, and maintain coding streaks. Visualize your activity with heatmaps, daily summaries, and productivity insights that help you optimize your development workflow.",
      icon: (
        <Activity size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Code Analytics",
      description: "Analyze your code contributions, languages used, and repository statistics.",
      expandedDescription: "Get detailed breakdowns of your programming language usage, lines of code written, and contribution patterns. Track code quality metrics, repository health scores, and development velocity across all your projects.",
      icon: (
        <BarChart3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Commit History",
      description: "Visualize your commit timeline with detailed insights and patterns.",
      expandedDescription: "Explore your complete commit history with interactive timelines, commit message analysis, and pattern recognition. Identify trends in your development process and track how your coding habits evolve over time.",
      icon: (
        <Calendar size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Branch Analysis",
      description: "Track branch creation, merges, and collaboration patterns across repositories.",
      expandedDescription: "Monitor branch lifecycles, merge patterns, and collaboration workflows. Analyze feature development cycles, identify bottlenecks in your branching strategy, and optimize your Git workflow for better team collaboration.",
      icon: (
        <GitBranch size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Time Insights",
      description: "Understand your coding schedule and productivity patterns over time.",
      expandedDescription: "Discover your most productive coding hours, track time spent on different projects, and identify patterns in your development schedule. Set goals, monitor progress, and optimize your work-life balance with detailed time analytics.",
      icon: (
        <Clock size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter font-mono">
            Everything you need to track your code
          </h2>
          <p className="text-cosmic-muted text-lg font-mono">
            Comprehensive GitHub analytics to understand your development patterns and boost productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3 font-mono">{feature.title}</h3>
                <p className="text-cosmic-muted font-mono text-sm">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted font-mono text-sm">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium font-mono">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
