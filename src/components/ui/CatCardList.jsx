import CatCard from "./CatCard";

/**
 * 고양이 카드 목록 컴포넌트
 * @param {Object} props
 * @param {Array} props.items - 목록에 표시할 고양이 데이터 배열
 * @param {Function} [props.getImageUrl] - 이미지 URL을 가져오는 함수 (기본값: item.url)
 * @param {Function} [props.getName] - 이름을 가져오는 함수 (기본값: item.breeds[0]?.name || "고양이")
 * @param {string} [props.gridClassName] - 그리드 레이아웃 클래스 (기본값: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4")
 */
export default function CatCardList({
  items,
  getImageUrl = (item) => item.url,
  getName = (item) => item.breeds[0]?.name || "고양이",
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
  linkable = true,
}) {
  return (
    <div className={`grid ${gridClassName}`}>
      {items.map((item) => (
        <CatCard
          key={item.id}
          id={item.id}
          imageUrl={getImageUrl(item)}
          name={getName(item)}
          linkable={linkable}
        />
      ))}
    </div>
  );
}
