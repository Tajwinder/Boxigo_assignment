import React,{useState} from "react";
import "./Move.css";
import MoveDetails from './../moveDetails/MoveDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSitemap, faRoute,faCalendarMinus,faCheckSquare,faEdit,faArrowCircleRight,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


function Move(props) {
  let isFlexible=props.move.move_date_flexible;
  if(isFlexible==="1")
    isFlexible="Is flexible";
  else
    isFlexible="Not flexible";  
  
    const [viewDetails,setViewDetails]=useState(false);
    
    const handleViewDetails=()=>{
     
setViewDetails(!viewDetails);
    }
  return (
    <div>
      <div className="line1 move_row">
        <div className="from">
          <h5>From</h5>
          <div>{props.move.moving_from}</div>
        </div>
        <div className="arrow">
        <FontAwesomeIcon icon={faArrowCircleRight} className="icon" />

        </div>
        <div className="to">
          <h5>To</h5>
          <div>{props.move.moving_to}</div>
        </div>
        <div className="requestId">
          <h5>Request#</h5>
          <div>{props.move.estimate_id}</div>
        </div>
      </div>
      <div className="line2 move_row">
        <div className="property">
          <span><FontAwesomeIcon icon={faHome} className="icon" /></span>
        

          <span>{props.move.property_size}</span>
        </div>
        <div className="property">
          <span>
          <FontAwesomeIcon icon={faSitemap} className="icon" />
          </span>
        
          <span>{props.move.total_items}</span>
        </div>
        <div className="property">
          <span>
          <FontAwesomeIcon icon={faRoute}className="icon" />
          </span>
          <span>{props.move.distance}</span>
        </div>
        <div className="property">
          <span>
          <FontAwesomeIcon icon={faCalendarMinus} className="icon" />
          </span>
          <span>{props.move.moving_on}</span>
          <span>
          <FontAwesomeIcon icon={faEdit} id="editIcon" />

          </span>
        </div>
        <div className="property">
          <span>
          <FontAwesomeIcon icon={faCheckSquare}  className="icon"/>
          </span>
          <span>{isFlexible}</span>
        </div>
        <div className="property_size">
          <button className="viewDetails" onClick={handleViewDetails}>View move details</button>
          <span className="status">{props.move.custom_status}</span>
        </div>
      </div>
      <div className="disclaimer move_row">
       <span>
       <FontAwesomeIcon icon={faExclamationTriangle} />
       </span>
        <p>
         <span style={{fontWeight:"666"}}> Disclaimer</span>: Please update your move date before two days of shifting
        </p>
      </div>
      {
viewDetails?<MoveDetails move={props.move} index={props.objIndex}/>:null
      }
      
      <hr style={{color:"rgb(228, 225, 225)"}}/>
    </div>
  );
}

export default Move;
