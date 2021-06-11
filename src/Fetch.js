import { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import { BooksContext } from "./App";
import Book from "./Book";
const Fetch = (props) => {
  const { setBooks } = useContext(BooksContext);
  const { books } = useContext(BooksContext);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const removeCity = (id) => {
  //   setBooks(books.filter((data) => data.id !== id));
  // };
  const getCity = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${props.cityName}`
      );
      const data = await res.json();
      console.log(data);
      setBooks(data.docs);
      // if (data.cod === 200) {
      //   setHasError(false);
      //   setWeatherData([data, ...weatherData]);
      //   setLoading(false);
      //   setCityName("");
      // } else {
      //   setHasError(true);
      //   setLoading(false);
      // }
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(books);
  });
 
  return (
    <>
      <div>
        <Button onClickEvent={getCity} disabled={!props.cityName} />
      </div>
      <div className="bookContainer">
        <Book loading={loading} />
      </div>
    </>
  );
};
export default Fetch;
