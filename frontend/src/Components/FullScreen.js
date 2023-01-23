import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { BiArrowBack } from "react-icons/bi";
import { BiCloud } from "react-icons/bi";
import '../Styles/FullScreen.css'

export default class FullScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
        }

    }


alertMessage(){
       console.log(this.props.location.state.name);
    }

    render(){
        return (
        
            <>
            <div className='full' >
                <div className='view'>
                <div className='title'><BiCloud/>  Weather App</div>
            <div className='cardView'>
        <Card style={{flex:1, backgroundColor:'cornflowerblue'}}>
        <Card.Body >
        <Row >
        <Button className='btn'  href="/"><BiArrowBack className='back'/></Button>
        </Row>
        <Row>
        <Card.Title className='cardTitle'>{this.props.location.state.name}</Card.Title>
        </Row>
        <Row className='second'>
         <Col>
          <Card.Text className="other">{this.props.location.state.desc}</Card.Text>
          </Col>
          <Col>
          <Row>
          <Card.Subtitle className="temp">{this.props.location.state.temp}&deg;C</Card.Subtitle>
          </Row>
          <Row>
          <Card.Text className="other">Temp Min: {this.props.location.state.min_temp}&deg;C</Card.Text>
          </Row>
          <Row>
          <Card.Text className="other">Temp Max: {this.props.location.state.max_temp}&deg;C</Card.Text>
          </Row>
          </Col>
        </Row>
        <Row className='second'>
        <Col>
        <Row>
        <Card.Text className="other">Pressure: {this.props.location.state.pre}hPa</Card.Text>
        </Row>
        <Row>
        <Card.Text className="other">Humidity: {this.props.location.state.hum}%</Card.Text>
        </Row>
        <Row>
        <Card.Text className="other">Visibility: {this.props.location.state.visi}km</Card.Text>
        </Row>
        </Col>
        <Col className='last'>
        <Row>
        <Card.Text className="other">Sunrise: {this.props.location.state.sunrise}</Card.Text>
        </Row>
       <Row>
       <Card.Text className="other">Sunset: {this.props.location.state.sunset}</Card.Text>
       </Row>
       </Col>
       </Row>
     
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
            </>
        
            )
        }
        
        }