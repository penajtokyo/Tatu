import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Modal,
  Input
} from "react-materialize";
import Images from "../../components/Images/Images";
import AddPhotoForm from "../../components/AddPhotoForm/AddPhotoForm";
// import ArtistAdminModal from "../../components/ArtistAdminModal/ArtistAdminModal";
import SelectStyle from "../../components/SelectStyle";
import API from "../../utils/API";
import Nav from "../../components/Nav";


class ArtistProfilePage extends Component {
  state = {
    userName: "",
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
  componentDidMount() {
    //set user name based on session data
    this.setUserName();
    // Loading Session Data to the artist profile page
    this.setSessionData();
  }
  setSessionData = () => {
    this.setState({
      id: this.props.location.state.detail.artistData._id,
      firstName: this.props.location.state.detail.firstName,
      lastName: this.props.location.state.detail.lastName,
      email: this.props.location.state.detail.email,
      phone: this.props.location.state.detail.phone,
      location: this.props.location.state.detail.artistData.location,
      street: this.props.location.state.detail.artistData.street,
      city: this.props.location.state.detail.artistData.city,
      state: this.props.location.state.detail.artistData.state,
      zip: this.props.location.state.detail.artistData.zip,
      pricing: this.props.location.state.detail.artistData.pricing,
      specialization: this.props.location.state.detail.artistData.specialization
    });
  };
  setUserName = () => {
    const user = this.props.location.state.detail;
    // console.log("user var", user);
    this.setState({ userName: user.firstName });
    // console.log("users name", this.state.userName);
  };
  handleLogout = () => {
    API.logout()
      .then(response => {
        // console.log("response:", response);
        //remove name (mainly for testing right now, redirecting should atumatically make this reset remove session data)
        this.setState({ userName: "" });
        this.props.history.push({
          pathname: "/"
        });
      })
      .catch(err => console.log(err));
  };
  // Function to set artist information into an object to be passed into the DB
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
        // Setting state to the artist information that was updated in the DB
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
      <Nav name={this.state.userName} handleLogout={this.handleLogout} />
        <Container>
          <Row>
            <Col s={12} m={12} l={12} className="artist-container">
            <h3 className="artist">Artist</h3>
              <h4>{`${this.state.firstName}  ${this.state.lastName}`}</h4>
            <h3 className="artist-header">Information</h3>
              <h4>{`${this.state.location} ${this.state.city} ${
                this.state.state
              } ${this.state.zip}`}</h4>
              <h4>{this.state.pricing}</h4>
              <h4>{this.state.specialization}</h4>
            <h3 className="artist-header">Gallery</h3>
            </Col>
          </Row>
          <Row>
            <Images id={this.state._id} />
          </Row>
        </Container>
        <Row>
          <Col s={12} m={12} l={12} className="center" id={this.props}>
            <AddPhotoForm id={this.state._id}/>
              {/* Modal button that displays on the Artist Profile page */}
              <Modal
                header="Edit Profile"
                trigger={
                  <Button faicon="fa fa-plus" floating icon="edit" className="profile-btn"/>
                }
                actions={
                  <div>
                    <Button className="cancel-btn" flat modal="close" waves="light">Cancel</Button>
                    <Button
                      waves="light"
                      type="submit"
                      value="Submit"
                      className="modal-action modal-close"
                      onClick={this.handleSubmit}
                    >
                      UPDATE
                    </Button>
                  </div>}
              >
                <Row>
                  {/* Edit profile form */}
                  <form onSubmit={this.handleSubmit}>
                    <Input
                      label="First Name"
                      s={6}
                      type="text"
                      name="firstName"
                      placeholder={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Last Name"
                      s={6}
                      type="text"
                      name="lastName"
                      placeholder={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Email"
                      s={12}
                      type="text"
                      name="email"
                      placeholder={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Phone Number"
                      s={12}
                      type="text"
                      name="phone"
                      placeholder={this.state.phone}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Location"
                      s={6}
                      type="text"
                      name="location"
                      placeholder={this.state.location}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Street"
                      s={6}
                      type="text"
                      name="street"
                      placeholder={this.state.street}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="City"
                      s={6}
                      type="text"
                      name="city"
                      placeholder={this.state.city}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="State"
                      s={2}
                      type="text"
                      name="state"
                      placeholder={this.state.state}
                      onChange={this.handleInputChange}
                    />
                    <Input
                      label="Zip"
                      s={4}
                      type="text"
                      name="zip"
                      placeholder={this.state.zip}
                      onChange={this.handleInputChange}
                    />
                    <SelectStyle handleSelection={this.handleInputChange} />
                    <Input
                      s={12}
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
                  </form>
                </Row>
              </Modal>
            </Col>
          </Row>
    </div>
    );
  }
}
export default ArtistProfilePage;