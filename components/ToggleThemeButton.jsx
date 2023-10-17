"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Button from "./Button";

const ToggleThemeButton = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      handleClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <BsSunFill className="hidden h-[1.5rem] w-[1.3rem] dark:block" />
      <BsFillMoonFill className="block h-5 w-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ToggleThemeButton;
