"use client";

/**
 * 에러 표시 컴포넌트
 * @param {Object} props
 * @param {string} props.message - 에러 메시지
 */
export default function ErrorDisplay({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      {message}
    </div>
  );
}
