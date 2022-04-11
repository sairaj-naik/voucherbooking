import React, { Component } from 'react'

export class BookedItem extends Component {
    
      
    render() {
    //get data from booking history and pass to booked items
    console.log(this.props.bookingdetails);

    let bookedvoucherdetails = [];
    //get the data from Booking history and send to booked voucher details component
		
    for(var i=0;i<this.props.bookingdetails.VoucherDetails.length;i++)
       bookedvoucherdetails.push(<p>Voucher: <b>{ this.props.bookingdetails.VoucherDetails[i].Quantity } { this.props.bookingdetails.VoucherDetails[i].VoucherName }</b></p>);

    return (
      <div>
        <div className="card">
            <div className="card-body">
              <div className='row'>
                <div className="col-sm">
                    <img className="img-thumbnail img-200" src={this.props.bookingdetails.ImageUrl[0]} alt={this.props.bookingdetails.EventName} />
                </div>
                <div className="col-sm">
                    <h5 className="card-title">{this.props.bookingdetails.EventName}</h5>
                    <p>Booking Reference : <b>{this.props.bookingdetails.BookingReference}</b></p>                
                    <p>Club/Restaurant : <b>{this.props.bookingdetails.RestaurantName}</b></p>
                    <p>Date : <b>{this.props.bookingdetails.Date}</b></p>
                    <p>Timings : <b>{this.props.bookingdetails.Timings}</b></p>
                    { bookedvoucherdetails }
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
}

export default BookedItem