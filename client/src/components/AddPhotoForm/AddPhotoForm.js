import React, { Component } from "react";
import { Button, Col, Row, Modal, Input } from "react-materialize";
import SelectPlacement from "../SelectPlacement";
import SelectStyle from "../SelectStyle";
import API from "../../utils/API";
// import MissingValModal from "../Modals/MissingVal";
// import closeModal from '../Modals/'

class AddPhotoForm extends Component {
  state = {
    url: "",
    style: "",
    placement: "",
    description: ""
    // Setting the default state === to false
    // missingVal: false
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
    console.log("Working?");

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
      // this.handleMissingVal();
    }
  };

  // handleMissingVal = () => {
  //   //   // this.errModal();
  //   this.setState({
  //     missingVal: true
  //   });
  // };

  // Event handler to set the form data to corresponding state key's
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  // Method for removing content from modals
  closeModal = () => {
    console.log("hi");
    this.setState({
      url: "",
      style: "",
      placement: "",
      description: ""
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col
            s={12}
            m={12}
            l={12}
            className="center artist-container"
            id={this.props}
          >
            {/* Modal button that displays on the Artist Profile page */}
            <Modal
              header="Add a photo"
              trigger={
                <Button
                  floating
                  icon="add_a_photo"
                  className="photo-btn fixed-action-btn"
                  large
                  style={{ bottom: "110px", right: "24px" }}
                />
              }
              actions={
                <div>
                  <Button
                    className="cancel-btn"
                    onClick={this.closeModal}
                    flat
                    modal="close"
                    waves="light"
                  >
                    Cancel
                  </Button>
                  <Button
                    waves="light"
                    type="submit"
                    value="Submit"
                    className="update-btn modal-action modal-close"
                    onClick={this.handleSubmit}
                  >
                    UPDATE
                  </Button>
                </div>
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
