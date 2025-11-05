"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// 테마 컨텍스트 생성
const ThemeContext = createContext();

// 테마 사용을 위한 커스텀 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme는 ThemeProvider 내부에서만 사용할 수 있습니다");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  // 현재 테마 상태 (dark 또는 light)
  const [theme, setTheme] = useState(() => {
    // 클라이언트 사이드에서만 로컬 스토리지 접근
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme");
      return savedTheme || "light";
    }
    return "light"; // 서버 사이드 렌더링 시 기본값
  });

  // 테마 변경 함수
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // 테마 직접 설정 함수
  const setThemeMode = (mode) => {
    if (mode === "dark" || mode === "light") {
      localStorage.setItem("theme", mode);
      setTheme(mode);
    }
  };

  // 테마가 변경될 때마다 HTML 문서에 dark 클래스 추가/제거
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const value = {
    theme, // 현재 테마 (dark/light)
    isDarkMode: theme === "dark", // 다크모드인지 확인하는 편의 변수
    toggleTheme, // 테마 전환 함수
    setTheme: setThemeMode, // 테마 직접 설정 함수
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
