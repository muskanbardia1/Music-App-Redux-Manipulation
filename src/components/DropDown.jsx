import { useState } from "react";

import "react-dropdown/style.css";
import "../App.css";
import SongArtistCard from "./SongArtistCard";
import SongNameCard from "./SongNameCard";

function DropDown() {
  const [state, setState] = useState("song");
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Sort By :
          <select value={state} onChange={(event) => handleChange(event)}>
            <option value="song">Song Name</option>
            <option value="artist">Artist Name</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default DropDown;
