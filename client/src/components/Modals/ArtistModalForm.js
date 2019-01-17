import React from 'react';
import { Button, Input, Row } from "react-materialize";

export const ArtistModalForm = props => {
    const artistStyle = !props.hideArtistRow ? {display: "none"} : {};
  return (
    <Row style={artistStyle}>
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
                      <Input 
                        s={6}
                        label="Location Name" 
                        type="text" 
                        name="location"
                        value={props.location}
                        onChange={props.handleInputChange}
                        onKeyPress={props.handleKeyClick}
                      />
                    <Input 
                      s={6}
                      label="Street" 
                      type="text" 
                      name="street"
                      value={props.street}
                      onChange={props.handleInputChange}
                      onKeyPress={props.handleKeyClick}
                    />
                  <Input 
                    s={6}
                    label="City" 
                    type="text" 
                    name="city"
                    value={props.city}
                    onChange={props.handleInputChange}
                    onKeyPress={props.handleKeyClick}
                  />
                <Input 
                  s={3}
                  label="State" 
                  type="text" 
                  name="st"
                  value={props.st}
                  onChange={props.handleInputChange}
                  onKeyPress={props.handleKeyClick}
                />
              <Input 
                s={3}
                label="Zip" 
                type="number" 
                name="zip"
                value={props.zip}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyClick}
              />
            <Input s={6} type="select" name="specialization" value={props.specialization} onChange={props.handleInputChange}>
              <option value="">What is your specialization?</option>
              <option value="3D">3D</option>
              <option value="Abstract">Abstract</option>
              <option value="American Traditional">American Traditional</option>
              <option value="Biomechanical">Biomechanical</option>
              <option value="Celtic">Celtic</option>
              <option value="Chicano">Chicano</option>
              <option value="Geometric">Geometric</option>
              <option value="Hawaiian">Hawaiian/Maori/Polynesian</option>
              <option value="Hyper Realistic">Hyper Realistic</option>
              <option value="Japanese">Japanese</option>
              <option value="Paint Brush Stroke">Paint Brush Stroke</option>
              <option value="Pop Art">Pop Art</option>
              <option value="Surrealism">Surrealism</option>
              <option value="Tribal">Tribal</option>
              <option value="Watercolor">Watercolor</option>
            </Input>
          <Input s={6} type="select" name="pricing" value={props.pricing} onChange={props.handleInputChange}>
            <option value="">What is your pricing structure?</option>
            <option value="By the Hour">Per hour</option>
            <option value="By the piece">Per piece</option>
          </Input>
        <Button onClick={props.artistSignUp}>Create Account</Button>
      </Row>
  );
  }
export default ArtistModalForm;
