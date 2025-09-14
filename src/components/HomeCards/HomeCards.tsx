type HomeCardsProps = {
  thumbnail: string;
  title: string;
  url: string;
};

export default function HomeCards({ thumbnail, title, url }: HomeCardsProps) {
  console.log(url);

  return (
    <div
      className="mt-3 p-2 flex flex-col 
                 w-1/1.9 sm:w-1/2.5 md:w-1/3.5 lg:w-1/4.5
                 rounded-md h-1/1.5 sm:h-1/1.5  items-start justify-start"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-md object-cover h-[70%]"
      />
      <div className="flex flex-col truncate overflow-hidden w-full h-[30%] justify-start items-start">
        <p className="font-semibold text-sm md:text-base line-clamp-2">
          {title}
        </p>
        <p className="text-xs md:text-sm text-gray-600">T-series</p>
      </div>
    </div>
  );
}
