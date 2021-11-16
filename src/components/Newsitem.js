import React, { Component } from "react";

export default function Newsitem(props) {
  return (
    <div>
        <div
          className="card my-3"
          style={{
            width: "21rem",
            color: props.mode === "Light" ? "white" : "black",
            background: props.mode === "Light" ? "black" : "white",
          }}
        >
          <span className={`badge bg-danger`}>{props.source}</span>
          <img
            src={
              props.imageurl
                ? props.imageurl
                : "https://st1.latestly.com/wp-content/uploads/2021/11/gvegvesgvfegfvefgh8ucroprdgjubvrjurrrrrrrrrrrrrrrrrr20210828163839f20210828172_kFaYcUR-588x441.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Last updated {new Date(props.date).toGMTString()} mins ago By{" "}
                {props.author ? props.author : "Unknown"}
              </small>
            </p>
            <a
              href={props.newsurl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
  )
}

