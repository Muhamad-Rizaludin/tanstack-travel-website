import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-md shadow-primary/20 hover:opacity-90",
      secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed",
      outline: "border border-outline text-primary hover:bg-primary/5",
      ghost: "text-on-surface-variant hover:bg-surface-container",
      tertiary: "bg-tertiary text-on-tertiary shadow-sm hover:opacity-90"
    }

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-4 text-base",
      icon: "p-2"
    }

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <Comp
        ref={ref}
        className={combinedClassName}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
