async function getCatBreeds() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}&limit=8`
  );

  if (!res.ok) {
    throw new Error("고양이 품종 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function CatBreeds() {
  const breeds = await getCatBreeds();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-4">고양이 품종 리스트</h1>

      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {breeds.map((breed) => (
            <div
              key={breed.id}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-lime-400">
                <img
                  src={breed.image?.url || "/placeholder-cat.jpg"}
                  alt={breed.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{breed.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
