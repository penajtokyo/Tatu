import React from "react";
import {Row, Button, Input} from "react-materialize";

const btnStyle = {
float: "left"
};

export const LoginForm = props => {
    return (
      <div>
        <Row>
            <Input
             s={12}
             label="Email" 
             type="email" 
             name="loginEmail"
             value={props.loginEmail}
             onChange={props.handleInputChange}
             onKeyPress={props.handleKeyPress}
             />
             <div className="password">
              <Input
              s={12} 
              label="Password" 
              type="password" 
              name="loginPassword" 
              value={props.loginPassword}
              onChange={props.handleInputChange}
              onKeyPress={props.handleKeyPress}
              />
            <span className="password__show" onClick={props.showHide}>{props.type === 'input' ? 'Hide' : 'Show'}</span>
            </div>
        <Button waves='light' style={btnStyle} onClick={props.onLoginSubmit}>Login</Button>
      </Row>
    </div>
    );
};