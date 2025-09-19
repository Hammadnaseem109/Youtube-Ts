import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCards from "../../components/HomeCards/HomeCards";

interface Song {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

function Home() {
  const [songs, setSongs] = useState<Song[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/SaadJDurrani/VideoApp/0e98c0e9067d41994be6bbe66a88c884c19f57fd/db.json"
      );
      console.log(response.status, "pppppp");

      if (!response.ok) {
        setError(String(response.status));
      }

      const data = await response.json();
      const list: Song[] = data.videos;
      console.log(list, "pppppp");

      setSongs(list);
    };

    fetchSongs();
  }, []);

  const handleClick = (song: Song) => {
    navigate("/player", { state: { song, songs } });
  };

  return (
    <div className="mt-[11vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {songs !== null ? (
        songs.map((song) => (
          <div
            key={song.thumbnailUrl}
            onClick={() => handleClick(song)}
            className="cursor-pointer"
          >
            <HomeCards
              thumbnail={song.thumbnailUrl}
              title={song.title}
              url={song.videoUrl}
            />
          </div>
        ))
      ) : error === null ? (
        <p className="text-center mt-10">Loading songs...</p>
      ) : (
        <p className="text-center mt-10 text-red-500">Error: {error}</p>
      )}
    </div>
  );
}

export default Home;
