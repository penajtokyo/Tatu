import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';
import API from '../../utils/API';
import Gallery from '../../components/Gallery';
import Nav from '../../components/Nav';
import Results from '../../components/Results';
import { SearchErrModal } from '../../components/Modals';
import SearchForm from '../../components/SearchForm';
import './User.css';

class User extends Component {
  state = {
    placement: '',
    style: '',
    searchResults: [],
    savedImages: [],
    cardSaved: false,
    userName: '',
    hideErr: false,
    err: ''
  };

  componentDidMount() {
    //when page loads without search queries display a default view/gallery
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
  }

   //retrieve the user's saved images from the D 
   getSavedImages = () => {
    API.getSavedImages()
      .then(response => {
        console.log('all customer saved images from DB', response.data.savedPictures)
        this.setState({ savedImages: response.data.savedPictures })
      })
      .catch(err => console.log(err))
  };

  

  //saves the selected image (by ID) to the DB
  handleSaveImage = (id) => {
    //this gets the props._id for the article that the button was clicked on and grabs the data.response associated with it
    const findImageByID = this.state.searchResults.find((el) => el._id === id);
    //this is the req.body to send over to the api > routes > controller file
    const photoID = { _id: findImageByID._id};
    API.saveImage(photoID)
      .then(response => {
        console.log("response", response)
        console.log("image saved to user's gallery")
        //load the saved images to the gallery// can refactored to be and get rid of response and console logs:
        //.then(this.getSavedImages())
        //do an if statement...if the cardSaved state is already true, don't change (hopefully this will not change all of them)
        //change the state of the image to being saved, so that correct button displays on the card
        this.setState({ cardSaved: true });
        //reload the saved images after update
        this.getSavedImages();
      })
      .catch(err => console.log(err))
  };

  //removes a saved image from user's gallery
  handleRemoveImage = (id) => {
    //this gets the props._id for the article that the button was clicked on and grabs the data.response associated with it
    const findImageByID = this.state.searchResults.find((el) => el._id === id);
    console.log("find image by id in remove", findImageByID)
    //this is the req.body to send over to the api > routes > controller file
    const photoID = { _id: findImageByID._id};
    console.log('photo ID in remove saved image', photoID);
    API.removeImage(photoID)
      .then(response => {
        console.log("response", response)
        console.log("image removed from user's gallery")
        //load the saved images to the gallery// can refactored to be and get rid of response and console logs:
        //.then(this.getSavedImages())
        //do an if statement...if the cardSaved state is already false, don't change
        //change the state of the image to being unsaved, so that correct button displays on the card
        this.setState({ cardSaved: false });
        this.getSavedImages();
      })
      .catch(err => console.log(err))
  };

  //query DB for all images with a certain body placement and/or style
  getImagesQuery = () => {
    API.getImagesByQuery(this.state.placement, this.state.style)
      .then((response) => {
        console.log('response data from db', response.data);
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
    // console.log('state', this.state);
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

  setUserName = () => {
    const userData = this.props.location.state.detail;
    // console.log('userData var', userData);
    this.setState({ userName: userData.firstName })
    // console.log('users name', this.state.userName);
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
          name={this.state.userName}
          handleLogout={this.handleLogout}
        />
        <Container>
          <SearchErrModal
            message={this.state.err}
            hideErr={this.state.hideErr}
            closeModal={this.closeModal}
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
                  handleSaveImage={this.handleSaveImage}
                  handleRemoveImage={this.handleRemoveImage}
                  cardSaved={this.state.cardSaved}
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
                  cardSaved={this.state.cardSaved}
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