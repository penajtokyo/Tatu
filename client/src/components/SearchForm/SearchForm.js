import React from 'react';
import {Button, Col, Row } from 'react-materialize';
import SelectPlacement from '../SelectPlacement';
import SelectStyle from '../SelectStyle';
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
                    <SelectStyle handleSelection={props.handleSelection}/>
                </Col>
                <Col s={12} m={6}>
                    <SelectPlacement handleSelection={props.handleSelection}/>
                </Col>
            </Row>
            <Row>
                <Button onClick={props.handleSubmit}>Submit</Button>
            </Row>
        </div>
    );
};

export default SearchForm;