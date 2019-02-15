import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import API from '../../utils/API';
import Gallery from '../../components/Gallery';
import Nav from '../../components/Nav';
import Results from '../../components/Results';
import { SearchErrModal } from '../../components/Modals';
import SearchForm from '../../components/SearchForm';
import UserAdmin from '../../components/UserAdmin';
import './User.css';

class User extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    placement: '',
    style: '',
    searchResults: [],
    savedImages: [],
    userSavedIDs: this.props.location.state.detail.savedPictures,
    hideErr: false,
    err: ''
  };

  componentDidMount() {
    this.setUserName();
    this.getSavedImages();
  };

  // Method for calling error modal
  errModal = () => {
    // console.log(this.state.hideErr);
    this.setState({
      hideErr: true
    });
  };

  //closes the modal
  closeModal = () => {
    this.setState({
      hideErr: false,
    })
  };

  setUserName = () => {
    const userData = this.props.location.state.detail;
    // console.log('userData var', userData);
    this.setState({  
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone 
    })
    // console.log('users name', this.state.userName);
  };

  //retrieve the user's saved images from the D 
  getSavedImages = () => {
  API.getSavedImages()
    .then(response => {
      // console.log('all customer saved images from DB', response.data.savedPictures)
      this.setState({ savedImages: response.data.savedPictures })
    })
    .catch(err => console.log(err))
  };

  //saves the selected image (by ID) to the DB
  handleSaveImage = (id) => {
    //this gets the props._id for the article that the button was clicked 
    const findImageByID = this.state.searchResults.find((el) => el._id === id);
    const photoID = { _id: findImageByID._id};
    API.saveImage(photoID)
      .then(response => {
        // console.log("image saved to user's gallery");
        this.setState({ userSavedIDs: response.data.savedPictures})
        this.getSavedImages();
      })
      .catch(err => console.log(err))
  };

  //removes a saved image from user's gallery
  handleRemoveImage = (id) => {
    //this gets the props._id for the article that the button was clicked on and 
    const findImageByID = this.state.savedImages.find((el) => el._id === id);
    const photoID = { _id: findImageByID._id};
    // console.log('photo ID in remove saved image', photoID);
    API.removeImage(photoID)
      .then(response => {
        // console.log("image removed from user's gallery")
        this.setState({ userSavedIDs: response.data.savedPictures})
        this.getSavedImages();
      })
      .catch(err => console.log(err))
  };

  //query DB for all images with a certain body placement and/or style
  getImagesQuery = () => {
    API.getImagesByQuery(this.state.placement, this.state.style)
      .then((response) => {
        // console.log('response data from db', response.data);
        //if array is empty (ie no matching results) display modal
        if (response.data.length === 0) {
          this.setState({
            err: "It looks like we currently don't have any images that match your criteria. Please try again."
          })
          this.errModal();
        }
        else {
          this.setState({ searchResults: response.data })
        }
      })
      .catch(err => console.log(err))
  };

  //handles the selection in the form
  handleSelection = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputChange = () => {

  };

  handleUpdateSubmit = () => {

  };

  handleSubmit = (event) => {
    event.preventDefault();
    //if both fields are blank invoke the err modal
    if (this.state.style === '' && this.state.placement === '') {
      this.setState({
        err: "You need to use at least one search criteria."
      });
      this.errModal();
    }
    else {
      this.getImagesQuery();
    }
  };

  handleLogout = () => {
    API.logout()
      .then((response) => {
        // console.log('response:', response);
        this.props.history.push({
          pathname: "/"
        });
      })
      .catch(err => console.log(err))
  };
  render() {
    return (
      <div>
        <Nav
          name={this.state.firstName}
          handleLogout={this.handleLogout}
        />
        <Container>
          <SearchErrModal
            message={this.state.err}
            hideErr={this.state.hideErr}
            closeModal={this.closeModal}
          />
          <UserAdmin 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            handleInputChange={this.handleInputChange}
            handleUpdateSubmit={this.handleUpdateSubmit}
          />
          <Row>
            <Col s={12} className='search'>
              <SearchForm
                placement={this.state.placement}
                style={this.state.style}
                handleSelection={this.handleSelection}
                handleSubmit={this.handleSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col s={12} className='results'>
              {this.state.searchResults.length ? (
                <Results
                  imagesData={this.state.searchResults}
                  saved={this.state.userSavedIDs}
                  handleSaveImage={this.handleSaveImage}
                  handleRemoveImage={this.handleRemoveImage}
                />) : (
                <div>
                  <h5 className='placeholder'>Go ahead... search for your perfect tattoo...</h5>
                  <hr id='sectionBreak'/>
                </div>
                )}
            </Col>
          </Row>
          <Row>
            <Col s={12} className='savedGallery'>
              {this.state.savedImages.length ? (
                <Gallery
                  images={this.state.savedImages}
                  saved={this.state.userSavedIDs}
                  handleRemoveImage={this.handleRemoveImage}
                />) : (
                  <div>
                    <h5 className='placeholder'>You don't currently have any favorites.</h5>
                  </div>
                )}
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default User;