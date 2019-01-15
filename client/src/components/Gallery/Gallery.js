import React from 'react';
import {Card, CardTitle, Carousel, Row, Col} from 'react-materialize';

//for each syle in the DB return a swiper showing all images in that category
//at start there would be no additional details
//make the category header a link/query that calls the api query to search by that style

const Gallery = () => {
    return (
        <Row>
            <Col s={12}>
                <Carousel options={{ dist: 0, indicators: true}}>
                    <Col s={12} m={6}>
                        <Card header={<CardTitle reveal image={"http://lorempixel.com/250/250/nature/1"} waves='light'/>}
                            title="Anatomy"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        </Card>
                    </Col>
                    <Col s={12} m={6}>
                        <Card header={<CardTitle reveal image={"http://lorempixel.com/250/250/nature/2"} waves='light'/>}
                            title="American Traditional"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        </Card>
                    </Col>
                </Carousel>
            </Col>
        </Row>
    );
};

export default Gallery;