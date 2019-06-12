import React, { Component } from "react";
import smarthomeImage2 from "../images/background4.png";
import { startlivestream } from "./mediaSource.js";
import "./mediaSource.js";
import { savedVideoStream } from "./mediaSourceSavedVideo.js";
import "./mediaSourceSavedVideo.js";
import DatePicker from "react-datepicker2";
import { loadDoc } from "./savedMedia.js";
import "./savedMedia.js";
import axios from "axios";
import { Link } from "react-router-dom";
import "../containers/Home/Home1.scss";
import moment from "moment-timezone";
import VideoGrid from "./VideoGrid/VideoGrid";
// import { Footer } from "././footer";
import "react-datepicker/dist/react-datepicker.css";
import "../css/datePicker.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      videos: [],
      value: moment()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onChange = date => this.setState({ date });

  // handleChange(date) {
  //   this.setState({ startDate: date });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   let something = this.state.startDate;
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    var something = this.state.value;
    var data = something._d;
    event.preventDefault();

    fetch("http://localhost:8080/api/savedvideo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstParam: data })
    })
      .then(res => res.json())
      .then(response => this.setState({ videos: response }))
      .catch(error => console.error("Error:", error));
  }

  render() {
    const rootStyles = {
      backgroundImage: `url(${smarthomeImage2})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%"
    };
    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 14
    );
    const bodyStyle = {
      flex: "1"
    };
    // const btnStyle = {
    //   height: "3rem",
    //   padding: "0px, 12px, 12px",
    //   borderradius: "75%"
    // };
    return (
      <div style={rootStyles}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" href="http://localhost:3000">
            H
            <img
              className="house-img"
              src="http://i67.tinypic.com/b5qsm9.png"
            />
            VEN
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <form className="datepicker-form" onSubmit={this.handleSubmit}>
            <DatePicker
              onChange={value => this.setState({ value })}
              value={this.state.value}
            />
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </nav>
        <div className="section">
          <div className="video">
            <div className="videoWrapper">
              <video
                crossOrigin="anonymous"
                autoPlay
                controls
                type="video/mp4"
                id="my-video"
                className="video"
                src=""
                width={700}
                height={500}
              />
            </div>
            <button className="videoBtn" onClick={startlivestream}>
              Start Stream
            </button>
            <button className="videoBtn" onClick={savedVideoStream}>
              Saved Videos
            </button>
          </div>
        </div>
        <div className="video">
          <div>
            <VideoGrid videos={this.state.videos} />
          </div>
        </div>

        <div className="button-container1">
          <a href="http://localhost:3000/dashboard" className="rounded-btn1">
            <img src="http://i65.tinypic.com/i2k8jc.png" />
          </a>
          <a href="http://localhost:3000/dashboard" className="rounded-btn1">
            <img src="http://i66.tinypic.com/2nbslmx.png" />
          </a>
          <a href="http://localhost:3000/dashboard" className="rounded-btn1">
            <img src="http://i67.tinypic.com/140lyki.png" />
          </a>
          <a href="http://localhost:3000/dashboard" className="rounded-btn1">
            <img src="http://i66.tinypic.com/29qdu6o.png" />
          </a>
          <div className="footer">Contact Us: customersupport@haven.com</div>
          {/* <div className="contact-us">
            {" "}
            Contact Us: customersupport@haven.com{" "}
          </div> */}
        </div>
      </div>
    );
  }
}
