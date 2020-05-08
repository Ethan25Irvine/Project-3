import React, { useState, useEffect } from 'react';
import Logout from "../../components/logout/userLogout";
import cartAPI from "../../utils/API/cart";
import orderAPI from "../../utils/API/order";
import List from "../../components/cartList/cartList"



const Cart = () => {
    const [userId, setUserId] = useState("5ea7a27ded515903068a7f0f");
    const [cartObject, setCartObject] = useState();

    useEffect(() => {
        cartAPI.getCart(userId)
            .then(res => {
                // console.log(res.data);
                const data = res.data
                setCartObject(data);
            })
    }, []);


    function handleOnClick() {
        orderAPI.createOrder(cartObject)
            .then(res =>{
                alert("order was sent");
            })
    }

    return (
        <div>
            <Logout />
            <h1>Cart</h1>
            <ol>
                
                {cartObject ? cartObject.products.map(res => {
                    return (
                        <List
                            product={res.productName}
                            addons={res.modifiers}
                            newKey= {res.productName}
                        />
                    )} ) : <p>Loading...</p>
                    }
            </ol>

            
            
 </div>
  
  

  
  
    );
};

export default Cart;