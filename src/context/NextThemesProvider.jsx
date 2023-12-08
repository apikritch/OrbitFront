"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

import React from "react";

const NextThemesProvider = (props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default NextThemesProvider;
