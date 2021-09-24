import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Niveditha Ramu</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}
