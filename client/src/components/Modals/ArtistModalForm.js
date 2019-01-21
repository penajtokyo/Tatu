import React from 'react';
import { Input, Row, Col } from "react-materialize";
import "./Modal.css";

export const ArtistModalForm = props => {
    const artistStyle = !props.hideArtistRow ? {display: "none"} : {};
  return (
    <div style={artistStyle}>
      <Row></Row>
        <Row>
          <Col s={12} m={6} l={6}>
            <Input 
              s={12}
              label="First Name" 
              type="text" 
              name="firstName"
              value={props.capitalize(props.firstName)}
              onChange={props.handleInputChange}
              onKeyPress={props.handleKeyClick} 
            />
          </Col>
        <Col s={12} m={6} l={6}>
          <Input 
            s={12}
            label="Last Name" 
            type="text" 
            name="lastName"
            value={props.capitalize(props.lastName)}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyClick}
          />
        </Col>
      </Row>
    <Row>
      <Col s={12} m={6} l={6}>
        <Input 
          s={12}
          label="Phone Number" 
          type="text" 
          name="phoneNumber"
          value={props.phoneNumber}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
        {/* <span className="helper-text" data-error="wrong" data-success="right">XXX-XXX-XXXX</span> */}
      </Col>
    </Row>
  <Row>
    <Col s={12} m={6} l={6}>
      <Input 
        s={12}
        label="Email" 
        type="email" 
        name="email"
        value={props.email}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyClick}
      />
    </Col>
      <Col s={12} m={6} l={6}>
        <Input 
          s={12}
          label="Password" 
          type="text" 
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
      </Col>
    </Row>
      <Row>    
        <Col s={12} m={6} l={6}>
          <Input 
            s={12}
            label="Location Name" 
            type="text" 
            name="location"
            value={props.location}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyClick}
          />
        </Col>    
        <Col s={12} m={6} l={6}>     
          <Input 
            s={12}
            label="Street" 
            type="text" 
            name="street"
            value={props.street}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyClick}
          />
      </Col>
    </Row>
      <Row>
        <Col s={12} m={6} l={6}>
          <Input 
            s={12}
            label="City" 
            type="text" 
            name="city"
            value={props.city}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyClick}
          />
        </Col>
      <Col s={10} m={2} l={2}>
        <Input 
          s={12}
          label="State" 
          type="text" 
          name="state"
          value={props.state}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
      </Col>
    <Col s={10} m={4} l={4}>
      <Input 
        s={12}
        label="Zip" 
        type="number" 
        name="zip"
        value={props.zip}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyClick}
      />
    </Col>
  </Row>
    <Row>
    <Col s={12} m={6} l={6}>
        <Input s={12} type="select" name="specialization" value={props.specialization} onChange={props.handleInputChange}>
          <option value="">What is your specialization?</option>
          <option value="3D">3D</option>
          <option value="Abstract">Abstract</option>
          <option value="AmericanTraditional">American Traditional</option>
          <option value="Biomechanical">Biomechanical</option>
          <option value="Celtic">Celtic</option>
          <option value="Chicano">Chicano</option>
          <option value="Geometric">Geometric</option>
          <option value="Hawaiian/Maori/Polynesian">Hawaiian/Maori/Polynesian</option>
          <option value="HyperRealistic">Hyper Realistic</option>
          <option value="Japanese">Japanese</option>
          <option value="PaintBrushStroke">Paint Brush Stroke</option>
          <option value="PopArt">Pop Art</option>
          <option value="Surrealism">Surrealism</option>
          <option value="Tribal">Tribal</option>
          <option value="Watercolor">Watercolor</option>
        </Input>
      </Col>
        <Col s={12} m={6} l={6}>
          <Input s={12} type="select" name="pricing" value={props.pricing} onChange={props.handleInputChange}>
            <option value="">What is your pricing structure?</option>
            <option value="Hour">Per hour</option>
            <option value="Piece">Per piece</option>

          </Input>
      </Col>
    </Row>
  </div>
  );
  }
export default ArtistModalForm;