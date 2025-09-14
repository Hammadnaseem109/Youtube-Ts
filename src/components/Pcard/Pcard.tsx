type Pcard = {
  title: string;
  thumbnail: string;
  url: string;
};

export default function Pcard({ title, thumbnail, url }: Pcard) {
    console.log(url);
    
  return (
    <div className="lg:ml-6 md:flex-row lg-flex-row mg:ml-6  flex flex-col sm:flex-col h-[60vh] sm:h-[60vh] lg:h-[15vh] md:h-[15vh] w-[80vw] sm:w-[80vw] md:w-[20vw] lg:w-[20vw] rounded-md p-1">
      <div className=" w-[100%] h-[70%] sm:w-[100%] sm:h-[70%]  md:w-[50%] md:h-[100%] lg:w-[50%] lg:h-[100%] rounded-md overflow-hidden">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[100%] h-[30%] sm:w-[100%]  sm:h-[30%] lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] flex flex-col justify-center gap-4  overflow-hidden pl-2">
        <p className="text-sm font-semibold truncate">{title}</p>
        <p className="text-sm font-semibold">T-Series</p>
        <p className="text-sm font-semibold">Songs</p>
      </div>
    </div>
  );
}
