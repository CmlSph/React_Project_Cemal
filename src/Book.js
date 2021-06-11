import { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";
import image from "./images/noCover.jpg";
const Book = (props) => {
  const { books } = useContext(BooksContext);
  const { setBooks } = useContext(BooksContext);
  const removeCity = (id, index) => {
    setBooks(books.filter((data) => data.id !== id));
  };
  return (
    <>
      <div className="bookContainer">
        {props.loading ? (
          <p>Loading, please wait</p>
        ) : (
          books.map((item) => (
            <p className="innerContainer" key={item.seed[0]}>
              <button
                type="button"
                className="deleteBookButton"
                onClick={() => removeCity(books.id)}
              >
                X
              </button>
              {item && item.isbn ? (
                <img
                  src={`http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`}
                />
              ) : (
                <img src={image} />
              )}
              <br />
              <Link to={`${item.seed[0]}`}>
                Title: {item.title}, <br />
              </Link>
              Author: {item.author_name}, <br />
              First Publish Year: {item.first_publish_year}, <br />
              Edition Count: {item.edition_count}, <br />
              {/* Cover ID: {item.cover_i}, <br />
              Seed[0]: {item.seed[0]}, <br /> */}
              {/* {item && item.first_sentence ? (
                <h3>First Sentence: {item.first_sentence}</h3>
              ) : null} */}
              {/* First Sentence:{item.first_sentence}, <br /> */}
              {/* {item && item.isbn && (
                <img
                  src={`http://covers.openlibrary.org/b/isbn/${item.isbn[1]}-M.jpg`}
                />
              )} */}
            </p>
          ))
        )}
      </div>
    </>
  );
};
export default Book;
