import React, { Component } from 'react';
import {Container, Row, Col} from 'react-materialize';
import API from '../../utils/API';
import Gallery from '../../components/Gallery';
import Nav from '../../components/Nav';
import SearchForm from '../../components/SearchForm';
import Results from '../../components/Results';

class User extends Component {
    state = {
        placement: '',
        style: '',
        searchResults: [],
        allImages: [],
        userName: ''
        // userName: this.props.location.state.detail.firstName
    }

    componentDidMount() {
        //when page loads without search queries display a default view/gallery
        this.setUserName();
        this.getAllImages();
    };

    //get all images to pass to gallery/set up new api to query all images in db
    getAllImages = () => {
        API.getAllImages()
        .then((response) => {
            console.log('all images from DB', response);
            this.setState({allImages: response.data})
        })
        .catch(err => console.log(err))
    };

    //query DB for all images with a certain body placement and/or style
    getImagesQuery = () => {
        API.getImagesByQuery(this.state.placement, this.state.style)
        .then((response) => {
            console.log('response data from db', response.data);
            this.setState({searchResults: response.data})
        })
        .catch(err => console.log(err))
    };

    //handles the form input (dropdown) for the onChange in the form
    handleSelection = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log('state', this.state);
    };

    //what to do when the submit button is clicked in the form
    handleSubmit = (event) => {
        event.preventDefault();
        this.getImagesQuery();
    };

    setUserName = () => {
        const userData = this.props.location.state.detail;
        console.log('userData var', userData);
        this.setState({userName: userData.firstName})
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
        return (
            <div>
            <Nav 
                name={this.state.userName}
                handleLogout={this.handleLogout}
            />
            <Container>
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
                        /> ) : ( 
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