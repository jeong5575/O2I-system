import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Inventory';
import{ cluster, dashboard, Network, Network1, Network2, pop, satellite, wireless } from './pages/Network';
import Inventory from './pages/Inventory';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import StreamedianPlayer from './components/streamedian/StreamedianPlayer';

function App() {
  return (<>
    
    <Router>
      
      <Sidebar />
      <Switch>
        
      <Route path='/' exact component={Home} />
        <Route path='/network' exact component={Network} />
        <Route path='/network/dashboard' exact component={dashboard} />
        <Route path='/network/cluster' exact component={cluster} />
        <Route path='/network/wireless' exact component={wireless} />
        <Route path='/network/satellite' exact component={satellite} />
        <Route path='/network/pop' exact component={pop} />
        <Route path='/Inventory' exact component={Inventory} /> 
        <Route path='/Inventory/reports1' exact component={ReportsOne} />
        <Route path='/Inventory/reports2' exact component={ReportsTwo} />
        <Route path='/Inventory/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
     
    </Router>
    
    </>
  );
}

export default App;
