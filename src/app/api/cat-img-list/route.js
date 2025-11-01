import { getCats } from "@/lib/services/catApi";

export async function GET() {
  try {
    const cats = await getCats();
    return Response.json(cats);
  } catch (err) {
    return Response.json(
      { err: "고양이 데이터 가져오기 실패" },
      { status: 500 }
    );
  }
}
