import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { default as ProfilePage } from './components/page/Profile/Profile.jsx'

function App() {
  return (
    <div className="App">
      <Router>

              <Route exact path={'/'}>
                  <Redirect to="/profile" />
              </Route>
              <Route exact path={'/profile'}>
                  <ProfilePage/>
              </Route>
              <Route exact path={'/feed'}>

              </Route>

      </Router>
    </div>
  );
}

export default App;
