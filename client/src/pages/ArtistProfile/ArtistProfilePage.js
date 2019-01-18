import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-materialize";
// import { Container, Col, Row, Icon, Button } from "react-materialize";
import Images from "../../components/Images/Images";
import AddPhotoForm from "../../components/AddPhotoForm/AddPhotoForm";
import ArtistAdminModal from "../../components/ArtistAdminModal/ArtistAdminModal";
import API from '../../utils/API';
import Nav from '../../components/Nav';

class ArtistProfilePage extends Component {
  state = {
    userName: ''
  }

  componentDidMount() {
    //set user name based on session data
    this.setUserName(); 
  };

  setUserName = () => {
    const user = this.props.location.state.detail;
    console.log('user var', user);
    this.setState({userName: user.firstName})
    console.log('users name', this.state.userName);
  };

  handleLogout = () => {
      API.logout()
      .then((response) => {
          console.log('response:', response);
          //remove name (mainly for testing right now, redirecting should atumatically make this reset remove session data)
          this.setState({userName: ""});
          this.props.history.push({
              pathname: "/"
          });
      })
      .catch(err => console.log(err))
  };

  render() {
    const userData = this.props.location.state.detail;
    const artistData = this.props.location.state.detail.artistData;

    return (
      <div>
        <Nav 
          name={this.state.userName}
          handleLogout={this.handleLogout}
        />
        <Container>
          <AddPhotoForm id={artistData._id} />
          <ArtistAdminModal userData={userData} />
          <Row>
            <Col s={12} m={12} l={12} className="center">
              <h6>{`${userData.firstName}  ${userData.lastName}`}</h6>
              <p>{`${artistData.location} ${artistData.city} ${
                artistData.state
              } ${artistData.zip}`}</p>
              <p>{artistData.pricing}</p>
              <p>{artistData.specialization}</p>
            </Col>
          </Row>
          <Row>
            <Images id={artistData._id} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistProfilePage;
