import React from 'react';
import { Input, Row, Col } from "react-materialize";
import "./Modal.css";

export const ArtistModalForm = props => {
  const artistStyle = !props.hideArtistRow ? {display: "none"} : {};
  return (
    <div style={artistStyle}>
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
      />
    </Col>
      <Col s={12} m={6}>
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
          // value={props.location}
          value={props.capitalize(props.location)}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
      </Col>    
      <Col s={12} m={6}>     
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
      <Col s={12} m={6}>
        <Input 
          s={12}
          label="City" 
          type="text" 
          name="city"
          // value={props.city}
          value={props.capitalize(props.city)}
          onChange={props.handleInputChange}
          onKeyPress={props.handleKeyClick}
        />
      </Col>
      <Col s={6} m={2}>
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
      <Col s={6} m={4}>
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
      <Col s={12} m={6}>
        <Input s={12} type="select" name="specialization" value={props.specialization} onChange={props.handleInputChange}>
          <option value="">What's your specialization?</option>
          <option value="Abstract">Abstract</option>
          <option value="Ambigram">Ambigram</option>
          <option value="American Traditional">American Traditional</option>
          <option value="Anatomical">Anatomical</option>
          <option value="Biomechanical">Biomechanical</option>
          <option value="Black And Gray">Black And Gray</option>
          <option value="Blackout">Blackout</option>
          <option value="Blast Over">Blast Over</option>
          <option value="Botanical">Botanical</option>
          <option value="Broken Glass">Broken Glass</option>
          <option value="Paint Brush Stroke">Paint Brush Stroke</option>
          <option value="Celtic">Celtic</option>
          <option value="Chicano">Chicano</option>
          <option value="Dotwork">Dotwork</option>
          <option value="Geometric">Geometric</option>
          <option value="Glitch">Glitch</option>
          <option value="Glow In The Dark">Glow In The Dark</option>
          <option value="UV Ink">UV Ink</option>
          <option value="Gradient">Gradient</option>
          <option value="Graffiti">Graffiti</option>
          <option value="Hyper Realistic">Hyper Realistic</option>
          <option value="Inverted">Inverted</option>
          <option value="Japanese">Japanese</option>
          <option value="Lettering">Lettering</option>
          <option value="Line">Line</option>
          <option value="Mambo/Destrutturato">Mambo/Destrutturato</option>
          <option value="Mandala">Mandala</option>
          <option value="Mayan">Mayan</option>
          <option value="Minimalist">Minimalist</option>
          <option value="Negative Space">Negative Space</option>
          <option value="Neo Traditional">Neo Traditional</option>
          <option value="New School">New School</option>
          <option value="Norse">Norse</option>
          <option value="Traditional">Traditional</option>
          <option value="Tribal">Tribal</option>
          <option value="Optical Illusion">Optical Illusion</option>
          <option value="Outline">Outline</option>
          <option value="Pinstripe">Pinstripe</option>
          <option value="Pixel">Pixel</option>
          <option value="Pointillism">Pointillism</option>
          <option value="Pop Art">Pop Art</option>
          <option value="Portrait">Portrait</option>
          <option value="Quote/Word">Quote/Word</option>
          <option value="Realism">Realism</option>
          <option value="Silhouette">Silhouette</option>
          <option value="Sketch">Sketch</option>
          <option value="Stained Glass">Stained Glass</option>
          <option value="Surrealism">Surrealism</option>
          <option value="Torn/Ripped Skin">Torn/Ripped Skin</option>
          <option value="Trash Polka">Trash Polka</option>
          <option value="Polynesian">Polynesian</option>
          <option value="Maori">Maori</option>
          <option value="Hawaiian">Hawaiian</option>
          <option value="Watercolor">Watercolor</option>
          <option value="White Ink">White Ink</option>
          <option value="Wood Carving">Wood Carving</option>
        </Input>
      </Col>
      <Col s={12} m={6}>
        <Input s={12} type="select" name="pricing" value={props.pricing} onChange={props.handleInputChange}>
          <option value="">How Do you charge?</option>
          <option value="Per Hour">Per Hour</option>
          <option value="Per Piece">Per Piece</option>
        </Input>
      </Col>
    </Row>
  </div>
  );
}
export default ArtistModalForm;