import React from "react";
import {Col, Container, Button, Input, Row } from "react-materialize";
import './LoginForm.css';

export const LoginForm = props => {
    return (
      <Container>
        {props.invalidCredentials ? (
          <div className="no-credentials test">
            <Row>
              <Col s={12} m={8}>
                <Input
                s={12}
                label="Email" 
                type="email" 
                name="loginEmail"
                value={props.loginEmail}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyPress}
                />
              </Col>
            </Row>
            <Row>
              <Col className="login-password" s={10} m={11}>
                {props.isPasswordVisible ? (
                  <Input
                    s={10} m={7}
                    label="Password" 
                    type="text"
                    name="loginPassword" 
                    value={props.loginPassword}
                    onChange={props.handleInputChange}
                    onKeyPress={props.handleKeyPress}
                  />  
                ) : (
                  <Input
                    s={10} m={7}
                    label="Password" 
                    type="password"
                    name="loginPassword" 
                    value={props.loginPassword}
                    onChange={props.handleInputChange}
                    onKeyPress={props.handleKeyPress}
                  />)
                }
                <Col s={1}>
                  <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
                </Col>
              </Col>
              <Row>
                <Col s={12}>
                  <span className="wrong-credentials" data-error="wrong" data-success="right">No user found with these credentials.</span>
                </Col>
              </Row>
            </Row>
            <Row>
              <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
              <Button className="cancel-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
            </Row>
          </div> 
        ) : (
        <div className="test-two center-align">
          <Row>
            <Col s={12} m={8}>
              <Input
                s={12}
                label="Email" 
                type="email" 
                name="loginEmail"
                value={props.loginEmail}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyPress}
              />
            </Col>
          </Row>
          <Row>
            <Col className="login-password" s={10} m={11}>
              {props.isPasswordVisible ? (
                <Input
                  s={10} m={7}
                  label="Password" 
                  type="text"
                  name="loginPassword" 
                  value={props.loginPassword}
                  onChange={props.handleInputChange}
                  onKeyPress={props.handleKeyPress}
                />
              ) : (
                <Input
                  s={10} m={7}
                  label="Password" 
                  type="password"
                  name="loginPassword" 
                  value={props.loginPassword}
                  onChange={props.handleInputChange}
                  onKeyPress={props.handleKeyPress}
                />)
              }
            <Col s={1}>
              <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
            </Col>
          </Col>
        </Row>
        <Row>
          <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
          <Button className="cancel-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
        </Row>
      </div>)
      }
    </Container>
    );
};



