import type { ReactNode } from 'react'

/* The vertical rail that all timeline entries hang from. */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative ml-1 border-l border-border pl-8 md:ml-2 md:pl-12">
      {children}
    </ol>
  )
}
