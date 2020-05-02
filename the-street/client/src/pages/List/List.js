import React, { useState,useEffect} from "react";
import ListItems from  "../../components/CheckList/ListItems";
import List from "../../components/CheckList/List";


function Order () {
     const [Items, setItems] = useState(ListItems);
    

     return(

        <ul>
            
            
            
             {Items.map(data=>{
             
           
                
               
                // <ListItems 
                //  data
                
                // />
                

            })} 


        </ul>
        
    )

    
    }
    
export default Order;