import PageContainer from "@/components/common/PageContainer";
import BreedDetailHeader from "./_components/BreedDetailHeader";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";

export default async function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = await params;
  const cats = await fetch("/api/cat-img-list").then((res) => res.json());
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
