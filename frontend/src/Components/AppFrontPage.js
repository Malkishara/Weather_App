import React from 'react'
import { useState,useEffect } from 'react';

function AppFrontPage() {

    const [weather,setWeather]=useState([])
    

    useEffect(() => {

        
        fetch("http://localhost:3000/data").then(response => response.json())
        .then(data =>{
          console.log(data);
         setWeather(data)
         
        })
      
      }, []);
  return (
    <div>
      <h2>Weather</h2>
    </div>
  )
}

export default AppFrontPage
