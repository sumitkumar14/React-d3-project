import React, { Component } from 'react';
import { DatePicker } from 'antd';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Welcome To D3 React Application</h2>
         <DatePicker showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm" />
        </div>
    );
  }
}

export default Home;