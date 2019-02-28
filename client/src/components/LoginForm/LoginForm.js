import React from "react";
import {Col, Container, Button, Input, Row } from "react-materialize";
import { Link } from "react-router-dom";
import './LoginForm.css';

export const LoginForm = props => {
    return (
      <Container id="loginForm">
        {props.invalidCredentials ? (
          <div className="no-credentials test">
            <Row>
              <Col s={12}>
                <Input
                s={12}
                label="Email" 
                type="email" 
                name="loginEmail"
                value={props.loginEmail}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyPress}
                autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col className="login-password" s={10} m={12}>
                {props.isPasswordVisible ? (
                  <Input
                    s={10} m={8}
                    label="Password" 
                    type="text"
                    name="loginPassword" 
                    value={props.loginPassword}
                    onChange={props.handleInputChange}
                    onKeyPress={props.handleKeyPress}
                    autoComplete="off"
                  />  
                ) : (
                  <Input
                    s={10} m={8}
                    label="Password" 
                    type="password"
                    name="loginPassword" 
                    value={props.loginPassword}
                    onChange={props.handleInputChange}
                    onKeyPress={props.handleKeyPress}
                    autoComplete="off"
                  />)
                }
                <Col s={2}>
                  <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
                </Col>
              </Col>
              <Row>
                <Col s={12}>
                  <span className="wrong-credentials left" data-error="wrong" data-success="right">No user found with these credentials.</span>
                </Col>
              </Row>
            <Row className="link-two">
              <Col s={12}>
                <Link  className="left" to="/forgot-password">Forgot your password?</Link>
              </Col>
            </Row>
          </Row>
            <Row>
              <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
              <Button className="cancelLogin-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
            </Row>
          </div> 
        ) : (
        <div className="test-two center-align">
          <Row>
            <Col s={12}>
              <Input
                s={12}
                label="Email" 
                type="email" 
                name="loginEmail"
                value={props.loginEmail}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyPress}
                autoComplete="off"
              />
            </Col>
          </Row>
          <Row>
            <Col className="login-password" s={10} m={12}>
              {props.isPasswordVisible ? (
                <Input
                  s={10} m={8}
                  label="Password" 
                  type="text"
                  name="loginPassword" 
                  value={props.loginPassword}
                  onChange={props.handleInputChange}
                  onKeyPress={props.handleKeyPress}
                  autoComplete="off"
                />
              ) : (
                <Input
                  s={10} m={8}
                  label="Password" 
                  type="password"
                  name="loginPassword" 
                  value={props.loginPassword}
                  onChange={props.handleInputChange}
                  onKeyPress={props.handleKeyPress}
                  autoComplete="off"
                />
                )
              }
            <Col s={2}>
              <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
            </Col>
          </Col>
        </Row>
        <Row className="link">
          <Col s={12}>
            <Link  className="left" to="/forgot-password">Forgot your password?</Link>
          </Col>
        </Row>
        <Row>
          <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
          <Button className="cancelLogin-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
        </Row>
      </div>)
      }
    </Container>
    );
};



