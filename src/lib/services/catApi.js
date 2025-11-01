/**
 * 메인 페이지에 표시할 고양이 데이터를 가져옵니다.
 * @returns {Promise<Array>} 고양이 데이터 배열
 */
export async function getCats() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&limit=8&has_breeds=1`,
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

/**
 * 고양이 품종 목록을 가져옵니다.
 * @returns {Promise<Array>} 고양이 품종 데이터 배열
 */
export async function getCatBreeds() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}&limit=8`,
  );

  if (!res.ok) {
    throw new Error("고양이 품종 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

/**
 * 특정 품종의 고양이 데이터를 가져옵니다. (서버 컴포넌트용)
 * @param {string} id - 고양이 품종 ID
 * @returns {Promise<Array>} 고양이 데이터 배열
 */
export async function getCatById(id) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&breed_ids=${id}`,
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

/**
 * 특정 품종의 고양이 데이터를 가져옵니다. (클라이언트 컴포넌트용)
 * @param {string} id - 고양이 품종 ID
 * @returns {Promise<Array>} 고양이 데이터 배열
 */
export async function getCatByIdClient(id) {
  // const res = await fetch(
  //   `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
  // );
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.NEXT_PUBLIC_CAT_API_KEY}&breed_ids=${id}`,
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}
