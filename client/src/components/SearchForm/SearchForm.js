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
                <Col s={12} m={6}>
                <Input s={12} type='select' name='style' onChange={props.handleSelection} defaultValue='blank'>
                    <option value=''>Choose a Style...</option>
                    <option value='Abstract'>Abstract</option>
                    <option value='American Traditional'>American Traditional</option>
                    <option value='Anatomy'>Anatomy</option>
                </Input>
                </Col>
                <Col s={12} m={6}>
                <Input s={12} type='select' name='placement' onChange={props.handleSelection} defaultValue='blank'>
                    <option value=''>Choose Placement...</option>
                    <option value='Ankle'>Ankle</option>
                    <option value='Bicep'>Bicep</option>
                    <option value='Chest'>Chest</option>
                </Input>
                </Col>
            </Row>
            <Row>
                <Button onClick={props.handleSubmit}>Submit</Button>
            </Row>
        </div>
    );
};

export default SearchForm;