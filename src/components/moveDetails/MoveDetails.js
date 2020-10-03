import React from "react";
import InventaryDetails from "../inventaryDetails/InventaryDetails";
import "./MoveDetails.css";
function MoveDetails(props) {
 

  let inventary =props.move["items"]["rooms"]; 
  
  let old_house_additional_info = props.move.old_house_additional_info;
  let new_house_additional_info = props.move.old_house_additional_info;
  if (old_house_additional_info === "") {
    old_house_additional_info = "No additional info";
  }

  if (new_house_additional_info === "") {
    new_house_additional_info = "No additional info";
  }
  return (
    <div>
      <h3 style={{float:"left"}}>Inventary Details</h3>
      <button className="editBtn">Edit Inventary</button>
      {inventary.map((obj, index) => (
       
         <InventaryDetails room={obj} />
      
        
      ))}
      <h3 style={{float:"left"}}>House Details</h3>
      
      <button className="editBtn" >Edit house details</button>
      <br/><br/><br/>
      <div className="houseDetails">
        <div className="existingHouse">
          <h4 className="house_details">Existing House Details</h4>
          <div className="houseDetails_row1">
            <div className="row1_option">
              <h4>Floor No.</h4>
              <div>{props.move.old_floor_no}</div>
            </div>
            <div className="row1_option">
              <h4>Elivator Avilable</h4>
              <div>{props.move.old_elevator_availability}</div>
            </div>
            <div className="row1_option">
              <h4>Packing Required</h4>
              <div>{props.move.packing_service}</div>
            </div>
            <div className="row1_option">
              <h4>Distance from truck to door</h4>
              <div>{props.move.old_parking_distance}</div>
            </div>
          </div>
          
          <div className="houseDetails_additionalInfo">
            <h4>Additional Information</h4>
            <div>{old_house_additional_info}</div>
          </div>
        </div>
        <br/>
<hr style={{color:"rgb(228, 225, 225)"}}/>
<br/>
        <div className="newHouse">
          <h4 className="house_details">New House Details</h4>
          <div className="houseDetails_row1">
            <div className="row1_option">
              <h4>Floor No.</h4>
              <div>{props.move.new_floor_no}</div>
            </div>
            <div className="row1_option">
              <h4>Elivator Avilable</h4>
              <div>{props.move.new_elevator_availability}</div>
            </div>
            <div className="row1_option">
              <h4>Packing Required</h4>
              <div>{props.move.unpacking_service}</div>
            </div>
            <div className="row1_option">
              <h4>Distance from truck to door</h4>
              <div>{props.move.new_parking_distance}</div>
            </div>
          </div>
          <div className="houseDetails_additionalInfo">
            <h4>Additional Information</h4>
            <div>{new_house_additional_info}</div>
          </div>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default MoveDetails;
