import React, { Component } from 'react'

export class VoucherDetails extends Component {

  addtocart = () => {
    let items;
    let eventitem = [];

    eventitem = {'refno': this.props.eventdetails.EventReference, 'eventname': this.props.eventdetails.EventName};
    //for(var i=0;i<this.props.eventitemdetails.VoucherDetails.length;i++)
       //eventitem[this.props.eventitemdetails.VoucherDetails[i].Type] = this.props.eventitemdetails.VoucherDetails[i].Amount;

      
    //console.log(JSON.stringify(eventitem));
    localStorage.setItem("eventcart", JSON.stringify(eventitem));
  }

  render() {
    //get the data from event items and pass the data through props
    return (
        <div className='button-container'>
          <button type="button" onClick={()=>this.addtocart()} className="btn btn-primary">{ this.props.details.Amount } for { this.props.details.Type }</button>
        </div>
      )
  }
}

export default VoucherDetails