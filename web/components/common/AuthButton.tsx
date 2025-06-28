"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import GithubConnectDialog from "./GithubConnectDialog";

const AuthButton = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  if (status === "loading") {
    return (
      <RainbowButton size="lg" className="gap-2 text-white dark:text-black" disabled>
        Loading...
      </RainbowButton>
    );
  }

  if (session) {
    return (
      <RainbowButton 
        size="lg" 
        className="gap-2 text-white dark:text-black"
        onClick={handleDashboardClick}
      >
        Logs
      </RainbowButton>
    );
  }

  return (
    <GithubConnectDialog
      trigger={
        <RainbowButton size="lg" className="gap-2 text-white dark:text-black">
          Get Started
        </RainbowButton>
      }
    />
  );
};

export default AuthButton; 