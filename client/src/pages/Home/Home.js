import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import { Container } from "../../components/Container";
import {
  ErrModal,
  UserModalForm,
  ArtistModalForm
} from "../../components/Modals";
import { LoginForm } from "../../components/LoginForm";
// import Home from "../Home/index";
// import ArtistProfile from "../ArtistProfile/ArtistProfilePage";
import { Modal, Button, Input, Row } from "react-materialize";
import "./Home.css";
import API from "../../utils/API";

class Home extends Component {
  state = {
    loginEmail: "",
    loginPassword: "",
    email: "",
    password: "",
    selected: "",
    type: "input",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    location: "",
    street: "",
    city: "",
    st: "",
    zip: "",
    specialization: "",
    pricing: "",
    hideRow: false,
    hideUserRow: false,
    hideArtistRow: false,
    hideErr: false
  };

  // Method to handle user pressing enter in login form.
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.onLoginSubmit(e);
    }
  };

  // Method to handle user pressing enter in sign up form.
  handleKeyClick = e => {
    if (e.key === "Enter") {
      if (this.state.selected === "customer") {
        this.userSignUp(e);
      } else {
        this.artistSignUp(e);
      }
    }
  };

  // Method to handle change of input fields
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  // Method to toggle between customer and artist form depending on the user selection.
  handleSelection = event => {
    this.setState({ selected: event.target.value });
    if (this.state.selected === "customer") {
      this.setState({
        hideRow: true,
        hideUserRow: true
      });
    } else if (this.state.selected === "artist") {
      this.setState({
        hideRow: true,
        hideArtistRow: true
      });
    }
  };

  // Method for showing and hiding password on login. Still not fully functional.
  showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  };

  // Method for user/artist login and input verification.
  onLoginSubmit = event => {
    const loginData = {
      loginEmail: this.state.loginEmail,
      loginPassword: this.state.loginPassword
    };
    event.preventDefault();
    if (loginData.loginEmail === "" || loginData.loginPassword === "") {
      this.setState({
        hideErr: true
      });
    } else {
      //call the login method to call the backend, send the login data (email and password)//working!
      API.login(loginData)
        .then(response => {
          console.log("user is logged in");
          console.log("response", response);
          // console.log("email: " + loginData.loginEmail + " and password: " + loginData.loginPassword);
          this.setState({
            loginEmail: "",
            loginPassword: ""
          });
          //need to redirect to the User or artist page here, but how...may need to do it in the render section, but not sure how
          if (response.data.type === "customer") {
            //open user page
            this.props.history.push({
              pathname: "/user",
              state: { detail: response.data }
            });
          } else {
            //open artist page
            this.props.history.push({
              pathname: "/artist",
              state: { detail: response.data }
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  // Method for artist signup and input verification.
  artistSignUp = event => {
    const artistInfo = {
      type: this.state.selected,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      street: this.state.street,
      city: this.state.city,
      state: this.state.st,
      zip: this.state.zip,
      specialization: this.state.specialization,
      pricing: this.state.pricing
    };
    event.preventDefault();

    if (
      artistInfo.email === "" ||
      artistInfo.password === "" ||
      artistInfo.firstName === "" ||
      artistInfo.lastName === "" ||
      artistInfo.phoneNumber === "" ||
      artistInfo.location === "" ||
      artistInfo.street === "" ||
      artistInfo.city === "" ||
      artistInfo.state === "" ||
      artistInfo.zip === "" ||
      artistInfo.specialization === "" ||
      artistInfo.pricing === ""
    ) {
      this.errModal();
    } else {
      //This is where we will have the post route for artist sign up.
      console.log("artist info obj", artistInfo);
      this.handleSignup(artistInfo);
      // console.log("email: " + email + " and password: " + password + " and specialization: " + specialization + " pricing: " + pricing);
      this.setState({
        email: "",
        password: "",
        selected: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        location: "",
        street: "",
        city: "",
        st: "",
        zip: "",
        specialization: "",
        pricing: ""
      });
    }
  };

  // Method for user signup and input verification
  userSignUp = event => {
    const customerInfo = {
      type: this.state.selected,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password
    };
    event.preventDefault();

    if (
      customerInfo.email === "" ||
      customerInfo.password === "" ||
      customerInfo.firstName === "" ||
      customerInfo.lastName === "" ||
      customerInfo.phoneNumber === ""
    ) {
      this.errModal();
    } else {
      //This is where we will have the post route for user sign up.
      console.log("customer info", customerInfo);
      this.handleSignup(customerInfo);
      // console.log("email: " + email + " and " + password + " and " + firstName + " and " + lastName + " and " + phoneNumber);
      this.setState({
        email: "",
        password: "",
        selected: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      });
    }
  };

  //method to be used in sign up methods above
  handleSignup = signupData => {
    API.signup(signupData)
      .then(response => {
        console.log("acount has been created");
        //need to redirect to the User or artist page here, but how...may need to do it in the render section, but not sure how
        if (response.data.type === "customer") {
          //open user page
          this.props.history.push({
            pathname: "/user",
            state: { detail: response.data }
          });
        } else {
          //open artist page
          this.props.history.push({
            pathname: "/artist",
            state: { detail: response.data }
          });
        }
      })
      .catch(err => console.log(err));
  };

  // Method for error modal. Still not fully functional.
  errModal = () => {
    console.log(this.state.hideErr);
    this.setState({
      hideErr: true
    });
  };

  // Method for closing error modalc
  closeModal = () => {
    console.log("Is this working?");
    this.setState({
      hideErr: false
    });
  };

  render() {
    const style = this.state.hideRow ? { display: "none" } : {};
    // const userStyle = !this.state.hideUserRow ? {display: "none"} : {};
    // const artistStyle = !this.state.hideArtistRow ? {display: "none"} : {};
    return (
      <div className="container center-align">
        <ErrModal hideErr={this.state.hideErr} closeModal={this.closeModal} />
        {/* <Container fluid> */}
        <h5>New Users</h5>
        <Modal
          header="Create New Account"
          trigger={<Button>Create Account</Button>}
        >
          <Row style={style}>
            <Input
              s={12}
              type="select"
              value={this.state.selected}
              onChange={this.handleSelection}
            >
              <option value="">What Best Describes You?</option>
              <option value="customer">Customer</option>
              <option value="artist">Tattoo Artist</option>
            </Input>
          </Row>
          <UserModalForm
            hideUserRow={this.state.hideUserRow}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            phoneNumber={this.state.phoneNumber}
            email={this.state.email}
            handleInputChange={this.handleInputChange}
            handleKeyClick={this.handleKeyClick}
            userSignUp={this.userSignUp}
          />
          <ArtistModalForm
            hideArtistRow={this.state.hideArtistRow}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            phoneNumber={this.state.phoneNumber}
            email={this.state.email}
            location={this.state.location}
            street={this.state.street}
            state={this.state.state}
            city={this.state.city}
            st={this.state.st}
            zip={this.state.zip}
            specialization={this.state.specialization}
            pricing={this.state.pricing}
            handleInputChange={this.handleInputChange}
            handleKeyClick={this.handleKeyClick}
            artistSignUp={this.artistSignUp}
          />
        </Modal>
        {/* </Container> */}
        <hr />
        {/* <Container fluid> */}
        <h5>Existing Users</h5>
        <LoginForm
          loginEmail={this.state.loginEmail}
          loginPassword={this.state.loginPassword}
          type={this.state.input}
          handleInputChange={this.handleInputChange}
          onLoginSubmit={this.onLoginSubmit}
          handleKeyPress={this.handleKeyPress}
          showHide={this.showHide}
        />
        {/* </Container>     */}
      </div>
    );
  }
}

export default Home;
