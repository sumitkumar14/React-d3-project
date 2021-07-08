
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Layout} from 'antd';
const { Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
   <Router>
          <Layout>
          <Sider>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              </Sider>
              <h2>Welcome to React</h2>
          </Layout>
            <Content>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
              </Content>
          </Router>
     </div>
  );
}

export default App;
