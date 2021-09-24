import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home";
import About from "./components/about";

import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import PortfolioDetails from "./components/portfolio-details";
import Contact from "./components/contact";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header id="header" class="fixed-top">
            <Navigation />
          </header>
          <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/about" exact component={() => <About />} />

            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/resume" exact component={() => <Resume />} />
            <Route path="/portfolio" exact component={() => <Portfolio />} />
            <Route
              path="/portfolio-details"
              exact
              component={() => <PortfolioDetails />}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
