import React, { Component } from 'react'

export class Header extends Component {
  render() {
    //making the website header
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <a className="navbar-brand" href="/">Events In Goa</a>
          </div>
          <div>
            <div className='row'>
              <a className="nav-link col-sm" href="/events">Events</a>
              <a className="nav-link col-sm" href="/booking-history">Booking History</a>
              <a className="nav-link col-sm"  href="/cart">Cart</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header