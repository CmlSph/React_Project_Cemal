import { useState } from "react";
import Fetch from "./Fetch";
import "./style.css";

const Search = () => {
  const [cityName, setCityName] = useState();
  const getName = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div className="app_container">
      <form>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter a search word..."
          onChange={getName}
          value={cityName}
        />
      </form>

      <Fetch cityName={cityName} setCityName={setCityName} />
    </div>
  );
};

export default Search;
