import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthAdmin from "./components/privateRoute/isAdmin";
import withAuthUser from "./components/privateRoute/isUser";
import AdminPage from "./pages/adminPage"
import UserPage from "./pages/userPage"

import Login from "./pages/login/login";
import Register from"./pages/register/register";
import Confirm from './pages/confirm/confrim';
import Order from './pages/List/List';
import Cart from './pages/cart/cart';

//CeRae Code
import homePage from './pages/homePage/home'




function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={homePage}/>
        <Route exact path="/confirm" component={Confirm}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={withAuthAdmin(AdminPage)} path="/admin" exact />
        <Route component={withAuthUser(UserPage)} path="/user" exact />
        <Route exact path="/order" component={Order}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
