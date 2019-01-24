import React from 'react';
import { Button, Col, Row } from 'react-materialize';
import SelectPlacement from '../SelectPlacement';
import SelectStyle from '../SelectStyle';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <div>
      <Row>
        <Col s={12}>
          <h4 className='sectionHead'>Search Tattoos</h4>
        </Col>
      </Row>
      <Row>
        <SelectStyle 
          handleSelection={props.handleSelection} 
          style={props.style}
        />
        <SelectPlacement 
          handleSelection={props.handleSelection} 
          placement={props.placement}
        />
      </Row>
      <Row>
        <p><Button onClick={props.handleSubmit}>Submit</Button></p>
      </Row>
    </div>
  );
}

export default SearchForm;