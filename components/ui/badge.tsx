import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-sm text-xs font-medium", {
  variants: {
    variant: {
      default: "bg-muted px-2 py-1 text-foreground/80",
      outline: "border border-border px-2 py-0.5 text-muted-foreground",
      gradient: "border border-accent/60 px-2 py-0.5 text-foreground",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
