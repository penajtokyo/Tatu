import React, { Component } from "react";
import { Container } from "../../components/Container";
import { ErrModal, UserModalForm, ArtistModalForm } from "../../components/Modals";
import { LoginForm } from "../../components/LoginForm";
import { Modal, Button, Input, Row } from "react-materialize";
import "./Home.css";


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
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
          this.onLoginSubmit(e);
        }
      };

    // Method to handle user pressing enter in sign up form.
    handleKeyClick = (e) => {
        if (e.key === "Enter") {
          if(this.state.selected === "customer") {
          this.userSignUp(e);
          } else {
            this.artistSignUp(e);
          }
        }
      };
  
    // Method to handle change of input fields
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
      });
    console.log(event.target.value);
    };

    // Method to toggle between customer and artist form depending on the user selection.
    handleSelection = (event) => {
      this.setState({selected: event.target.value});
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
    }
    
    // Method for showing and hiding password on login. Still not fully functional.
    showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
      }

    // Method for user/artist login and input verification.
    onLoginSubmit = (event) => {
        let loginEmail = this.state.loginEmail;
        let loginPassword = this.state.loginPassword;
        event.preventDefault();
    
    if (loginEmail === "" || loginPassword === "") {
      this.setState({
        hideErr: true
      });
    } else {
    console.log("email: " + loginEmail + " and password: " + loginPassword);
      this.setState({
        loginEmail: "",
        loginPassword: ""
      });
    };
    }

    // Method for artist signup and input verification.
    artistSignUp = (event) => {
      let firstName = this.state.firstName;
      let lastName = this.state.lastName;
      let phoneNumber = this.state.phoneNumber;
      let email = this.state.email;
      let password = this.state.password;
      let location = this.state.location;
      let street = this.state.street;
      let city = this.state.city;
      let st = this.state.st;
      let zip = this.state.zip;
      let specialization = this.state.specialization;
      let pricing = this.state.pricing;
      event.preventDefault();

        if (email === "" || password === "" || firstName === "" || lastName === "" || phoneNumber === "" || location === "" ||
      street === "" || city === "" || st === "" || zip === "" || specialization === "" || pricing === "" ) {
        this.errModal();
      } else {
      //This is where we will have the post route for artist sign up.
      console.log("email: " + email + " and password: " + password + " and specialization: " + specialization + " pricing: " + pricing);
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
      };
    } 
    
    // Method for user signup and input verification
    userSignUp = (event) => {
      let firstName = this.state.firstName;
      let lastName = this.state.lastName;
      let phoneNumber = this.state.phoneNumber;
      let email = this.state.email;
      let password = this.state.password;
      event.preventDefault();

      if (email === "" || password === "" || firstName === "" || lastName === "" || phoneNumber === "") {
        this.errModal();
    } else {
      //This is where we will have the post route for user sign up.
      console.log("email: " + email + " and " + password + " and " + firstName + " and " + lastName + " and " + phoneNumber);
      this.setState({
        email: "",
        password: "",
        selected: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      })
    }
  }

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
      const style = this.state.hideRow ? {display: "none"} : {};
      // const userStyle = !this.state.hideUserRow ? {display: "none"} : {};
      // const artistStyle = !this.state.hideArtistRow ? {display: "none"} : {};
    return (
      
    <div className="container center-align">
        <ErrModal  
          hideErr={this.state.hideErr}
          closeModal={this.closeModal}
        />
        <Container fluid>
          <h5>New Users</h5>
            <Modal header="Create New Account" trigger={<Button>Create Account</Button>}>
                <Row style={style}>
                  <Input s={12} type="select" value={this.state.selected} onChange={this.handleSelection}>
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
        </Container>
            <hr/>
          <Container fluid>
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
        </Container>    
    </div>
    );
  }
}

export default Home;

