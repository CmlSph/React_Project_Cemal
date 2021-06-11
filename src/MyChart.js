import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams, Link } from "react-router-dom";
import image from "./images/noCover.jpg";

function Shop(match) {
  useEffect(() => {
    fetchItems();
    console.log(match);
  }, []);
  const [items, setItems] = useState([]);
  let { bookId } = useParams();
  const fetchItems = async () => {
    const data = await fetch(`https://openlibrary.org/books/${bookId}.json`);
    const items = await data.json();
    console.log(items);

    // console.log(items.first_sentence.value);
    setItems(items);
  };
  return (
    <>
      <div className="innerContainer2">
        {/* <h1>Hello World</h1> */}
        {/* <h1>{items.first_sentence.value}</h1> */}
        {/* {items && items.isbn ? (
          <img
            src={`http://covers.openlibrary.org/b/isbn/${items.isbn[1]}-M.jpg`}
          />
        ) : (
          <img src={image} />
        )} */}
        <h2>Title: {items.title}</h2>
        {items && items.number_of_pages ? (
          <h3>Number of Pages: {items.number_of_pages}</h3>
        ) : (
          <h3>Number of Pages: Not provided</h3>
        )}
        {items && items.publishers ? (
          <h3>Publisher: {items.publishers}</h3>
        ) : (
          <h3>Publisher: Not provided</h3>
        )}
        {items && items.publish_date ? (
          <h3>Publish Date: {items.publish_date}</h3>
        ) : (
          <h3>Publish Date: Not provided</h3>
        )}
        {items && items.publish_places ? (
          <h3>Publish Places: {items.publish_places}</h3>
        ) : (
          <h3>Publish Places: Not provided</h3>
        )}
        {items && items.subjects ? (
          <h3>
            Subjects: {items.subjects[0]} {items.subjects[1]}{" "}
            {items.subjects[2]} {items.subjects[3]}
          </h3>
        ) : (
          <h3>Subjects: Not provided</h3>
        )}
      </div>
      <div>
        <Link className="back" to="/">
          Back
        </Link>
      </div>
    </>
  );
}
export default Shop;
