async function getCatByid(id) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&breed_ids=${id}`
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = await params;
  const cats = await getCatByid(id);
  const cat = cats[0];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-4">{cat.breeds[0].name}</h1>

      <main className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-[400px] bg-lime-400 rounded-lg overflow-hidden">
            <img
              src={cat.url}
              alt={cat.breeds[0].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">기원</h2>
              <p className="text-gray-700">{cat.breeds[0].origin}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">설명</h2>
              <p className="text-gray-700">{cat.breeds[0].description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
