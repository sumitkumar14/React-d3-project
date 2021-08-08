import {Layout} from 'antd';
import {React} from 'react';
import About from '../About';
import CircleChart from '../../components/CircleChart';
import PieChart from '../../components/PieChart';
import BubbleChart from '../../components/BubbleChart';
import DonutChart from '../../components/DonutChart';
import BarChart from '../../components/BarChart';
import Home from '../Home';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './PageNotFound';
const {Content} = Layout;

 function ContentView (props){
    const ContentStyle=
    {background: '#fff',
    margin: '24px 16px 0px 16px',
    padding: 24,
    overflow:'hidden',
    height: 'calc(100vh - 88px)'}
  // const [collapsed] = useState(0);
   return (<div>
    <Content
     className="site-layout-background"
     style={ContentStyle}
>
  <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/BarChart' component={BarChart} />
  <Route path='/About' component={About} />
  <Route path='/CircleChart' component={CircleChart} />
  <Route path='/PieChart' component={PieChart} />
  <Route path='/DonutChart' component={DonutChart} />
  <Route path='/BubbleChart' component={BubbleChart} />
  <Route  component={PageNotFound} />
  </Switch>
</Content>
   </div>)
 }


export default ContentView;
