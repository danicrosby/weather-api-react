import React, { useState } from 'react';
import './App.scss';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function App() {
  const [domWriting, setDomWriting] = useState('Add State Logic');

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Now Write The Logic!`);
  };

  return (
    <div className='App'>
      <h2>React Weather API</h2>

    <Container style={{ marginBottom: '10em' }}>
      <Row>
        <Col xs="6" sm="4">
          <Card body inverse style={{ backgroundColor: '#666', width: '18em' }}>
          <CardImg top width="100%" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-cloud-512.png" style={{ width: '8em' }} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">City Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2">50 Degrees | Rain</CardSubtitle>
          </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
        <Card body inverse style={{ backgroundColor: '#666', width: '18em' }}>
          <CardImg top width="100%" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-cloud-512.png" style={{ width: '8em' }} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">City Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2">50 Degrees | Rain</CardSubtitle>
          </CardBody>
          </Card>
        </Col>

        <Col sm="4">
        <Card body inverse style={{ backgroundColor: '#666', width: '18em' }}>
          <CardImg top width="100%" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-cloud-512.png" style={{ width: '8em' }} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">City Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2">50 Degrees | Rain</CardSubtitle>
          </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse style={{ backgroundColor: '#666', width: '30em' }}>
            <CardBody>
              <CardTitle tag="h3">Watch The Weather</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleNumber"></Label>
                  <Input type="number" name="number" id="exampleNumber" placeholder="ZipCode, City, etc"/>
                  <div>
                    <Button id='this-button' className='btn btn-success' onClick={handleClick} style={{ marginTop: '2em' }}>Submit</Button>
                  </div>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

        <h3>{domWriting}</h3>
      </div>
  );
}

export default App;
