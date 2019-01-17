import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-materialize';
import Nav from '../../components/Nav';

class NoMatch extends Component {
    state = {
        userName: ''
    }

    render () {
        return (
            <div>
                <Nav name={this.state.userName}/>
                <Container>
                    <Row>
                        <Col s={12}>
                            <h1>404 Page Not Found</h1>
                            <p><Link to='/'>Go to Tatu home</Link></p>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    };
}

export default NoMatch;