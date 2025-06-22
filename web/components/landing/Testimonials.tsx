
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "DevLogs helped me understand my coding patterns and optimize my productivity. I discovered I'm most productive in the morning and adjusted my schedule accordingly.",
      author: "Sarah Chen",
      position: "Full Stack Developer",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The GitHub integration is seamless. I love seeing my commit streaks and language usage over time. It's like a fitness tracker for developers!",
      author: "Marcus Rodriguez",
      position: "Senior Software Engineer",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "As a team lead, DevLogs analytics help me understand our development velocity and identify bottlenecks in our workflow. Invaluable insights.",
      author: "Jennifer Park",
      position: "Engineering Manager",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground font-mono">
            Loved by developers worldwide
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            See how DevLogs helps developers track and improve their coding journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic font-mono text-sm">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground font-mono">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground font-mono">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
