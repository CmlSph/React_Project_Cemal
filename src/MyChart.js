import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams, Link } from "react-router-dom";
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
    <div>
      <h1>Hello World</h1>
      {/* <h1>{items.first_sentence.value}</h1> */}
      <h2>Title: {items.title}</h2>

      <h3>Number of Pages: {items.number_of_pages}</h3>
      <h3>Publisher: {items.publishers}</h3>
      <h3>Publish Date: {items.publish_date}</h3>
      <h3>Subjects: {items.subjects}</h3>

      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
export default Shop;
