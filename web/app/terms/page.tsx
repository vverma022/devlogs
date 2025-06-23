import React from "react";
import { getMonthYear } from "@/utils/date.utils";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold font-sans mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8 font-mono">
          By using DevLogs, you agree to our terms. Use the service respectfully and responsibly. We reserve the right to update these terms at any time.
        </p>
        <div className="text-xs text-muted-foreground font-mono">Last updated: {getMonthYear()}</div>
      </div>
    </main>
  );
} 