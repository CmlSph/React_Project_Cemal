import React, { useState, useEffect } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Item(props) {
  useEffect(() => {
    // fetchItem();
    console.log(props);
  }, []);

  // const fetchItem = async () => {
  //   const fetchItem = await fetch(
  //     `https://openlibrary.org/${match.params.cityID}.json`
  //   );
  //   console.log(fetchItem);
  //   console.log(match.params.cityID);
  //   // const item = await fetchItem.json();
  //   // setItem(item);
  //   // console.log(item);
  // };
  return (
    <div>
      <h1>Hello World</h1>
      {/* <button className="goBackButton" to={goBackHandle}>
        go back
      </button> */}
      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
export default Item;
