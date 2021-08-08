import { Menu, Layout } from "antd";
import { React, useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const items = [
  { key: '1', label: 'Home', path: '/', icon:<UserOutlined/> },
  { key: '2', label: 'About', path: '/About', icon:<VideoCameraOutlined/>  },
  { key: '3', label: 'BarChart', path: '/BarChart', icon:<UploadOutlined/> },
  { key: '4', label: 'CircleChart', path: '/CircleChart', icon:<UploadOutlined/>},
  { key: '5', label: 'BubbleChart', path: '/BubbleChart', icon:<UploadOutlined/>},
  { key: '6', label: 'DonutChart', path: '/DonutChart', icon:<UploadOutlined/>},
  { key: '7', label: 'PieChart', path: '/PieChart', icon:<UploadOutlined/>}
]

function LeftNavigationDrawer(props) {
  const logoStyle = {
    height: "32px",
    margin: "16px",
    background: "rgba(255, 255, 255, 0.3)",
  };
  const [selected, setselected] = useState();
  const location = useLocation();
  useEffect(() => {
    let x="";
    if(location.pathname.endsWith('/'))
    x="1";
    else if(location.pathname.endsWith("/About"))
    x="2";
    else if(location.pathname.endsWith("/BarChart"))
    x="3";
    else if(location.pathname.endsWith("/CircleChart"))
    x="4";
    else if(location.pathname.endsWith("/BubbleChart"))
    x="5";
    else if(location.pathname.endsWith("/DonutChart"))
    x="6";
    else if(location.pathname.endsWith("/PieChart"))
    x="7";
    setselected(x)
  }, [location])
  return (
    <div>
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={props.collapsed}
      >
        <div style={logoStyle} className="logo" />
        <Menu selectedKeys={[selected]} theme="dark" mode="inline">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}> 
          <Link to={item.path} className="nav-link">
         {item.label}
        </Link></Menu.Item>
        ))}
        </Menu>
      </Sider>
    </div>
  );
}

export default LeftNavigationDrawer;
