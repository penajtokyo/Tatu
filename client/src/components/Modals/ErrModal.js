import React from "react";
import "./Modal.css";
import { Row, Col } from "react-materialize";


const modalOpenStyle = {
  display: "block",
  zIndex: 1050,
  backgroundColor: "white",
  width: "50%",
  color: "#BF691E"
}

const modalCloseStyle = {
  display: "none",
  zIndex: 1050,
  backgroundColor: "white",
  width: "50%",
  color: "#BF691E"
}

export const ErrModal = (props) => {
  function Verification(props) {
    const addressVerified = props.addressVerified;
    const emailVerified = props.emailVerified;
    const validEmailVerified = props.validEmailVerified;
    if (addressVerified && emailVerified && validEmailVerified) {
      return <p className="modalMessage">All fields are required, please fill in the empty field(s).</p>;
    } else if (!validEmailVerified) {
        return <p className="modalMessage">Please enter a valid email.</p>;
    } else if (!emailVerified) {
      return <p className="modalMessage">The email address you entered is already registered. Please enter new email.</p>;
    } else if (!addressVerified && emailVerified)
      return <p className="modalMessage">The address you entered is invalid. Please enter a different address.</p>;
  }

  if (!props.hideErr) {
    return (
      <div style={modalCloseStyle} className="modal">
        <div className="modal-content">
          <Row>
            <Col s={12} m={12}>
              <h4 className="modalHeader">Oops!</h4>
            </Col>
            <Col s={12} m={12}>
              <Verification addressVerified={props.addressVerified} emailVerified={props.emailVerified} validEmailVerified={props.validEmailVerified} />
            </Col>
          </Row>
        </div>
        <div className="modal-foot">
          <button className="btn" onClick={props.closeModal}>Close</button>
        </div>
      </div>
    )
  } else if (props.hideErr) {
    return (
      <div style={modalOpenStyle} className="modal">
        <div className="modal-content">
          <Row>
            <Col s={12} m={12}>
              <h4 className="modalHeader">Oops!</h4>
            </Col>
            <Col s={12} m={12}>
              <Verification addressVerified={props.addressVerified} emailVerified={props.emailVerified} validEmailVerified={props.validEmailVerified} />
            </Col>
          </Row>
        </div>
        <div className="modal-foot">
          <button className="btn" onClick={props.closeModal}>Close</button>
        </div>
      </div>
    )
  }
};
