import { render } from '@testing-library/react';
import React from 'react';
import EventItem from '../components/EventItem';


class EventList extends React.Component {

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

		let date = "31-12-2021";

		fetch(`http://139.59.63.178:5454/api/customer/getallpublishedevents?Date=${date}`, {
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

		//console.log(items.Details);

		let eventItems = [];
		for(var i=0;i<items.Details.length;i++)
			eventItems.push(<EventItem key={ items.Details[i].EventReference } eventitemdetails={ items.Details[i] } />);

		return (
		<div className = "App">
			<h1> Events </h1> 
			<div className="container">
  				<div className="row">
					{eventItems}
				</div>
			</div>
		</div>
	);
}
}

export default EventList