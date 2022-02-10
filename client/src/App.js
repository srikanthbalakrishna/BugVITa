import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Bugs from './pages/Bugs'
import Report from './pages/Report'
import logo from './logo.svg';
import './App.css';
import Buglist from './pages/Buglist';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bugs" component={Bugs} />
          <Route path="/report" component={Report} />
          <Route path="/buglist" component={Buglist} />
      </Switch>
    </div>
  );
}

export default App;
