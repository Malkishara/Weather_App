import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BiCloud } from "react-icons/bi";
import '../Styles/AppFrontPage.css'

function AppFrontPage() {

    const [weatherData,setWeatherData]=useState([])
    

    useEffect(() => {

        
        fetch("http://localhost:3000/data").then(response => response.json())
        .then(data =>{
          console.log(data);
         setWeatherData(data)
         
        })
      
      }, []);
  return (
    <div className='front'>
    <div className='title'>

    <div className='title'><BiCloud/>  Weather App</div>
      </div> 
      <div>
       <Form style={{ width: '25rem',marginLeft:"450px" }}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  placeholder="Search" /> 
      </Form.Group>
        </Form> 
      </div>
    
{
    weatherData.map((para,i) => {
    return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-3'>
        
        <Link to={{pathname: "/full",
     state: {name: para.name, temp: para.main.temp, desc: para.weather[0].description,
     max_temp:para.main.temp_max,min_temp:para.main.temp_min,pre:para.main.pressure,hum:para.main.humidity,visi:para.visibility,
     sunrise:para.sys.sunrise,sunset:para.sys.sunset}}}>
        <div className='cardview'>
        <Card style={{ width: '25rem', flex:1, backgroundColor:'cornflowerblue' }} onClick={console.log(i)} >
        
        <Card.Body >
        
        <Row style={{height:"50px"}}>
        <Card.Title style={{fontSize:"35px"}}>{para.name}</Card.Title>
        </Row>
        <Row style={{height:"80px",marginTop:"10px"}}>
         <Col>
          <Card.Text style={{fontSize:"18px"}}>{para.weather[0].description}</Card.Text>
          </Col>
          <Col>
          <Row>
          <Card.Subtitle style={{fontSize:"24px"}}>{para.main.temp}&deg;C</Card.Subtitle>
          </Row>
          <Row>
          <Card.Text style={{fontSize:"18px"}}>Temp Min: {para.main.temp_min}</Card.Text>
          </Row>
          <Row>
          <Card.Text style={{fontSize:"18px"}}>Temp Max: {para.main.temp_max}</Card.Text>
          </Row>
          </Col>
        </Row>
        <Row style={{height:"70px",marginTop:"10px"}} >
        <Col>
        <Row >
        <Card.Text style={{fontSize:"18px"}}>Pressure: {para.main.pressure}</Card.Text>
        </Row>
        <Row>
        <Card.Text style={{fontSize:"18px"}}>Humidity: {para.main.humidity}</Card.Text>
        </Row>
        <Row>
        <Card.Text style={{fontSize:"18px"}}>Visibility: {para.visibility}</Card.Text>
        </Row>
        </Col>
        <Col>
        <Row>
        <Card.Text style={{fontSize:"18px"}}>Sunrise: {para.sys.sunrise}</Card.Text>
        </Row>
       <Row>
       <Card.Text style={{fontSize:"18px"}}>Sunset: {para.sys.sunset}</Card.Text>
       </Row>
       </Col>
       </Row>
     
      </Card.Body>
      
    </Card>
    </div>
    </Link>                    
    </div>
    </div>
    </div>
       )
     })
 }
     
  </div>
  

    
  )
}

export default AppFrontPage
