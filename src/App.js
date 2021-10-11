import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header id="header" className="fixed-top">
            <Navigation />
          </header>
          <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route
              path="/portfolio-app/"
              exact
              component={() => <HomePage />}
            />
            <Route
              path="/portfolio-app/about"
              exact
              component={() => <About />}
            />
            <Route
              path="/portfolio-app/contact"
              exact
              component={() => <Contact />}
            />
            <Route
              path="/portfolio-app/resume"
              exact
              component={() => <Resume />}
            />
            <Route
              path="/portfolio-app/portfolio"
              exact
              component={() => <Portfolio />}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
