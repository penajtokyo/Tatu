import React from 'react';
import {Carousel, Row, Col} from 'react-materialize';

const Gallery = () => {
    return (
        <Row>
            <Col s={12}>
                <Carousel images={[
                    'https://lorempixel.com/250/250/nature/1',
                    'https://lorempixel.com/250/250/nature/2',
                    'https://lorempixel.com/250/250/nature/3',
                    'https://lorempixel.com/250/250/nature/4',
                    'https://lorempixel.com/250/250/nature/5'
                ]} /> 
            </Col>
        </Row>
    );
};

export default Gallery;