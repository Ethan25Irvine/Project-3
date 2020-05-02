import React, { useState } from "react";
import ListItems from "../../components/CheckList/ListItems";
import List from "../../components/CheckList/List";


function Order() {
    const [Items, setItems] = useState(ListItems);


    return (

        <ul>

            {Items.map(res => {
                console.log(res.text);
                return (
                    <List
                        text={res.text}
                        key={res.id}
                    />
                )

            })}




        </ul>

    )


}

export default Order;