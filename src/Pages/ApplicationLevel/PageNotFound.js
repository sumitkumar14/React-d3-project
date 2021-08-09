import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div
        style={{
          fontWeight: "bold",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          fontSize: "4rem",
        }}
      >
        <div  style={{
          display: "inline-block",
          textAlign:"center"
        }}>
        <div>404</div>
        <div>Page Not Found</div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
