import React from 'react';
import { Col, Row } from 'react-materialize';
import DisplayCard from '../DisplayCard/DisplayCard';
import './Results.css';

const Results = (props) => {
  return (
    <div>
      <Row>
        <Col s={12}>
          <h4 className='sectionHead'>Your Search Results</h4>
          {/* add a show and hide button or icon to minimize/hide results to move saved gallery up */}
        </Col>
      </Row>
      <Row>
        <DisplayCard 
          data={props.imagesData}
          savedImgIDs={props.saved}
          handleSaveImage={props.handleSaveImage}
          handleRemoveImage={props.handleRemoveImage}
        />
        
      </Row>
      <hr id='sectionBreak'/>
    </div>
  );
};

export default Results;