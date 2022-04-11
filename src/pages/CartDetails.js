import React, { Component } from 'react'

export class CartDetails extends Component {

	render() {
		let cartdata = JSON.parse(localStorage.getItem('eventcart'));
		console.log(cartdata);

		let cartItems = [];
		cartItems.push(<div className='card padding-10 margin-bottom-10'>
			<p key={ cartdata['refno'] }>Ref No: { cartdata['refno'] } </p>
			<p key={ cartdata['eventname'] }>Event Name: { cartdata['eventname'] } </p>
		</div>
		);	
		cartItems.push();


		return (
			<div className="App">
				<h1> Cart </h1> 
				<div className="container">
					<div className="row">
						{ cartItems }
					</div>
				</div>
			</div>
		);
	}
}

export default CartDetails