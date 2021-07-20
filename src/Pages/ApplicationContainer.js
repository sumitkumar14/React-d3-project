import { Layout, Menu } from 'antd';
import React from 'react';
import Home from './Home.js';
import TopHeaderView from './ApplicationLevel/TopHeaderView.js';
import About from './About.js';
import CircleChart from '.././components/CircleChart.js';
import PieChart from '.././components/PieChart.js';
import BubbleChart from '.././components/BubbleChart.js';
import DonutChart from '.././components/DonutChart.js';
import BarChart from '.././components/BarChart.js';
import {
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

  clickEvent1=(collapsed1)=>{
      this.setState({
        collapsed: collapsed1,
      });
    };

  render() {
    // const RouterList=['Home','BarChart','PieChart','CircleChart','BubleChart','DonutChart'];
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
            <Link to={'/BarChart'} className="nav-link">BarChart</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to={'/about'} className="nav-link">About</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to={'/CircleChart'} className="nav-link">CircleChart</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to={'/BubleChart'} className="nav-link">BubleChart</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to={'/DonutChart'} className="nav-link">DonutChart</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
            <Link to={'/PieChart'} className="nav-link">PieChart</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={headerStyle} className="site-layout-background">
          <TopHeaderView handleClick={this.clickEvent1} />
          </Header>
          <Content
            className="site-layout-background"
            style={ContentStyle}
          >
              <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/BarChart' component={BarChart} />
              <Route path='/about' component={About} />
              <Route path='/CircleChart' component={CircleChart} />
              <Route path='/PieChart' component={PieChart} />
              <Route path='/DonutChart' component={DonutChart} />
              <Route path='/BubbleChart' component={BubbleChart} />
              </Switch>
          </Content>
        </Layout>
        </Router>
      </Layout>
    );
  }
}
export default ApplicationContainer;