import * as React from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "min-h-11 w-full rounded-md border border-clinic-leaf/20 bg-white px-3 py-2 text-sm text-clinic-ink outline-none transition placeholder:text-slate-400 focus:border-clinic-leaf focus:ring-2 focus:ring-clinic-leaf/15";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(inputClass, className)} {...props} />
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn(inputClass, "min-h-28", className)} {...props} />
);
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => <select ref={ref} className={cn(inputClass, className)} {...props} />
);
Select.displayName = "Select";
