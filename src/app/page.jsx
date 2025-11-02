import { getCats } from "@/lib/services/catApi";
import { getPlaiceholder } from "plaiceholder";
import PageContainer from "@/components/common/PageContainer";
import CatCardList from "@/components/ui/CatCardList";
import Image from "next/image";

export default async function Home() {
  const cats = await getCats();

  const imageUrl =
    "https://res.cloudinary.com/dv8ifoygg/image/upload/v1706786484/cat7_xdqpdr.jpg";

  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <PageContainer title="The Cat API">
      <div className="relative mx-auto w-[300px] h-[300px] flex justify-center items-center mb-4">
        <Image
          src={imageUrl}
          alt="The Cat API"
          fill
          sizes="300px"
          placeholder="blur"
          className="object-cover"
          blurDataURL={base64}
        />
      </div>
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}
