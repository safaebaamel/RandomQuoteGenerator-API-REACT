import React from 'react'
import {Home} from './components/home';
import {EditUser} from './components/EditUser';
import {AddUser} from './components/AddUser';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Add" component={AddUser} />
          <Route path="/EditUser:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
