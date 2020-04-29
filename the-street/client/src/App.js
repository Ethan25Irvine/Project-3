import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from './pages/Order';
import './App.css';
import Smoothie from "./pages/Smoothie";
import Tea from "./pages/Tea";
import Coffee from "./pages/Coffee";
import Ramen from "./pages/Ramen";


function App() {
	return (
		<Router>
		<div className="App">
			<Switch>
				
				<Route exact path="/" component={Order}></Route>
				<Route exact path="/smoothie" component={Smoothie}></Route>
				<Route exact path="/tea" component={Tea}></Route>
				<Route exact path="/coffee" component={Coffee}></Route>
				<Route exact path="/ramen" component={Ramen}></Route>
			</Switch>
		</div>
		</Router>
	);
}

export default App;
