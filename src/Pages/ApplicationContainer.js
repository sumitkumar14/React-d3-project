import { Layout, Menu } from 'antd';
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class ApplicationContainer extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const logoStyle = {
        height: '32px',
        margin: '16px',
        background: 'rgba(255, 255, 255, 0.3)'
      },
      headerStyle={background: '#fff',padding: 0},
      ContentStyle=
      {background: '#fff',
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,};
    return (
      <Layout style={{height:'100vh'}}>
        <Router>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div style={logoStyle} className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={'/'} className="nav-link"> Home </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={'/contact'} className="nav-link">Contact</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to={'/about'} className="nav-link">About</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={headerStyle} className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={ContentStyle}
          >
              <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              </Switch>
          </Content>
        </Layout>
        </Router>
      </Layout>
    );
  }
}
export default ApplicationContainer;