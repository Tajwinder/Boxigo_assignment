import React,{useState,useEffect} from 'react'
import './InventaryDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function InventaryDetails(props) {
  const [quantity,setQuantity]=useState(0);

useEffect(() => {
  console.log(props.room)
 let qty=0;
  if(props.room.hasCategory){
    props.room.categories.map(
      (category)=>{
        category['itemsList'].all.map(
          (item)=>{
            qty+=parseInt(item['qty'],10) ;
          }
        )

      }
     
    )
    setQuantity(qty);
  }
  else{
    props.room.itemsList.all.map(
      (item)=>{
        qty+=parseInt(item['qty'],10) ;
      }
    )
    setQuantity(qty);
  }
    
  return () => {
   
  }
}, )
  const [inventaryDetails, setInventaryDetails]=useState(false);
const handleInventaryDetails=()=>{
  setInventaryDetails(!inventaryDetails);
}
    return (
        <>
        <div className="room" onClick={handleInventaryDetails}>
        {props.room.roomName}
    <span className="qty">{quantity}</span>
    <span className="arrowUp" style={{float:"right"}}> <FontAwesomeIcon icon={faAngleUp}/></span>
        </div>
        {
          inventaryDetails?
          <div>
            {
              props.room.hasCategory?
         <div className="categories">
           {
             props.room.categories.map(
               (category)=>(
                 
                   <div className="category">
               <h2>{category.categoryName}</h2>
               <div >
               {
                 category['itemsList'].all.map(
                   (item)=>{
                    return item['qty']>0?(
                      <div style={{margin:"20px 0"}}>
                      <div className="item">
                    <div className="item_name">{item['display_name']}</div>
                    <div>{item['qty']}</div>
                    </div>
                    <div style={{margin:"10px 0"}}>
                    {
                      item['type']?<h5>{item['type']['default_type']}</h5>:null
                    }
                    </div>
                   </div>
                    ):null

                     
                   }
                 )
               }
               </div>
               </div>

               )
               )
           }
         </div>:<div >
           {
            
               
                 props.room['itemsList'].all.map(
                   (item)=>{
                    return item['qty']>0?(
                      <div style={{margin:"20px 0"}}>
                      <div className="no-category">
                    <div className="item_name">{item['display_name']}</div>
                    <div>{item['qty']}</div>
                    </div>
                    <div style={{margin:"10px 0"}}>
                    {
                      item['type']?<h5>{item['type']['default_type']}</h5>:null
                    }
                    </div>
                   </div>
                    ):null

                     
                   }
                 )
               }
               
               

              
           
         </div>
}
         </div>:null
         
        }
         
        </>
    )
}

export default InventaryDetails
