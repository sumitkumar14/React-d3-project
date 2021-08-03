
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div  style={{ display:'flex', justifyContent:'center', height:'100%', alignItems:'center'}}>
          <article style={{fontWeight:'bold', textAlign:'justify', width:'50%', fontSize:'1.5rem'}}>D3 stands for Data-Driven Documents. D3.js is a JavaScript library for manipulating documents based on data. D3.js is a dynamic, interactive, online data visualizations framework used in a large number of websites. D3.js is written by Mike Bostock, created as a successor to an earlier visualization toolkit called Protovis</article>
        </div>
    );
  }
}

export default About;