import React from 'react';
import { Input, Row, Col } from "react-materialize";

export const UserModalForm = props => {
      const userStyle = !props.hideUserRow ? {display: "none"} : {};
  return (
    <div style={userStyle}>
      <Row></Row>
        <Row>
          <Col s={12} m={6}>
            <Input 
              s={12}
              label="First Name" 
              type="text" 
              name="firstName"
              value={props.capitalize(props.firstName)}
              onChange={props.handleInputChange}
              onKeyPress={props.handleKeyClick}
              autoComplete="off" 
            />
          </Col>
        <Col s={12} m={6}>
          <Input 
            s={12}
            label="Last Name" 
            type="text" 
            name="lastName"
            value={props.capitalize(props.lastName)}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyClick}
            autoComplete="off"
          />
        </Col>
      </Row>
    <Row>
      <Col s={12} m={6}>
        <Input 
          s={12}
          label="Phone Number" 
          type="text" 
          name="phoneNumber"
          value={props.phoneNumber}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
          autoComplete="off"
        />
      </Col>
    </Row>
  <Row>
    <Col s={12} m={6}>
      <Input 
        s={12}
        label="Email" 
        type="email" 
        name="email"
        value={props.email}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyClick}
        autoComplete="off"
      />
    </Col>
      <Col s={12} m={6}>
        <Input 
          s={12}
          className="password__input"
          label="Password" 
          type="text" 
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
          autoComplete="off"
        />
          <div s={6} className="password__strength" data-score={props.score}></div>
      </Col>
    </Row>
  </div>
  );
  }
export default UserModalForm;
