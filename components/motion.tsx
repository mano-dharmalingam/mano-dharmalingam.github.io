"use client";

import * as React from "react";

/*
  Motion policy: the home hero has the one orchestrated entrance.
  Everything else renders in place — these wrappers stay so pages keep
  a stable API, but they no longer animate on scroll.
*/

export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
