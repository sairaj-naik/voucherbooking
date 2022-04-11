import React, { Component } from 'react'
import VoucherTypes, { VoucherDetails } from './VoucherDetails';

export class EventItem extends Component {

  render() {

    let voucherdetails = [];
    //get the data from event list and send to voucher details component
		for(var i=0;i<this.props.eventitemdetails.VoucherDetails.length;i++)
      voucherdetails.push(<VoucherDetails key={ this.props.eventitemdetails.VoucherDetails[i].Type } details={ this.props.eventitemdetails.VoucherDetails[i] } eventdetails= {this.props.eventitemdetails} />);
      //console.log(this.props.voucherdetails[i].Type);

    return (
      <div>
          <div className="card">
              <div className="card-body">
                <div className='row'>
                  <div className="col-sm">
                    <img className="img-fluid img-400" src={this.props.eventitemdetails.Thumbnail} alt={this.props.eventitemdetails.ClubName} />
                  </div>
                  <div className="col-sm">
                    <h5 className="card-title"> {this.props.eventitemdetails.EventName}</h5>
                    <p>Club : {this.props.eventitemdetails.ClubName}</p>
                    <p>Date : {this.props.eventitemdetails.Date}</p>
                    <p>Timings : {this.props.eventitemdetails.Timings}</p>
                  </div>
                  <div className="col-sm">
                    { voucherdetails }
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default EventItem