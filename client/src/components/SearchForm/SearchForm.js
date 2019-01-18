import React, {Component} from 'react';
import {Button, Col, Row } from 'react-materialize';
// import SearchErrModal from '../Modals';
import SelectPlacement from '../SelectPlacement';
import SelectStyle from '../SelectStyle';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        hideErr: false
    };
    // Method for error modal. Still not fully functional.
    errModal = () => {
        console.log(this.state.hideErr);
        this.setState({
        hideErr: true
        });
    };

    // Method for closing error modal
    closeModal = () => {
        console.log("Is this working?");
        this.setState({
        hideErr: false
        });
    };

    render () {
        return (
            <div>
                {/* <SearchErrModal hideErr={this.state.hideErr} closeModal={this.closeModal} /> */}
                <Row>
                    <Col s={12}>
                        <h4>Search Tattoos</h4>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={6}>
                        <SelectStyle handleSelection={this.props.handleSelection}/>
                    </Col>
                    <Col s={12} m={6}>
                        <SelectPlacement handleSelection={this.props.handleSelection}/>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.props.handleSubmit}>Submit</Button>
                </Row>
            </div>
        );
    }
};

export default SearchForm;