import React, { Component } from "react";
import { Col, Row, Icon, Button, Modal, Input } from "react-materialize";
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

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} l={12} className="center" id={this.props}>
            {/* Modal button that displays on the Artist Profile page */}
            <Modal
              header="Edit Profile"
              trigger={
                <Button>
                  <Icon>edit</Icon>
                </Button>
              }
            >
              <Row>
                {/* Edit profile form */}
                <form onSubmit={this.handleSubmit}>
                  <Input
                    s={6}
                    type="text"
                    name="firstName"
                    placeholder={this.state.firstName}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={6}
                    type="text"
                    name="lastName"
                    placeholder={this.state.lastName}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={6}
                    type="text"
                    name="email"
                    placeholder={this.state.email}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={6}
                    type="text"
                    name="phone"
                    placeholder={this.state.phone}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={3}
                    type="text"
                    name="location"
                    placeholder={this.state.location}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={2}
                    type="text"
                    name="street"
                    placeholder={this.state.street}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={2}
                    type="text"
                    name="city"
                    placeholder={this.state.city}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={1}
                    type="text"
                    name="state"
                    placeholder={this.state.state}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={3}
                    type="text"
                    name="zip"
                    placeholder={this.state.zip}
                    onChange={this.handleInputChange}
                  />

                  <Input
                    s={6}
                    type="select"
                    name="pricing"
                    placeholder={this.state.pricing}
                    defaultValue="1"
                    onChange={this.handleInputChange}
                  >
                    <option value="">Choose a Pricing Structure...</option>
                    <option value="piece">Piece</option>
                    <option value="hourly">Hourly</option>
                  </Input>

                  <Input
                    s={6}
                    type="select"
                    name="specialization"
                    placeholder={this.state.specialization}
                    defaultValue="1"
                    onChange={this.handleInputChange}
                  >
                    <option value="">Choose a Specialization...</option>
                    <option value="Abstract">Abstract</option>
                    <option value="American Traditional">
                      American Traditional
                    </option>
                    <option value="Anatomy">Anatomy</option>
                  </Input>

                  {/* Update button to update artist information */}
                  <Button
                    waves="light"
                    type="submit"
                    value="Submit"
                    className="modal-action modal-close"
                    onSubmit={this.handleSubmit}
                  >
                    UPDATE
                  </Button>
                </form>
              </Row>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ArtistAdminModal;
