"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      enableSystem={true}
      defaultTheme="system"
      enableColorScheme={true}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
