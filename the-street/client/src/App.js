import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./components/privateRoute";
import Dashboard from "./pages/privatePage"

import Login from "./pages/login/login";




function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
 
        <Route component={withAuth(Dashboard)} path="/private" exact />
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
