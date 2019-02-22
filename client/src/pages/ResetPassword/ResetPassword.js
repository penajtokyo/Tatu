import React, { Component } from "react";
// import axios from "axios";
import Nav from '../../components/Nav';
import { Button, Input } from "react-materialize";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class ResetPassword extends Component {
    state = {
        password: "",
        name: "",
        update: false,
        isLoading: true,
        error: false
    };

    async componentDidMount() {
        const passwordToken = { params: { resetPasswordToken: this.props.match.params.token }}
        // console.log(passwordToken);
        await API.resetPassword(passwordToken)
            .then(response => {
                console.log(response);
                if (response.data.message === "password reset link a-ok") {
                    this.setState({
                        // username: response.data.username,
                        update: false,
                        isLoading: false,
                        error: false,
                        // name: ""
                    });
                } else {
                    this.setState({
                        update: false,
                        isLoading: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    }

    handleChange = (name) => (event) => {
        console.log(event.target.value);
        this.setState({
            [name]: event.target.value
        });
    };
    
    updatePass = (event) => {
        event.preventDefault();
        const passwordObj = { 
            password:  this.state.password,
            passwordToken: this.props.match.params.token         
        };
        // console.log(password, passwordToken);
        API.updatePassword(passwordObj)
            .then(response => {
                console.log(response.data);
                if (response.data.message === "password updated") {
                    this.setState({
                        updated: true,
                        error: false
                    });
                } else {
                    this.setState({
                        updated: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    render() {
        const { password, error, isLoading, updated } = this.state;

        if (error) {
        return (
          <div>
              <Nav name={this.state.name}/>
                <div className="loading">
                    <h5>The link has expired or there was a problem resetting the password. Please <Link to="/forgot-password">request</Link> another reset link.</h5>
                </div>
          </div>
        );
      } else if (isLoading) {
          return (
            <div>
                <Nav name={this.state.name}/>
                    <div className="loader">
                        Loading User Data...
                    </div>
            </div>
          )
      } else {
          return (
            <div>
                <Nav name={this.state.name}/>
                    <div className="container reset-page">
                        <div className="container">
                          <h5 className="p-resetPassword">Please enter a new password below.</h5>
                            <form className="password-form" onSubmit={this.updatePass}>
                                <Input 
                                id="password"
                                label="Password"
                                onChange={this.handleChange("password")}
                                value={password}
                                type="text"
                                />
                                <Button className="btn-style">Update</Button>
                            </form>

                        {updated && (
                            <div>
                                <p className="p-resetPassword">
                                    Your password has been successfully reset, please try logging in again.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
          )
      }
    }
}

export default ResetPassword;