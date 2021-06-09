import "./App.css";
import MyChart from "./MyChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Fetch from "./Fetch";

import Search from "./Search";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          {/* <h1>Read books, because reading makes you aware.</h1> */}
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/about" component={About} />
            {/* <Route path="/:cityID" exact component={MyChart} /> */}
            <Route path="/books/:bookId" exact component={MyChart} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
