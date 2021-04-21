import React, { useState } from 'react';
import './App.scss';
import {
  Card,
  CardBody,
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

      <Card body inverse style={{ backgroundColor: '#666', width: '18em' }}>
        <CardBody>
          <CardTitle tag="h5">Watch The Weather</CardTitle>
          <Form>
            <FormGroup>
              <Label for="exampleNumber"></Label>
              <Input type="number" name="number" id="exampleNumber" placeholder="ZipCode, City, etc"/>
              <div><Button id='this-button' className='btn btn-success' onClick={handleClick}>Submit</Button></div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <h3>{domWriting}</h3>
    </div>
  );
}

export default App;
