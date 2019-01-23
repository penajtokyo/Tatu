import React from "react";
import {Row, Button, Input, Col } from "react-materialize";

export const LoginForm = props => {
    return (
      <div className="container">
      {props.invalidCredentials ? 
        <div className="no-credentials test">
        <Row>
          <Col s={12} m={12} l={12}>
            <Input
             s={12} m={12} l={12}
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
          <Col className="login-password" s={8} m={11} l={11}>
            {props.isPasswordVisible ? 
            <Input
             s={8} m={11} l={11}
             label="Password" 
             type="text"
             name="loginPassword" 
             value={props.loginPassword}
             onChange={props.handleInputChange}
             onKeyPress={props.handleKeyPress}
            />  : 
            <Input
               s={8} m={11} l={11}
               label="Password" 
               type="password"
               name="loginPassword" 
               value={props.loginPassword}
               onChange={props.handleInputChange}
               onKeyPress={props.handleKeyPress}
            />}
          <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
        </Col>
        <Row>
          <Col s={12}>
          <span className="wrong-credentials" data-error="wrong" data-success="right">No user found with these credentials.</span>
          </Col>
          </Row>
      </Row>
        <Row>
        <Col s={2} m={1}>
            <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
          </Col>
        <Col s={2} m={1}></Col>
          <Col s={2} m={1}>
            <Button className="cancel-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
          </Col>
      </Row>
    </div> : 
    <div className="test-two center-align">
        <Row>
          <Col s={12} m={12} l={12}>
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
          <Col className="login-password" s={10} m={11} l={11}>
            {props.isPasswordVisible ? 
            <Input
             s={10} m={11} l={11}
             label="Password" 
             type="text"
             name="loginPassword" 
             value={props.loginPassword}
             onChange={props.handleInputChange}
             onKeyPress={props.handleKeyPress}
            />  : 
            <Input
               s={10} m={11} l={11}
               label="Password" 
               type="password"
               name="loginPassword" 
               value={props.loginPassword}
               onChange={props.handleInputChange}
               onKeyPress={props.handleKeyPress}
            />}
            <Col s={1} m={1}>
          <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
         </Col>
        </Col>
      </Row>
        <Row>
          <Col s={2} m={1}>
            <Button className="login-btn" waves="light" onClick={props.onLoginSubmit}>Login</Button>
          </Col>
        <Col s={2} m={1}></Col>
          <Col s={2} m={1}>
            <Button className="cancel-btn" onClick={props.resetModals} flat modal="close" waves="light">Cancel</Button>
          </Col>
      </Row>

    </div>}
    </div>
    );
};



