import { getCatById } from "@/lib/services/catApi";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const catData = await getCatById(id);
    return Response.json(catData);
  } catch (err) {
    return Response.json(
      { err: "고양이 데이터 가져오기 실패" },
      { status: 500 }
    );
  }
}
