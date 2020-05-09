import React from "react";




function ListItems(props) {

    function Image(props){
        console.log(props)
        if (props.product === "Smoothie"){
        return(
            <div>
                <img src="https://i.imgur.com/Oqvf7xS.jpg" className="product-cart-image" />
            </div>
            )
        } else if (props.product === "Tea"){
            return(
                <div>
                    <img src="https://i.imgur.com/qCSYl75.jpg" className="product-cart-image" />
                </div>
                )
        } else if (props.product === "Coffee"){
            return(
                <div>
                    <img src="https://i.imgur.com/bKP1F4W.jpg" className="product-cart-image" />
                </div>
                )
        } else if (props.product === "Slushie"){
            return(
                <div>
                    <img src="https://i.imgur.com/HUCztvl.jpg" className="product-cart-image" />
                </div>
                )
        } else if (props.product === "Ramen"){
            return(
                <div>
                    <img src="https://i.pinimg.com/originals/62/ec/87/62ec87229d24ee2f7f45d701e710227b.jpg" className="product-cart-image" />
                </div>
                )
        } else if (props.product === "Diamond Ice"){
            return(
                <div>
                    <img src="https://i.imgur.com/yNAQcdd.jpg" className="product-cart-image" />
                </div>
                )
        } 
        else {
            return null
        }
    }
    return (
        <li key={props.newKey} className="mt-5 list-group-item text-dark">

            <div className="row ">
                <div className="col-lg-3">
                    <Image product={props.product}/>
                    
                </div>
                <div className="container col-lg-8 text-center">
                    <h1 >{props.product}</h1>
                    <ul className="list-group text-dark">
                        {props.addons.map(res => {
                            return (
                                <li key={res._id} className="list-group-item text-dark">
                                    {res.modifierName}
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>

            </div>

        </li>
    )
}

export default ListItems;
