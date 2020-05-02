import React, { useState } from "react";



function ListItems(props) {

    return (
        <li>
            <input type="checkbox"/>
            {props.text}
        </li>
    )
}

export default ListItems;