import React from "react";
import data from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Header({ index }) {
  const max = data.length - 1;
  return (
    <div style={{ width: "100%"}}>
      {data.map((post) => {
        if (post.id === index) {
          if (max > post.id)
            return (
              <>
                <span style={{ color: "#ff79c6", fontWeight: "600" }}>
                  {" "}
                  {post.header}{" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ verticalAlign: "middle" }}
                  /> {" "}
                </span> {" "}
              </>
            );
          else
            return (
              <span style={{ color: "#ff79c6", fontWeight: "600" }}>
                {" "}
                {post.header}{" "}
              </span> 
            );
        }
        if (post.id < index) {
          if (max > post.id)
            return (
              <>
                <span style={{ color: "#8be9fd", fontWeight: "600" }}>
                  {" "}
                  {post.header}{" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ verticalAlign: "middle" }}
                  /> {" "}
                </span> {" "}
              </>
            );
          else
            return (
              <span style={{ color: "#8be9fd", fontWeight: "600" }}>
                {" "}
                {post.header}{" "}
              </span>
            );
        }
        if (post.id > index) {
          if (max > post.id)
            return (
              <>
                <span style={{ color: "#44475a", fontWeight: "600" }}>
                  {" "}
                  {post.header}{" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ verticalAlign: "middle" }}
                  /> {" "}
                </span> {" "}
              </>
            );
          else
            return (
              <span style={{ color: "#44475a", fontWeight: "600" }}>
                {" "}
                {post.header}{" "}
              </span> 
            );
        }
      })}
    </div>
  );
}

export default Header;
