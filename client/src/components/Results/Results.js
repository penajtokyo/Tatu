import React from 'react';
import { Card, Col, Row, CardTitle } from 'react-materialize';
import './Results.css';

const Results = (props) => {
    return (
        <div>
            <Row>
                <Col s={12}>
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
                            title='Tattoo Details'
                            reveal={
                                <div>
                                    <p>{imageData.style} on {imageData.placement}</p>
                                    <p>Description: {imageData.description}</p>
                                    {/* tattoo artist info also needed here */}
                                    <p>Artist's Name: John Doe</p>
                                    <p>Specialization: All of Them</p>
                                    <p>Pricing Structure: By the Hour</p>
                                    <p>Artist's Location: Tattoos of American</p>
                                    <p>Address: 123 Main St | Salt Lake City, UT | 84121</p>
                                </div>
                            }
                        >
                        </Card>
                    </Col>)
                )}
            </Row>
            
        </div>
    );
};

export default Results;