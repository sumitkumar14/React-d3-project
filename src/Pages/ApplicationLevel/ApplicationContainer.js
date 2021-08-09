import { Layout } from "antd";
import React from "react";
import TopHeaderView from "./TopHeaderView";
import { BrowserRouter as Router } from "react-router-dom";
import LeftNavigationDrawer from "./LeftNavigationDrawer";
import ContentView from "./ContentView";
import PageNotFound from "./PageNotFound";

const { Header } = Layout;

class ApplicationContainer extends React.Component {
  state = {
    collapsed: false,
    notFound:false,
  };

  clickEvent1 = (collapsed1) => {
    this.setState({
      collapsed: collapsed1,
    });
  };

  render() {
    const headerStyle = { background: "#fff", padding: 0 };
    if(!this.state.notFound){
    return (
      <Layout style={{ height: "100vh" }}>
        <Router>
          <LeftNavigationDrawer
            collapsed={this.state.collapsed}
          ></LeftNavigationDrawer>
          <Layout className="site-layout">
            <Header style={headerStyle} className="site-layout-background">
              <TopHeaderView handleClick={this.clickEvent1} />
            </Header>
            <ContentView></ContentView>
          </Layout>
        </Router>
      </Layout>)}
      else{
        return(
        <Layout style={{ height: "100vh" }}>
        <Router>
          <Layout className="site-layout">
            <PageNotFound></PageNotFound>
          </Layout>
        </Router>
      </Layout>)
      }
  }
}
export default ApplicationContainer;
