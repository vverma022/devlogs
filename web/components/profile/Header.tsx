"use client"

import { useSession } from "next-auth/react"
import { useGitHubUser } from "@/hooks/use-github-user"
import { Building2, MapPin, Link as LinkIcon, CalendarDays, ExternalLink } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ProfileHeader() {
  const { data: session } = useSession()
  console.log(session)
  const { githubUser } = useGitHubUser()

  console.log(githubUser)

  const name = githubUser?.name || session?.user?.name || ""
  const username = githubUser?.login || session?.user?.email?.split("@")[0] || ""
  const avatarUrl = githubUser?.avatar_url || session?.user?.image || undefined
  const bio = githubUser?.bio || ""
  const company = githubUser?.company || ""
  const location = githubUser?.location || ""
  const blog = githubUser?.blog || ""
  const profileUrl = githubUser?.html_url || ""
  const joinDate = githubUser?.created_at ? new Date(githubUser.created_at).toLocaleDateString() : ""

  return (
    <div className="w-full max-w-xl mx-auto mt-12 rounded-xl bg-card shadow-lg border border-border backdrop-blur-sm p-0 flex flex-col items-center animate-fade-in overflow-hidden relative">
      <div className="w-full h-28 bg-gradient-to-r from-primary/60 via-secondary/40 to-background/60 blur-[1px]" />
      <div className="absolute left-1/2 top-14 -translate-x-1/2 z-10">
        <Avatar className="size-24 border-4 border-card shadow-lg bg-muted">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name?.[0] || "U"}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center gap-2 w-full pt-20 pb-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-medium tracking-tighter text-foreground truncate max-w-xs drop-shadow-sm">{name}</span>
          <Badge variant="secondary" className="font-mono text-xs px-2 py-0.5 text-primary border-primary/30 bg-primary/10 tracking-tighter">@{username}</Badge>
          {profileUrl && (
            <Link href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition">
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
        {bio && (
          <span className="text-muted-foreground text-xs md:text-sm text-center leading-snug max-w-xs w-full font-normal font-mono">{bio}</span>
        )}
      </div>
      {(company || location || blog || joinDate) && <div className="w-full border-t border-border/30 mb-2" />}
      {(company || location || blog || joinDate) && (
        <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground pb-4 px-6 w-full font-mono">
          {company && (
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><Building2 className="w-4 h-4 text-primary" />{company}</span>
          )}
          {location && (
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><MapPin className="w-4 h-4 text-primary" />{location}</span>
          )}
          {blog && (
            <Link href={blog.startsWith('http') ? blog : `https://${blog}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md hover:text-primary transition">
              <LinkIcon className="w-4 h-4 text-primary" />Blog
            </Link>
          )}
          {joinDate && (
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md"><CalendarDays className="w-4 h-4 text-primary" />Joined {joinDate}</span>
          )}
        </div>
      )}
      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}
