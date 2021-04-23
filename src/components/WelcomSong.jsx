import React, { useEffect } from "react";
import Navbar from "./Navbar";

import { store } from "../index.js";
import { songList } from "../store/actions";

function WelcomSong() {
  useEffect(() => {
    store.dispatch(songList());
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default WelcomSong;
