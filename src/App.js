import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Dashbord from './components/Dashbord'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/dashbord' exact component={Dashbord} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
