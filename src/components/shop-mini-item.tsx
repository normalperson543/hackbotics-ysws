export default function ShopMiniItem({
  imageUrl,
  name,
  hourRequirement,
}: {
  imageUrl: string;
  name: string;
  hourRequirement?: number;
}) {
  return (
    <div className="p-4 rounded-md bg-indigo-400 shadow-md shadow-gray-500 flex flex-col gap-2 text-white hover:scale-105 transition duration-200 relative">
      <div
        className="h-60 w-60 rounded-md bg-indigo-50"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h2 className="font-bold text-2xl text-center">{name}</h2>
    </div>
  );
}
