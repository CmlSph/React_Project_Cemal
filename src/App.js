import "./App.css";
import { useState, createContext } from "react";
import MyChart from "./MyChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Example from "./Example";
import Fetch from "./Fetch";
import Search from "./Search";

export const BooksContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <BooksContext.Provider value={{ books, setBooks }}>
            {/* <h1>Read books, because reading makes you aware.</h1> */}
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/about" component={About} />
              <Route path="/example" component={Example} />
              {/* <Route path="/:cityID" exact component={MyChart} /> */}
              <Route path="/books/:bookId" exact component={MyChart} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
