import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
             <Card style={{ width: '40rem',height:'30rem' }}>
        <Card.Body >
        
        <Row>
        <Card.Title>{this.props.location.state.name}</Card.Title>
        </Row>
        <Row>
         <Col>
          <Card.Text>{this.props.location.state.desc}</Card.Text>
          </Col>
          <Col>
          <Row>
          <Card.Subtitle className="mb-2 text-muted">{this.props.location.state.temp}</Card.Subtitle>
          </Row>
          <Row>
          <Card.Text>{this.props.location.state.min_temp}</Card.Text>
          </Row>
          <Row>
          <Card.Text>{this.props.location.state.max_temp}</Card.Text>
          </Row>
          </Col>
        </Row>
        <Row>
        <Col>
        <Row>
        <Card.Text>{this.props.location.state.pre}</Card.Text>
        </Row>
        <Row>
        <Card.Text>{this.props.location.state.hum}</Card.Text>
        </Row>
        <Row>
        <Card.Text>{this.props.location.state.visi}</Card.Text>
        </Row>
        </Col>
        <Col>
        <Row>
        <Card.Text>{this.props.location.state.sunrise}</Card.Text>
        </Row>
       <Row>
       <Card.Text>{this.props.location.state.sunset}</Card.Text>
       </Row>
       </Col>
       </Row>
     
      </Card.Body>
    </Card>
        
            </>
        
            )
        }
        
        }