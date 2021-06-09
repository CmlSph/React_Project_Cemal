import { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import image from "./unavailableimg.jpg";

const Fetch = (props) => {
  const [books, setBooks] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

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
        {" "}
        {books.map((item) => (
          <p className="innerContainer" key={item.seed[0]}>
            {item && item.isbn ? (
              <img
                src={`http://covers.openlibrary.org/b/isbn/${item.isbn[1]}-M.jpg`}
              />
            ) : (
              <img src={image} />
            )}
            <br />
            <Link to={`${item.seed[0]}`}>
              <span>Click to see the description</span>
              <br />
              Title: {item.title}, <br />
            </Link>
            Author: {item.author_name}, <br />
            Edition Count: {item.edition_count}, <br />
            First Publish Year: {item.first_publish_year}, <br />
            Cover ID: {item.cover_i}, <br />
            Seed[0]: {item.seed[0]}, <br />
            {/* {item && item.isbn ? (
              <img
                src={`http://covers.openlibrary.org/b/isbn/${item.isbn[1]}-M.jpg`}
              />
            ) : null} */}
          </p>
        ))}
      </div>
    </>
  );
};

export default Fetch;
