import React, { Component } from "react";
// import { Container } from "../../components/Container";

import {
  ErrModal,
  UserModalForm,
  ArtistModalForm
} from "../../components/Modals";
import { LoginForm } from "../../components/LoginForm";
import { Modal, Button, Input, Row } from "react-materialize";
import Nav from '../../components/Nav';
import "./Home.css";
import API from "../../utils/API";

//variable for smarty streets api
const url = "https://us-street.api.smartystreets.com/street-address?auth-id=7065599766197186&candidates=1&match=strict";

class Home extends Component {
  state = {
    loginEmail: "",
    loginPassword: "",
    email: "",
    password: "",
    selected: "",
    type: "",
    isPasswordVisible: false,
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
    hideErr: false,
    invalidCredentials: false,
    userName: '',
    addressVerified: true


  };

  // Method to handle user pressing enter in login form.
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.onLoginSubmit(event);
    }
  };

  // Method to handle user pressing enter in sign up form.
  handleKeyClick = event => {
    if (event.key === "Enter") {
      if (this.state.selected === "customer") {
        this.userSignUp(event);
      } else {
        this.artistSignUp(event);
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

  // Method for showing and hiding password on login.
  showPassword = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({isPasswordVisible: !this.state.isPasswordVisible
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
    API.login(loginData)
      .then(response => {
        console.log("response", response);
        if (response.data === "invalid") {
          console.log("Invalid Email or Password")
          this.setState({
            invalidCredentials: true
          });
        }
        else {
          this.setState({
            loginEmail: "",
            loginPassword: ""
          });
            if (response.data.type === "customer") {
              this.props.history.push({
                pathname: "/user",
                state: { detail: response.data }
              });
            } else {
              this.props.history.push({
                pathname: "/artist",
                state: { detail: response.data }
              });
            }
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

    //variables for address verification
      let urlstreet = this.state.street.split(' ').join('+');
      let urlstate = this.state.st.split(' ').join('+');
      let urlcity = this.state.st.split(' ').join('+');
      let completeurl = url + "&street=" + urlstreet + "&city=" + urlcity + "&state=" + urlstate + "&zipcode=" + this.state.zip;

      console.log("complete URL: ", completeurl);


    if (
      artistInfo.email === "" ||
      artistInfo.password === "" ||
      artistInfo.firstName === "" ||
      artistInfo.lastName === "" ||
      artistInfo.phoneNumber === "" ||
      artistInfo.location === "" ||
      artistInfo.street === "" ||
      artistInfo.city === "" ||
      artistInfo.st === "" ||
      artistInfo.zip === "" ||
      artistInfo.specialization === "" ||
      artistInfo.pricing === ""
    ) {
      console.log("error 1");
      this.errModal();
    } else {

      const verifyAddress = (address) =>{
        console.log("verify address");
       API.verifyAddress(address)
        .then(response => {
          console.log(response.data)
          if (response.data.length < 1 || response.data === undefined){
            console.log("address is invalid");
            this.setState({
              addressVerified: false,
            });
            console.log("error 2");
            this.errModal();
          }
          else{
          console.log("address is valid")
          console.log("artist info obj", artistInfo);
          this.handleSignup(artistInfo);
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
        }).catch(function (error) {
          console.log(error);
        });
    };
    verifyAddress(completeurl);

    }
  };

  // Method for user signup and input verification
  userSignUp = event => {
    event.preventDefault();
    const customerInfo = {
      type: this.state.selected,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password
    };


    if (
      customerInfo.email === "" ||
      customerInfo.password === "" ||
      customerInfo.firstName === "" ||
      customerInfo.lastName === "" ||
      customerInfo.phoneNumber === ""
    ) {
      this.errModal();
    } else {
      //Post route for user sign up.
      console.log("customer info", customerInfo);
      this.handleSignup(customerInfo);
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
 //method to be used in sign up methods above
 handleSignup = signupData => {
  API.signup(signupData)
    .then(response => {
      console.log("account has been created");

      if (response.data.type === "customer") {
        this.props.history.push({
          pathname: "/user",
          state: { detail: response.data }
        });
      } else {
        this.props.history.push({
          pathname: "/artist",
          state: { detail: response.data }
        });
      }
    })
    .catch(err => console.log(err));

    this.setState({
      hideRow: false,
      hideUserRow: false,
      hideArtistRow: false
    });
};


  // Method for capitalizing the first letter of the first and last name for both User and Artist sign up form
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Method for error modal. Still not fully functional.
  errModal = () => {
    console.log(this.state.hideErr);
    this.setState({
      hideErr: true
    });
  };

  // Method for closing error modal
  resetModals = () => {
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
      pricing: "",
      hideRow: false,
      hideUserRow: false,
      hideArtistRow: false
    });
  };

  closeModal = () => {
    this.setState({
      hideErr: false,
    })
    this.setState({
      addressVerified: true,
    })
  }

  render() {
    const style = this.state.hideRow ? { display: "none" } : {};
    const btnStyle = this.state.hideRow ? {display: "block"} : {display: "none"};
    return (
      <div>
        <Nav name={this.state.userName} />
        <div className="container center-align">
          <ErrModal hideErr={this.state.hideErr} addressVerified = {this.state.addressVerified} closeModal={this.closeModal} />
          <h5><b>New Users</b></h5>
          <Modal
            s={12}
            m={12}
            header="Create New Account"
            trigger={<Button>Create Account</Button>}
            actions={
              <div>
                <Button className="cancel-btn" onClick={this.resetModals} flat modal="close" waves="light">Cancel</Button>
                <Button style={btnStyle} onClick={this.state.hideArtistRow ? this.artistSignUp : this.userSignUp}>Create Account</Button>
              </div>}
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
              capitalize={this.capitalize}
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
              capitalize={this.capitalize}
            />
          </Modal>
          <hr />
          <h5><b>Existing Users</b></h5>
          <LoginForm
            loginEmail={this.state.loginEmail}
            loginPassword={this.state.loginPassword}
            type={this.state.input}
            isPasswordVisible={this.state.isPasswordVisible}
            invalidCredentials={this.state.invalidCredentials}
            handleInputChange={this.handleInputChange}
            onLoginSubmit={this.onLoginSubmit}
            handleKeyPress={this.handleKeyPress}
            showPassword={this.showPassword}
          />
        </div>
      </div>
    );
  }
}

export default Home;
