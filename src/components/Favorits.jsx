import React from "react";
import { useSelector } from "react-redux";
import SongNameCard from "./SongNameCard.jsx";


function Favorits() {
  const { profile } = useSelector((state) => state);
  return (
    <div>
      {profile &&
        profile.fav.length > 0 &&
        profile.fav.map((user) => <SongNameCard song={user} />)}
    </div>
  );
}

export default Favorits;
