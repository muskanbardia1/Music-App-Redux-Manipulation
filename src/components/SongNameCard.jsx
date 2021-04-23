import React, { useState } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { store } from "../index.js";
import { favData, favDelete } from "../store/actions";

function SongNameCard({ song }) {
  const [flag, setFlag] = useState(true);
  const changeFlag = () => {
    setFlag(false);
    store.dispatch(favData(song));
  };

  const changeFlagTrue = () => {
    setFlag(true);
    store.dispatch(favDelete(song));
  };
  return (
    <div className="cards">
      <div className="card row">
        {song.image[3]["#text"] ? (
          <img
            className="col"
            src={song.image[3]["#text"]}
            alt="Avatar"
            style={{ width: "100%", height: "350px" }}
          />
        ) : (
          <img
            className="col"
            src="src/black-music-icon_318-9277.jpg"
            alt="Avatar"
            style={{ width: "100%", height: "350px" }}
          />
        )}
        <div className="container col">
          <h3>
            <b>Song: {song.name}</b>
          </h3>
          <br />
          {song.artist && <h5>Artist: { song.artist}</h5>}
          <br />
        </div>
        <div className="row">
          <IconButton aria-label="skipPrev" color="inherit">
            <Badge color="secondary">
              <SkipPreviousIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="play" color="inherit">
            <Badge color="secondary">
              <PlayCircleFilledIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="skipNext" color="inherit">
            <Badge color="secondary">
              <SkipNextIcon />
            </Badge>
          </IconButton>
          {flag ? (
            <IconButton
              aria-label="skipPrev"
              color="inherit"
              onClick={changeFlag}
            >
              <Badge color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          ) : (
            <IconButton
              aria-label="skipPrev"
              color="inherit"
              onClick={changeFlagTrue}
            >
              <Badge color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default SongNameCard;
