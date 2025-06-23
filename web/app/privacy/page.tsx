import React from "react";
import { getMonthYear } from "@/utils/date.utils";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold font-sans mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8 font-mono">
          We respect your privacy. DevLogs does not share your personal information with third parties. Your data is used only to provide and improve our service.
        </p>
        <div className="text-xs text-muted-foreground font-mono">Last updated: {getMonthYear()}</div>
      </div>
    </main>
  );
} 