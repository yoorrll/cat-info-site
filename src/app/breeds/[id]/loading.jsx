export default function BreedDetailLoading() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-10 h-10 border-4 border-t-transparent border-gray-300 rounded-full animate-spin mb-4" />
        <span className="text-gray-600 text-lg font-semibold">로딩 중...</span>
      </div>
    </div>
  );
}
