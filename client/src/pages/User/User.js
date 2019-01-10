import React, { Component } from 'react';
import {Container, Row, Col} from 'react-materialize';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';
import Results from '../../components/Results';

class User extends Component {
    state = {
        placement: '',
        style: '',
        searchResults: []
    }

    componentDidMount() {
        //when page loads without search queries display a default view/gallery

    };

    //query DB for all images with a certain body placement and/or style
    getImages = () => {
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
        // console.log(event.target);
        this.setState({
            [name]: value
        });
        console.log('state', this.state);
    };

    //what to do when the submit button is clicked in the form
    handleSubmit = (event) => {
        event.preventDefault();
        //send the value selection as the query to the db (call the methods above for the API)
        this.getImages();
        // display results in cards in results area
    };

    render() {
        return (
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
                    <Col s={12} className='results center'>
                        <Results 
                            imagesData={this.state.searchResults}
                        />
                    </Col>
                </Row>
                {/* inside results, will display Card Componenet with image of category and then link to a modal at at the bottom
                to open a gallery of all images in that category or placement, after search is done */}
                {/* in gallery modal, when image is clicked, expands to show the image details and tatto artist info */}
            </Container>
        );
    }
}

export default User;