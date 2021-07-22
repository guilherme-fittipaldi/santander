import React from "react";
import data from "./data.js";

function Slide({ index }) {
  return (
    <div>
      {data.map(
        (post) =>
          post.id === index && (
            <div>
              <h1 style={{ margin: "0" }}>{post.title}</h1>
              <p style={{ marginBottom: "10px" }}>{post.text}</p>
              {post.link === undefined ? (
                <img
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                  src={process.env.PUBLIC_URL + post.img}
                  className={post.id === 0 && "App-logo"}
                  alt=""
                />
              ) : (
                <div style={{ marginBottom: "10px" }}>
                  <img
                    style={{
                      display: "flex",
                      objectFit: "cover",
                    }}
                    src={process.env.PUBLIC_URL + post.img}
                    className={post.id === 0 && "App-logo"}
                    alt=""
                  />
                  <span
                    style={{
                      width: "100%",
                      fontSize: "smaller",
                    }}
                  >
                    Fonte: {" "}
                    {post.link}
                  </span>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
}

export default Slide;
