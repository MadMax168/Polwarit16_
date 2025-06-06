import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "backdrop-blur-xl rounded-xl border shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }