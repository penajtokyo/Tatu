import React, { Component } from "react";
import { Button, Col, Row, Icon, Modal, Input } from "react-materialize";
import SelectPlacement from "../SelectPlacement";
import SelectStyle from "../SelectStyle";
import API from "../../utils/API";

class AddPhotoForm extends Component {
  state = {
    url: "",
    style: "",
    placement: "",
    description: ""
  };

  // Method that sets the photo data that is being shipped to the DB
  handleAddPhoto = () => {
    const photoData = {
      file: this.state.url,
      style: this.state.style,
      placement: this.state.placement,
      description: this.state.description
    };

    // Call to utils.API.addImage post request to the backend
    API.addImage(photoData)
      .then(res => {
        this.setState({
          url: "",
          style: "",
          placement: "",
          description: ""
        });
      })
      .catch(err => console.log(err));
  };

  // Submit form event handler that check's to make sure that the user has provided all of the necessary information in the form
  handleSubmit = event => {
    event.preventDefault();

    if (
      this.state.url &&
      this.state.style &&
      this.state.placement &&
      this.state.description
    ) {
      this.handleAddPhoto();
      window.location.reload();
    } else {
      alert("Oops! It looks like something's missing.");
    }
  };

  // Event handler to set the form data to corresponding state key's
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} l={12} className="center" id={this.props}>
            {/* Modal button that displays on the Artist Profile page */}
            <Modal
              header="Add a photo"
              trigger={
                <Button>
                  <Icon left>add_box</Icon>
                </Button>
              }
            >
              <Row>
                {/* Add photo form */}
                <form onSubmit={this.handleSubmit}>
                  <Input
                    s={12}
                    type="url"
                    name="url"
                    label="Image URL"
                    onChange={this.handleInputChange}
                  />

                  <SelectPlacement
                    s={12}
                    handleSelection={this.handleInputChange}
                  />

                  <SelectStyle
                    s={12}
                    handleSelection={this.handleInputChange}
                  />

                  <Input
                    s={12}
                    type="textarea"
                    name="description"
                    label="Description"
                    onChange={this.handleInputChange}
                  />

                  {/* Submit button to add photo */}
                  <Button
                    waves="light"
                    type="submit"
                    value="Submit"
                    className="
                    modal-action
                    modal-close"
                    onSubmit={this.handleSubmit}
                  >
                    SUBMIT
                  </Button>
                </form>
              </Row>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddPhotoForm;
