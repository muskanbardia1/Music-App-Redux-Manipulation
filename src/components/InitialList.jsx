import React from "react";
import { useSelector } from "react-redux";
import SongNameCard from "./SongNameCard.jsx";

function InitialList() {
  const { songList } = useSelector((state) => state);

  return (
    <div>
      {songList &&
        songList.length > 0 &&
        songList.map((user) => <SongNameCard song={user} />)}
    </div>
  );
}

export default InitialList;
