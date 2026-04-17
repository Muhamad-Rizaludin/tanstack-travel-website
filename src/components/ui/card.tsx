import * as React from "react"

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg bg-surface-container-lowest border border-outline-variant/[0.15] shadow-[0_32px_64px_-16px_rgba(19,27,46,0.06)] transition-all overflow-hidden ${className}`}
      {...props}
    />
  )
}
