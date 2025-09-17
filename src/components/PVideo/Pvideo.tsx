type PvideoProps = {
  title: string;
  url: string;
  thumbnail: string;
};

export default function Pvideo({ title, url, thumbnail }: PvideoProps) {
    console.log(thumbnail);
    
  return (
    
    
    <div className="flex flex-col w-[80vw] sm:w-[80wv] md:w-[50vw] lg:w-[50vw] h-[80vh]">
      <div className="flex flex-col w-[100%] h-[75%]">
        <video
          src={url}
          title={title}
          className="w-[100%] h-full rounded-lg object-cover"
          controls
        />
      </div>

      <div className="flex flex-col justify-around items-start overflow-hidden w-[90%] h-[25%] p-2">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-semibold text-lg">T-Series</p>
        <p className="font-semibold text-lg">Song</p>
                

      </div>
    </div>
  );
}
