"use client";

/**
 * 로딩 컴포넌트
 * @param {Object} props
 * @param {string} [props.message='로딩 중...'] - 로딩 메시지
 */
export default function Loading({ message = "로딩 중..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {message}
    </div>
  );
}
