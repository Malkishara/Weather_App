import React from 'react'
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <div>
      <h2>Weather Application</h2>    
    <div>
{
    weatherData.map((para) => {
    return (
    <div className='container'>
    <div className='row'>
    <div className='col-md'>
        
        
        <Card style={{ width: '18rem' }} >
        <Card.Body >
        
        <Row>
        <Card.Title>{para.name}</Card.Title>
        </Row>
        <Row>
         <Col>
          <Card.Text>{para.weather[0].description}</Card.Text>
          </Col>
          <Col>
          <Row>
          <Card.Subtitle className="mb-2 text-muted">{para.main.temp}</Card.Subtitle>
          </Row>
          <Row>
          <Card.Text>{para.main.temp_min}</Card.Text>
          </Row>
          <Row>
          <Card.Text>{para.main.temp_max}</Card.Text>
          </Row>
          </Col>
        </Row>
        <Row>
        <Col>
        <Row>
        <Card.Text>{para.main.pressure}</Card.Text>
        </Row>
        <Row>
        <Card.Text>{para.main.humidity}</Card.Text>
        </Row>
        <Row>
        <Card.Text>{para.visibility}</Card.Text>
        </Row>
        </Col>
        <Col>
        <Row>
        <Card.Text>{para.sys.sunrise}</Card.Text>
        </Row>
       <Row>
       <Card.Text>{para.sys.sunset}</Card.Text>
       </Row>
       </Col>
       </Row>
        <Card.Link href="full">Full View</Card.Link>
        
       
      </Card.Body>
    </Card>
                          
    </div>
    </div>
    </div>
       )
     })
 }
     </div>
  </div>

    
  )
}

export default AppFrontPage
