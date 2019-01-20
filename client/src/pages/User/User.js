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
    allImages: [],
    userName: '',
    hideErr: false,
    err: ''
  };

  componentDidMount() {
    //when page loads without search queries display a default view/gallery
    this.setUserName();
    this.getAllImages();
  };

  // Method for calling error modal
  errModal = () => {
    console.log(this.state.hideErr);
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

  //get all images to pass to gallery/user default view
  getAllImages = () => {
    API.getAllImages()
      .then((response) => {
        console.log('all images from DB', response.data);
        this.setState({ allImages: response.data })
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
    console.log('state', this.state);
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
    console.log('userData var', userData);
    this.setState({ userName: userData.firstName })
    console.log('users name', this.state.userName);
  };

  handleLogout = () => {
    API.logout()
      .then((response) => {
        console.log('response:', response);
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
                />) : (
                  <Gallery
                    images={this.state.allImages}
                  />
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default User;