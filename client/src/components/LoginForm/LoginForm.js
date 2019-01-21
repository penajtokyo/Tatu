import React from "react";
import {Row, Button, Input, Col } from "react-materialize";

export const LoginForm = props => {
    return (
      <div className="container">
      {props.invalidCredentials ? 
        <div className="no-credentials">
        <Row>
          <Col s={12} m={10} l={10}>
            <Input
             s={12} m={10} l={10}
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
          <Col className="login-password" s={10} m={10} l={10}>
            {props.isPasswordVisible ? 
            <Input
             s={10} m={10} l={10}
             label="Password" 
             type="text"
             name="loginPassword" 
             value={props.loginPassword}
             onChange={props.handleInputChange}
             onKeyPress={props.handleKeyPress}
            />  : 
            <Input
               s={10} m={10} l={10}
               label="Password" 
               type="password"
               name="loginPassword" 
               value={props.loginPassword}
               onChange={props.handleInputChange}
               onKeyPress={props.handleKeyPress}
            />}
            <span className="wrong-credentials" data-error="wrong" data-success="right">No user found with these credentials.</span>
          <Button waves="light" className="password-btn" onClick={props.showPassword}>{props.isPasswordVisible ? 'Hide' : 'Show'}</Button>
        </Col>
      </Row>
        <Row>
          <Col s={1} m={1}>
            <Button waves="light" onClick={props.onLoginSubmit}>Login</Button>
          </Col>
      </Row>
    </div> : 
    <div>
        <Row>
          <Col s={12} m={10} l={10}>
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
          <Col className="login-password" s={10} m={10} l={10}>
            {props.isPasswordVisible ? 
            <Input
             s={10} m={10} l={10}
             label="Password" 
             type="text"
             name="loginPassword" 
             value={props.loginPassword}
             onChange={props.handleInputChange}
             onKeyPress={props.handleKeyPress}
            />  : 
            <Input
               s={10} m={10} l={10}
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
          <Col s={1} m={1}>
            <Button waves="light" onClick={props.onLoginSubmit}>Login</Button>
          </Col>
      </Row>
    </div>}
    </div>
    );
};



