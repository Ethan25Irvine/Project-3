import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuthAdmin from './components/privateRoute/isAdmin';
import withAuthUser from './components/privateRoute/isUser';
import AdminPage from './pages/adminPage';
import homePage from './pages/homePage/home';
// import about from './pages/about'

import UserPage from './pages/userPage';

import Login from './pages/login/login';
import Register from './pages/register/register';
import Confirm from './pages/confirm/confrim';
import Order from './pages/Order/Order';
import Ramen from './pages/Ramen/Ramen';
import Coffee from './pages/Coffee/Coffee';
import Smoothie from './pages/Smoothie/Smoothie';
import Tea from './pages/Tea/Tea';
import Cart from './pages/cart/cart';
import DI from './pages/DI/DI';
import Slushie from './pages/Slushie/Slushie';
import About from './pages/about/about';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={homePage} />
					<Route exact path="/about" component={About} />
					<Route exact path="/home" component={homePage} />
					{/* <Route exact path="/about" component={about}/> */}
					<Route exact path="/confirm" component={Confirm} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route component={withAuthAdmin(AdminPage)} path="/admin" exact />
					<Route exact path="/order" component={withAuthUser(Order)} />
					<Route exact path="/ramen" component={Ramen} />
					<Route exact path="/smoothie" component={Smoothie} />
					<Route exact path="/smoothies" component={Smoothie} />
					<Route exact path="/tea" component={Tea} />
					<Route exact path="/teas" component={Tea} />
					<Route exact path="/coffee" component={Coffee} />
					<Route exact path="/coffees" component={Coffee} />
					<Route exact path="/di" component={DI} />
					<Route exact path="/cart" component={withAuthUser(Cart)} />
					<Route exact path="/slushie" component={Slushie} />
					<Route exact path="/slushies" component={Slushie} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
