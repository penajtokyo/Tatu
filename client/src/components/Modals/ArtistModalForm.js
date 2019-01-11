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
              <option value="abstract">Abstract</option>
              <option value="amTraditional">American Traditional</option>
              <option value="biomechanical">Biomechanical</option>
              <option value="celtic">Celtic</option>
              <option value="chicano">Chicano</option>
              <option value="geometric">Geometric</option>
              <option value="hawaiian">Hawaiian/Maori/Polynesian</option>
              <option value="hyperRealistic">Hyper Realistic</option>
              <option value="japanese">Japanese</option>
              <option value="paintBrushStroke">Paint Brush Stroke</option>
              <option value="popArt">Pop Art</option>
              <option value="surrealism">Surrealism</option>
              <option value="tribal">Tribal</option>
              <option value="watercolor">Watercolor</option>
            </Input>
          <Input s={6} type="select" name="pricing" value={props.pricing} onChange={props.handleInputChange}>
            <option value="">What is your pricing structure?</option>
            <option value="hour">Per hour</option>
            <option value="piece">Per piece</option>
          </Input>
        <Button onClick={props.artistSignUp}>Create Account</Button>
      </Row>
  );
  }
export default ArtistModalForm;
