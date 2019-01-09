import React from 'react';
import { Card, Col, Row, CardTitle } from 'react-materialize';

const Results = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <h4>Results Area</h4>
                </Col>
            </Row>
            <Row>
                {/* loop throught images array (of objects if has the description, style, placement
                and may each one into the card format*/}
                {props.imagesData.map((imageData, index) => (
                    <Col l={4} m={6} s={12} key={index}>
                        <Card
                            header={<CardTitle reveal image={imageData.file} waves='light' />} 
                            title={imageData.style}
                            reveal={<div><p>{imageData.style} on {imageData.placement}</p>
                            <p>{imageData.description}</p></div>}
                            // tattoo artist info also needed here
                            >
                        </Card>
                    </Col>)
                )}
            </Row>
            
        </div>
    );
};

export default Results;