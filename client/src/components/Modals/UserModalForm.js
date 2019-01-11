import React from 'react';
import { Button, Input, Row } from "react-materialize";

export const UserModalForm = props => {
      const userStyle = !props.hideUserRow ? {display: "none"} : {};
  return (
    <Row style={userStyle}>
    <Input 
      s={6}
      label="First Name" 
      type="text" 
      name="firstName"
      value={props.firstName}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyClick} 
    />
      <Input 
        s={6}
        label="Last Name" 
        type="text" 
        name="lastName"
        value={props.lastName}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyClick}
      />
        <Input 
          s={12}
          label="Phone Number" 
          type="text" 
          name="phoneNumber"
          value={props.phoneNumber}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
      <Input 
        s={6}
        label="Password" 
        type="password" 
        name="password"
        value={props.password}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyClick}
      />
    <Input 
      s={6}
      label="Email" 
      type="email" 
      name="email"
      value={props.email}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyClick}
    />
  <Button s={12} onClick={props.userSignUp}>Create Account</Button>
</Row>
  );
  }
export default UserModalForm;
