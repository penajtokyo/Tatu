import React, { Component } from "react";
import { Col, Row, Input } from "react-materialize";
import API from "../../utils/API";

class ArtistAdminModal extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    pricing: "",
    specialization: ""
  };

  // Method that sets state immediately to the artists personal information. This is necessary otherwise when a field is updated state will be shipped with a blank value overriding the DB value.
  componentWillMount = () => {
    this.setState({
      firstName: this.props.userData.firstName,
      lastName: this.props.userData.lastName,
      email: this.props.userData.email,
      phone: this.props.userData.phone,
      location: this.props.userData.artistData.location,
      street: this.props.userData.artistData.street,
      city: this.props.userData.artistData.city,
      state: this.props.userData.artistData.state,
      zip: this.props.userData.artistData.zip,
      pricing: this.props.userData.artistData.pricing,
      specialization: this.props.userData.specialization
    });
  };

  // This method sets the user data up to be shipped to the DB
  handleUpdate = () => {
    console.log("working");
    const dataToUpdate = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      pricing: this.state.pricing,
      specialization: this.state.specialization
    };

    // Call to utils.API.updateArtistInfo
    API.updateArtistInfo(dataToUpdate)
      .then(res => {
        console.log(res.data);
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone,
          location: res.data.location,
          street: res.data.artistData.street,
          city: res.data.artistData.city,
          state: res.data.artistData.state,
          zip: res.data.artistData.zip,
          pricing: res.data.artistData.pricing,
          specialization: res.data.artistData.specialization
        });
        console.log(this.state);
        // window.location.reload();
      })
      .catch(err => console.log(err));

      console.log("Working");
  };

  // Event handler to set the form data to corresponding state key
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  // Submit form event handler that checks to see if a user has modified any of the data in the fields on the edit profile form
  handleSubmit = event => {
    event.preventDefault();

    if (
      this.state.firstName ||
      this.state.lastName ||
      this.state.email ||
      this.state.phone ||
      this.state.location ||
      this.state.street ||
      this.state.city ||
      this.state.state ||
      this.state.zip ||
      this.state.pricing ||
      this.state.specialization
    ) {
      this.handleUpdate();
    }
  };

  // Modal to cancel update to artist information
  cancelUpdate = () => {
    this.setState({
      firstName: this.props.userData.firstName,
      lastName: this.props.userData.lastName,
      email: this.props.userData.email,
      phone: this.props.userData.phone,
      location: this.props.userData.artistData.location,
      street: this.props.userData.artistData.street,
      city: this.props.userData.artistData.city,
      state: this.props.userData.artistData.state,
      zip: this.props.userData.artistData.zip,
      pricing: this.props.userData.artistData.pricing,
      specialization: this.props.userData.specialization
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} className="center" id={this.props}>
            {/* Modal button that displays on the Artist Profile page */}
              {/* <Row> */}
                {/* Edit profile form */}
                <form onSubmit={this.handleSubmit}>
                  <Row>
                    <Input
                      s={12} m={6}
                      label="First Name"
                      type="text"
                      name="firstName"
                      placeholder={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      s={12} m={6}
                      label="Last Name"
                      type="text"
                      name="lastName"
                      placeholder={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                  </Row>
                  <Row>
                    <Input
                      s={12} m={6}
                      label="Email"
                      type="text"
                      name="email"
                      placeholder={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      s={} m={6}
                      label="Phone Number"
                      type="text"
                      name="phone"
                      placeholder={this.state.phone}
                      onChange={this.handleInputChange}
                    />
                  </Row>
                  <Row>
                    <Input
                      s={12} m={6}
                      label="Location"
                      type="text"
                      name="location"
                      placeholder={this.state.location}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      s={12} m={6}
                      label="Street"
                      type="text"
                      name="street"
                      placeholder={this.state.street}
                      onChange={this.handleInputChange}
                    />
                  </Row>
                  <Row>
                    <Input
                      s={6} m={6}
                      label="City"
                      type="text"
                      name="city"
                      placeholder={this.state.city}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      s={4} m={2}
                      label="State"
                      type="text"
                      name="state"
                      placeholder={this.state.state}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      s={8} m={4}
                      label="Zip"
                      type="text"
                      name="zip"
                      placeholder={this.state.zip}
                      onChange={this.handleInputChange}
                    />
                  </Row>
                  <Row>
                    <Input
                      s={12} m={6}
                      label="Pricing"
                      type="select"
                      name="pricing"
                      placeholder={this.state.pricing}
                      defaultValue="1"
                      onChange={this.handleInputChange}
                    >
                      <option value="">Choose a Pricing Structure...</option>
                      <option value="Per Piece">Per Piece</option>
                      <option value="Per Hour">Per Hour</option>
                    </Input>
                    <Input
                      s={12} m={6}
                      label="Specialization"
                      type="select"
                      name="specialization"
                      placeholder={this.state.specialization}
                      defaultValue="1"
                      onChange={this.handleInputChange}
                    >
                      <option value="">Choose a Specialization...</option>
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
                  </Row>
                </form>
              {/* </Row> */}
            </Col>
          </Row>
        </div>
      );
    }
}

export default ArtistAdminModal;
