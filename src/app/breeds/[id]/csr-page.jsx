"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "@/components/common/PageContainer";
import BreedDetailHeader from "./_components/BreedDetailHeader";
import CatDetail from "@/components/ui/CatDetail";
import Loading from "@/components/ui/Loading";
import ErrorDisplay from "@/components/ui/ErrorDisplay";
import { getCatByIdClient } from "@/lib/services/catApi";

export default function CatBreedPage() {
  console.log("CSR-CatBreedPage");
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCat() {
      try {
        const cats = await getCatByIdClient(id);
        const cat = cats[0];
        setCat(cat);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadCat();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!cat) return <ErrorDisplay message="고양이 정보를 찾을 수 없습니다." />;

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
