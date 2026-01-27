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
    <div className="p-4 rounded-md bg-indigo-400 shadow-md shadow-gray-500 flex flex-col gap-2 text-white hover:scale-105 transition duration-200 relative w-min">
      <div className="p-4 bg-red-500 rounded-full border-white border-4 rotate-12 absolute -top-8 -right-8 h-24 w-24">
        {hourRequirement && (
          <div className="flex flex-col items-center">
            <p className="text-3xl text-center">{/*hourRequirement*/}??</p>
            <p>hour{hourRequirement != 1 && "s"}</p>
          </div>
        )}
      </div>
      <div
        className="h-60 w-60 rounded-md bg-indigo-50 bg-contain"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h2 className="font-bold text-2xl text-center">{name}</h2>
    </div>
  );
}
