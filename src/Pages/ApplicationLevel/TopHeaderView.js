import React, { Component } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

class TopHEaderView extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.props.handleClick(this.state.collapsed);
  };
  render() {
    return (
      <div style={{ paddingLeft: "1rem" }}>
        {React.createElement(
          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: this.toggle,
          }
        )}
      </div>
    );
  }
}

export default TopHEaderView;
