import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMoving, faUser,faReceipt,faPowerOff } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
    return (
        <div>
            <div className="sidebar_row">
           <FontAwesomeIcon icon={faTruckMoving} className="icon"/>
            <span>MY MOVES</span>
            </div>
            <div className="sidebar_row">
            <FontAwesomeIcon icon={faUser} className="icon"/>

            <span>MY PROFILE</span>
            </div>
            <div className="sidebar_row">
            <FontAwesomeIcon icon={faReceipt} className="icon"/>

            <span>GET QUOTE</span>
            </div>
            <div className="sidebar_row">
    <FontAwesomeIcon icon={faPowerOff} className="icon"/>
            <span>LOGOUT</span>
            </div>
           

        </div>
    )
}

export default Sidebar
