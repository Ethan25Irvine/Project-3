import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuthAdmin from './components/privateRoute/isAdmin';
import withAuthUser from './components/privateRoute/isUser';
import AdminPage from './pages/adminPage';
import homePage from './pages/homePage/home';



import About from './pages/about/about';
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
					<Route component={withAuthUser(Order)}exact path="/order"  />
					<Route exact path="/ramen" component={withAuthUser(Ramen)} />
					<Route exact path="/smoothie" component={withAuthUser(Smoothie)} />
					<Route exact path="/smoothies" component={withAuthUser(Smoothie)} />
					<Route exact path="/tea" component={withAuthUser(Tea)} />
					<Route exact path="/teas" component={withAuthUser(Tea)} />
					<Route exact path="/coffee" component={withAuthUser(Coffee)} />
					<Route exact path="/coffees" component={withAuthUser(Coffee)} />
					<Route exact path="/di" component={withAuthUser(DI)} />
					<Route exact path="/cart" component={withAuthUser(Cart)} />
					<Route exact path="/slushie" component={withAuthUser(Slushie)} />
					<Route exact path="/slushies" component={withAuthUser(Slushie)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
