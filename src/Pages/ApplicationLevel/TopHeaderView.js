import React, { Component } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';


class TopHEaderView extends Component {
  render() {
    return (
        <div>
         {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
        </div>
    );
  }
}

export default TopHEaderView;