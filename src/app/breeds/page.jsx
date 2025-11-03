import { getCatBreeds } from "@/lib/services/catApi";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CatBreeds() {
  const breeds = await getCatBreeds();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-4">고양이 품종 리스트</h1>

      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {breeds.map((breed) => (
            <Link href={`/breeds/${breed.id}`} key={breed.id}>
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-lime-400">
                  <Image
                    src={breed.image?.url || "/placeholder-cat.jpg"}
                    alt={breed.name}
                    fill
                    sizes="570px"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{breed.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
