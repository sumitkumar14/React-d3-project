import React, { Component } from "react";

class Terms extends Component {
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
          fontSize: "2rem",
        }}
      >
        <div  style={{
          display: "inline-block",
          textAlign:"center"
        }}>
        <div>Terms and Conditions!</div>
        <div>Copying the content i strictly prohibited. You may face legal concequences on copying the content of this application</div>
        </div>
      </div>
    );
  }
}

export default Terms;
