import { getCatBreeds } from "@/lib/services/catApi";

export async function GET() {
  try {
    const breeds = await getCatBreeds();
    return Response.json(breeds);
  } catch (err) {
    return Response.json(
      { err: "고양이 품종 데이터 가져오기 실패" },
      { status: 500 }
    );
  }
}
