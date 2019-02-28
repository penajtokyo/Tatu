import React, { Component } from "react";
import Nav from '../../components/Nav';
import { Button, Input } from "react-materialize";
import "./ForgotPassword.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class ForgotPassword extends Component {
    state = {
        userName: "",
        email: "",
        showError: false,
        showNullError: false,
        messageFromServer: ""
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    sendEmail = event => {
        const email = { email: this.state.email }
        event.preventDefault();
        if (email === "") {
            this.setState({
                showError: false,
                showNullError: "Nothing entered",
                messageFromServer: ""
            });
        } else {
            API.forgotPassword(email)
              .then(response => {
                  console.log(response.data);
                  if (response.data === "email not in db") {
                      this.setState({
                          showError: true,
                          messageFromServer: ""
                      });
                  } else if (response.data === "recovery email sent") {
                      this.setState({
                          email: "",
                          showError: false,
                          messageFromServer: "recovery email sent"
                      });
                  }
              })
              .catch(error => {
                  console.log(error.data);
              })
        }
    };

    render() {
        const { email, messageFromServer, showNullError, showError } = this.state;
    return (
        <div>
            <Nav name={this.state.userName}/>
            <div className="container password-page">
            <div className="container">
              <h4>Trouble accessing your account?</h4>
                <p className="p-forgotPassword">Enter the email address you use for Tatu and we'll send you a password reset link.</p>
                <form onSubmit={this.sendEmail}>
                    <Input
                      id="email"
                      label="Email"
                      value={email}
                      onChange={this.handleChange("email")}
                      autoComplete="off"
                    />
                    <Button className="btn-style">Send Email</Button>
                </form>
                {showNullError === "Nothing entered" && (
                    <div>
                        <p className="forgot-p">The email address cannot be null.</p>
                    </div>
                )}
                {showError && (
                    <div>
                        <p className="forgot-p">
                            That email address isn't recognized. Please try again or <Link to="/">register</Link> for a new account.
                        </p>
                    </div>
                )}
                {messageFromServer === "recovery email sent" && (
                    <div>
                        <p className="forgot-p">Email link successfully sent!</p>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
  };
};

export default ForgotPassword;