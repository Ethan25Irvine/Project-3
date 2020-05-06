import React from "react";



function ListItems(props) {

    return (
        <li key= {props.newKey}>
            <h1>{props.product}</h1>
            <ul>
                {props.addons.map(res => {
                    return (
                        <li key= {res._id}>
                            {res.modifierName}
                        </li>
                        
                    )
                })
                }
            </ul>
        </li>
    )
}

export default ListItems;
