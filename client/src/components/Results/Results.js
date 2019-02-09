import React from 'react';
import { Col, Row } from 'react-materialize';
import DisplayCard from '../DisplayCard/DisplayCard';
import './Results.css';

const Results = (props) => {
  return (
    <div>
      <Row>
        <Col s={12}>
          <h4 className='sectionHead'>Your Search Results...</h4>
        </Col>
      </Row>
      <Row>
        <DisplayCard 
          data={props.imagesData}
          handleSaveImage={props.handleSaveImage}
        />
      </Row>
    </div>
  );
};

export default Results;