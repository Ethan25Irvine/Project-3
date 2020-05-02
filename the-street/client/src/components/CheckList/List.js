import React, { useState} from "react";



class ListItems extends React.Component {
    render() {
         return <li>
            <input type="checkbox" defaultChecked={this.props.check}/>
            {this.props.text}
        </li>;
    }
}

export default ListItems;