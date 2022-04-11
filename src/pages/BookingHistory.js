import React, { Component } from 'react'
import BookedItem from '../components/BookedItem';

export class BookingHistory extends Component {
  // Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	// get the data from the postman api and display the event of the specified date
	componentDidMount() {
		fetch("http://139.59.63.178:5454/api/customer/voucherbookinglist", {
      method: 'get',
      headers: {
        'Authorization': 'SEdRYnN6ZFFFRjpuc0oySXQ0NWt5',
        'AppVersion': '1.0.0',
        'AuthToken': 'bd8382d5-3adf-11eb-9263-b62d5e046812',
        'Accept-Encoding': 'gzip, deflate, br',
      }
    })
	.then((res) => res.json())
	.then((json) => {
		this.setState({
			items: json,
			DataisLoaded: true
		});
	})
	}
  
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		console.log(items.Details.VoucherBookingList);

		let bookingItems = [];
		for(var i=0;i<items.Details.VoucherBookingList.length;i++)
		{
			bookingItems.push(<BookedItem key={items.Details.VoucherBookingList[i].BookingReference} bookingdetails={items.Details.VoucherBookingList[i]} />);
			
		}
		console.log(bookingItems.length);

		return (
		<div className = "App">
			<h1> Booking History </h1> 
			<div className="container">
  				<div className="row">
					{ bookingItems }
				</div>
			</div>
		</div>
	);
}
}

export default BookingHistory