"use client";

import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
// import { useEffect } from "react";

export default function Header() {
  // useEffect(() => {
  //   throw new Error("루트 레이아웃 에러 발생");
  // }, []);

  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <header className="w-full bg-white shadow-md dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-xl font-bold text-gray-800 dark:text-white">
          고양이 정보 사이트
        </div>

        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/breeds">Breeds</Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
