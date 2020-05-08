import React from 'react';
import './flavor.css';
function Flavor(props) {
	return (
		<div>
			<div>
				<input class="form-check-input" type="checkbox" id={props.name} value={props.name} />
				<label class="form-check-label" for={props.name}>
					{props.name}
				</label>
			</div>
		</div>
	);
}

export default Flavor;
