
import './App.css';

import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
          <Redirect to='/404'>
            <NotFound />
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
