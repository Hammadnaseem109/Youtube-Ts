import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCards from "../../components/HomeCards/HomeCards";

function Home() {
  const [songs, setsongs] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await fetch("/songs.json");
      const list = await data.json();
      setsongs(list);
    })();
  }, []);

  const handleClick = (song: any) => {
    navigate("/player", { state: { song, songs } });
  };

  return (
    <div className="mt-[11vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {songs.map((song, index) => (
        <div
          key={index}
          onClick={() => handleClick(song)}
          className="cursor-pointer"
        >
          <HomeCards
            thumbnail={song.thumbnail}
            title={song.title}
            url={song.url}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
