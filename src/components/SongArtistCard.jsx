import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Badge from "@material-ui/core/Badge";

function SongArtistCard({ song }) {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={song.image[3]["#text"]}
          alt="Avatar"
          style={{ width: "100%", height: "350px" }}
        />
        <div className="container">
          <h3>
            <b>Artist: {song.artist.name}</b>
          </h3>
          <br />
          <h5>Song: {song.name}</h5>
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
        </div>
      </div>
    </div>
  );
}

export default SongArtistCard;
