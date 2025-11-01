"use client";

import Link from "next/link";
import Card from "./Card";

/**
 * 고양이 카드 컴포넌트
 * @param {Object} props
 * @param {string} props.id - 고양이 ID
 * @param {string} props.imageUrl - 고양이 이미지 URL
 * @param {string} props.name - 고양이 이름
 * @param {boolean} [props.linkable=true] - 링크 가능 여부
 * @param {React.ReactNode} [props.children] - 추가 콘텐츠 (옵션)
 */
export default function CatCard({
  id,
  imageUrl,
  name,
  linkable = true,
  children,
}) {
  if (linkable) {
    return (
      <Link href={`/breeds/${id}`}>
        <Card imageUrl={imageUrl} name={name}>
          {children}
        </Card>
      </Link>
    );
  }

  return (
    <Card imageUrl={imageUrl} name={name}>
      {children}
    </Card>
  );
}
