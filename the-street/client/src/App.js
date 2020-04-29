import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthAdmin from "./components/privateRoute/isAdmin";
import withAuthUser from "./components/privateRoute/isUser";
import AdminPage from "./pages/adminPage"
import UserPage from "./pages/userPage"

import Login from "./pages/login/login";
import Register from"./pages/register/register";
import Confirm from './pages/confirm/confrim';




function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/confirm" component={Confirm}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={withAuthAdmin(AdminPage)} path="/admin" exact />
        <Route component={withAuthUser(UserPage)} path="/user" exact />
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
