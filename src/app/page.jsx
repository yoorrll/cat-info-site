import PageContainer from "@/components/common/PageContainer";
import CatCardList from "@/components/ui/CatCardList";

async function getCats() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&limit=8&has_breeds=1`
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function Home() {
  const cats = await getCats();

  return (
    <PageContainer title="The Cat API">
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}
