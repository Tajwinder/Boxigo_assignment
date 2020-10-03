import React,{useEffect} from 'react'
import './Home.css'
import data from './../../data.json'
import MyMoves from './../myMoves/MyMoves'
import Sidebar from './../sidebar/Sidebar'
function Home() {
    
    useEffect(() => {
      console.log(data['Customer_Estimate_Flow']['1'])

        return () => {
            
        }
    }, )
    return (
        <div className="home">
            
            <Sidebar/>
            <MyMoves/>
             
        </div>
    )
}

export default Home
