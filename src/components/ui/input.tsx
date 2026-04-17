import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">
              {icon}
            </span>
          </div>
        )}
        <input
          type={type}
          className={`block w-full ${icon ? 'pl-11' : 'px-4'} py-3 bg-surface-variant/30 border-0 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/60 text-sm outline-none ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"
