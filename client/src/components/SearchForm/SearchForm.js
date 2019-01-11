import React from 'react';
import {Button, Col, Input, Row } from 'react-materialize';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <div>
            <Row>
                <Col s={12}>
                    <h4>Search Tattoos</h4>
                </Col>
            </Row>
            <Row>
                <Input s={12} m={6} type='select' name='style' label="Tattoo Style" onChange={props.handleSelection} defaultValue='blank'>
                    <option value=''>Choose One...</option>
                    <option value='Abstract'>Abstract</option>
                    <option value='American Traditional'>American Traditional</option>
                    <option value='Anatomy'>Anatomy</option>
                </Input>
                <Input s={12} m={6} type='select' name='placement' label="Body Placement" onChange={props.handleSelection} defaultValue='blank'>
                    <option value=''>Choose One...</option>
                    <option value='Ankle'>Ankle</option>
                    <option value='Bicep'>Bicep</option>
                    <option value='Chest'>Chest</option>
                </Input>
            </Row>
            <Row>
                <Button onClick={props.handleSubmit}>Submit</Button>
            </Row>
        </div>
    );
};

export default SearchForm;