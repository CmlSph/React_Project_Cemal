import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function About() {
  return (
    <div>
      <h1>About the Application</h1>
      <p>
        <h3>About the Open Library API</h3>
        Open Library is an online project intended to create "one web page for
        every book ever published". Created by Aaron Swartz, Brewster Kahle,
        Alexis Rossi, Anand Chitipothu, and Rebecca Malamud, Open Library is a
        project of the Internet Archive, a nonprofit organization. It has been
        funded in part by grants from the California State Library and the
        Kahle/Austin Foundation.
      </p>
      <p>
        <h3>About Get Books App</h3>
        You can search by book or author name in the application.
        <br />
        The application will return a list of books and author names that match
        the word you are looking for.
        <br />
        Here you will find some information about the books including the cover
        of the book that match the word you are looking for.
        <br />
        If you can't see a cover, this is because the API does not provide a
        cover for that specific book.
        <br />
      </p>
      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
export default About;
