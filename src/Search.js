import { useState } from "react";
import Fetch from "./Fetch";
import Button from "./Button";
import "./style.css";

const Search = (props) => {
  const [cityName, setCityName] = useState("");
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
        {/* <div>
          <Button onClickEvent={getCity} disabled={!props.cityName} />
        </div> */}
      </form>

      <Fetch cityName={cityName} setCityName={setCityName} />
    </div>
  );
};

export default Search;
