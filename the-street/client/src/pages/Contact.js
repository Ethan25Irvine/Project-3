import React, { useState } from 'react';


import axios from 'axios'

function Contact() {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  
   
  const handleSubmit = (e) => {
		e.preventDefault();

		const dataToSubmit = {
			name,
			email,
			message
		};
		axios.post('api/sendMail', dataToSubmit);
	};
	return (
		<div className="Contact">
			<div className="container">
				<div className="contactTitle text-center">
					<h1>Contact</h1>
				</div>
				<form>
					<div className="form-row row">
						<div className="col-lg-6">
							<input
								type="text"
								className="form-control"
								placeholder="First name"
								id="firstName"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-lg-6">
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								id="lastName"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-lg-12">
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								id="email"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-lg-12">
							<input
								type="text"
								className="form-control"
								placeholder="Message"
								id="message"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-lg-12">
							<button className="btn btn-primary btn-large btn-block" onClick={handleSubmit}>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
