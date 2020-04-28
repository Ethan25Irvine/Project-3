import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthAdmin from "./components/privateRoute/isAdmin";
import withAuthUser from "./components/privateRoute/isUser";
import AdminPage from "./pages/adminPage"
import UserPage from "./pages/userPage"

import Login from "./pages/login/login";




function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
 
        <Route component={withAuthAdmin(AdminPage)} path="/admin" exact />
        <Route component={withAuthUser(UserPage)} path="/user" exact />
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
