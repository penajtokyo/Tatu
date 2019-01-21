import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Col, Row, Button, Modal } from "react-materialize";
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
          <Row>
            <Col s={12} m={12} l={12} className="center">
              
              <h2>{`${userData.firstName}  ${userData.lastName}`}</h2>
             
             
              <h3>{`${artistData.location} ${artistData.city} ${
                artistData.state
              } ${artistData.zip}`}</h3>
             
              <h3>{artistData.pricing}</h3>
              <h3>{artistData.specialization}</h3>
              
            </Col>
          </Row>
          <Row>
            <Images id={artistData._id} />
          </Row>
        </Container>

        {/* Floating icon buttons for modals */}
          <Button floating fab="vertical" icon="person" faicon="fa fa-plus" className="floating-btn" large style={{bottom: "45px", right: "24px"}}>
            <Modal
              header="Add a photo"
              trigger={<Button floating icon="add_a_photo" className="add-photo"/>}
              actions={
                <div>
                  <Button 
                    className="cancel-btn" 
                    onClose={this.closeModal} 
                    flat modal="close" 
                    waves="light">Cancel</Button>
                  <Button 
                    waves="light"
                    type="submit"
                    value="Submit"
                    onSubmit={this.handleSubmit}>SUBMIT</Button>
                </div>}>
                <AddPhotoForm id={artistData._id} />
              </Modal>
              <Modal 
                header="Edit Profile"
                trigger={<Button floating icon="mode_edit" className="profile-edit"/>}
                actions={
                  <div>
                    <Button 
                      className="cancel-btn" 
                      onClick={this.cancelUpdate} 
                      flat modal="close" 
                      waves="light">Cancel</Button>
                    <Button
                      waves="light"
                      type="submit"
                      value="Submit"
                      onSubmit={this.handleSubmit}>
                      UPDATE</Button>
                  </div>}>
                  <ArtistAdminModal userData={userData} />
            </Modal>
          </Button>
        </div>
    );
  }
}

export default ArtistProfilePage;
