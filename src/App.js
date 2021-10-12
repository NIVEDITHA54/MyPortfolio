import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
        <header id="header" className="fixed-top">
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />

          <Route path="/about" component={() => <About />} />
          <Route path="/contact" component={() => <Contact />} />
          <Route path="/resume" component={() => <Resume />} />
          <Route path="/portfolio" component={() => <Portfolio />} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
