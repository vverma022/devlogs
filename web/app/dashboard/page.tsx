"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ProfileHeader } from "@/components/profile/Header";
import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/landing/Footer";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect to home page
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      <div className="flex-1 container mx-auto px-4 py-8 pt-20">
        <ProfileHeader />
        
        {/* Dashboard content will go here */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Your Coding Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for dashboard widgets */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Recent Activity
              </h3>
              <p className="text-muted-foreground">
                Your coding activity will appear here...
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Commit Streak
              </h3>
              <p className="text-muted-foreground">
                Track your daily coding streak...
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Language Stats
              </h3>
              <p className="text-muted-foreground">
                Your most used programming languages...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 