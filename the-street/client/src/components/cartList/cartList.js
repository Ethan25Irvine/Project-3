import React, { useState, useEffect } from 'react';
import cartAPI from '../../utils/API/cart';


function ListItems() {
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [productArray, setProductArray] = useState();

    useEffect(() => {
        cartAPI.getCart(userId).then((res) => {
            // console.log(res.data);
            setProductArray(res.data.products);
        });
    }, []);
    function Image(props) {
        // console.log(props)
        if (props.product === "Smoothie") {
            return (
                <div>
                    <img src="https://i.imgur.com/Oqvf7xS.jpg" className="product-cart-image" />
                </div>
            )
        } else if (props.product === "Tea") {
            return (
                <div>
                    <img src="https://i.imgur.com/qCSYl75.jpg" className="product-cart-image" />
                </div>
            )
        } else if (props.product === "Coffee") {
            return (
                <div>
                    <img src="https://i.imgur.com/bKP1F4W.jpg" className="product-cart-image" />
                </div>
            )
        } else if (props.product === "Slushie") {
            return (
                <div>
                    <img src="https://i.imgur.com/HUCztvl.jpg" className="product-cart-image" />
                </div>
            )
        } else if (props.product === "Ramen") {
            return (
                <div>
                    <img src="https://i.pinimg.com/originals/62/ec/87/62ec87229d24ee2f7f45d701e710227b.jpg" className="product-cart-image" />
                </div>
            )
        } else if (props.product === "Diamond Ice") {
            return (
                <div>
                    <img src="https://i.imgur.com/yNAQcdd.jpg" className="product-cart-image" />
                </div>
            )
        }
        else {
            return null
        }
    }


    function handleOnClick(event) {
        const id = event.target.id;
        let newProducts = productArray.filter(x => {
            return (x._id != id)
        }
        );
        const updatedProducts = {
            products: newProducts
        }
        cartAPI.updateCart(userId, updatedProducts)
            .then(
                window.location.reload()
            );
    }
    return (
        <div>
            {productArray ? (
                productArray.map(res =>
                    <div className="border-bottom border-dark container">
                        <li id={res._id} key={res._id} className="mt-5 list-group-item text-dark">
                            <div className="row">
                                <div className="col-lg-3">
                                    <Image product={res.productName} />
                                </div>
                                <div className="col-lg-8 text-center">
                                    <h1 >{res.productName}</h1>
                                    <ul className="list-group text-dark">
                                        {res.modifiers.map(res => {
                                                return (
                                                    <li key={res._id} className="list-group-item text-dark">
                                                        {res.modifierName}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p className="text-danger">{res.notes}</p>
                                    <button type="submit" id={res._id} onClick={handleOnClick} className="close" aria-label="Close">
                                        <span aria-hidden="true" id={res._id} className="text-danger">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-right">${(res.price).toFixed(2)}</h3>
                        </li>
                    </div>
                )) : (
                    <h3 className="text-center">Nothing in cart...</h3>
                )
            }
        </div >
    )

}

export default ListItems;
