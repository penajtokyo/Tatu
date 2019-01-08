import React from 'react';
import {Button, Col, Input, Row } from 'react-materialize';

const SearchForm = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <h4>Search Tattoos</h4>
                </Col>
            </Row>
            <Row>
                <Input s={12} m={6} type='select' name='style' label="Tattoo Style" onChange={props.handleSelection} defaultValue='blank'>
                    <option value='blank'>Choose One...</option>
                    <option value='abstract'>Abstract</option>
                    <option value='american'>American Traditional</option>
                    <option value='anatomy'>Anatomy</option>
                </Input>
                <Input s={12} m={6} type='select' name='placement' label="Body Placement" onChange={props.handleSelection} defaultValue='blank'>
                    <option value='blank'>Choose One...</option>
                    <option value='ankle'>Ankle</option>
                    <option value='bicep'>Bicep</option>
                    <option value='chest'>Chest</option>
                </Input>
            </Row>
            <Row>
                <Button onClick={props.handleSubmit}>Submit</Button>
            </Row>
        </div>
    );
};

export default SearchForm;