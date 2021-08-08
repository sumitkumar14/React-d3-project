import { Menu, Layout } from "antd";
import { React, useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function LeftNavigationDrawer(props) {
  const logoStyle = {
    height: "32px",
    margin: "16px",
    background: "rgba(255, 255, 255, 0.3)",
  };
  const [selected, setselected] = useState("");
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
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to={"/About"} className="nav-link">
              About
            </Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to={"/BarChart"} className="nav-link">
              BarChart
            </Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to={"/CircleChart"} className="nav-link">
              CircleChart
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to={"/BubbleChart"} className="nav-link">
              BubleChart
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to={"/DonutChart"} className="nav-link">
              DonutChart
            </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UploadOutlined />}>
            <Link to={"/PieChart"} className="nav-link">
              PieChart
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default LeftNavigationDrawer;
