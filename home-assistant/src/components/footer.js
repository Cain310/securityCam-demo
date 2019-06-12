import React from "react";
import "../css/footer";

export class Footer extends React.Component {
  render() {
    return (
      <div className="button-container">
        <a href="http://localhost:3000/dashboard" className="rounded-btn">
          {" "}
          <img src="http://i65.tinypic.com/2ur0yrt.png" />
        </a>
        <a href="http://localhost:3000/dashboard" className="rounded-btn">
          <img src="http://i67.tinypic.com/24gojnn.png" />
        </a>
        <a href="http://localhost:3000/dashboard" className="rounded-btn">
          <img src="http://i66.tinypic.com/1zvxuab.png" />
        </a>
        <a href="http://localhost:3000/dashboard" className="rounded-btn">
          <img src="http://i63.tinypic.com/wwkgpk.png" />
        </a>
        <a href="http://localhost:3000/dashboard" className="rounded-btn">
          <img src="http://i68.tinypic.com/2ziq1eh.png" />
        </a>
      </div>
    );
  }
}
