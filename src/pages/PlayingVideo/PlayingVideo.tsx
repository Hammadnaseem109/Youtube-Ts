import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Pcard from "../../components/Pcard/Pcard";
import Pvideo from "../../components/PVideo/Pvideo";
interface Song {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}
interface LocationState {
  songs: Song[];
  song: Song;
}
export default function PlayingVideo() {
  const location = useLocation();
  const state = location.state as LocationState;

  const { song, songs } = state;
  const [currentSong, setCurrentSong] = useState<Song>(song);

  useEffect(() => {
    if (song) setCurrentSong(song);
  }, [song]);

  if (!currentSong)
    return <p className="mt-[11vh] text-center">No song selected</p>;

  return (
    <div
      className="flex flex-col sm:flex-col mt-[11vh] md:flex-row items-center sm:items-center lg:flex-row 
                    gap-4 lg:justify-center lg:items-start md:justify-center md:items-start"
    >
      <Pvideo
        title={currentSong.title}
        url={currentSong.videoUrl}
        thumbnail={currentSong.thumbnailUrl}
      />

      <div className="flex flex-col gap-2 items-center sm:items-center ">
        {songs.map((s: Song, i: number) => (
          <div
            key={i}
            onClick={() => setCurrentSong(s)}
            className="cursor-pointer"
          >
            <Pcard
              title={s.title}
              thumbnail={s.thumbnailUrl}
              url={s.videoUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
