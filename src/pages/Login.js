import React, { Component } from 'react'

export class Login extends Component {

  // Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// login code
	formSubmit = () => {
		fetch(`http://139.59.63.178:5454/api/customer/iscustomerpresent`, {
      method: 'POST',
      headers: {
        'Authorization': 'SEdRYnN6ZFFFRjpuc0oySXQ0NWt5',
        'AppVersion': '1.0.0',
        'AuthToken': 'bd8382d5-3adf-11eb-9263-b62d5e046812',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      body: JSON.stringify('{ Phone: ' + document.getElementById('phone').value + '}'),
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
    return (
      <div>
          <form>
            <div className="form-outline mb-4">
                <label className="form-label"  for="form2Example1">Phone Number</label>
                <input type="email" id='phone' className="form-control" />                
            </div>

            <button type="button" onClick={this.formSubmit} className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
      </div>
    )
  }
}

export default Login