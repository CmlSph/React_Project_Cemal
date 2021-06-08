import "./App.css";
// import MyChart from "./MyChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./Nav";
import About from "./About";
import Fetch from "./Fetch";
import MyChart from "./MyChart";

import Search from "./Search";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          {/* <Nav /> */}
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/about" component={About} />
            {/* <Route path="/:cityID" exact component={MyChart} /> */}
            <Route path="/:cityID" exact component={MyChart} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
