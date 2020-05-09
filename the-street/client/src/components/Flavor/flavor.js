import React, {useState} from 'react';
import './flavor.css';
function Flavor(props) {

	return (
		<div>
			<div>
				<input key= {props.name} class="form-check-input" type="checkbox" onChange={props.onChange} id={props.name} name={props.name}/>
				
					{props.name}
				
			</div>
		</div>
	);
}

export default Flavor;
