import React from "react";
import './App.css';
import { Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList';
import Login from './pages/Login';
import BookingHistory from "./pages/BookingHistory";
import CartDetails from "./pages/CartDetails";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" exact element = {<EventList />} />
					<Route path="/login" exact element = {<Login />} />
					<Route path="/events" exact element = {<EventList />} />
					<Route path="/booking-history" exact element = {<BookingHistory />} />
					<Route path="/cart" exact element = {<CartDetails />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
