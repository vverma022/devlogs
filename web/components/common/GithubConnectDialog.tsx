'use client';

import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { signIn } from 'next-auth/react';

interface GithubConnectDialogProps {
  trigger: React.ReactNode;
}

const GithubConnectDialog: React.FC<GithubConnectDialogProps> = ({ trigger }) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 border border-white/20 dark:border-zinc-300/10 shadow-lg rounded-2xl">
      <DialogHeader>
        <DialogTitle className="text-center font-semibold">Connect with GitHub</DialogTitle>
        <DialogDescription className="text-center text-black dark:text-white">
          To get started, connect your GitHub account.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center gap-4 mt-4 w-full">
        <RainbowButton
          size="lg"
          className="w-full max-w-xs flex items-center gap-2 justify-center text-white dark:text-black"
          onClick={() => signIn('github')}
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Sign in with GitHub
        </RainbowButton>
      </div>
    </DialogContent>
  </Dialog>
);

export default GithubConnectDialog; 