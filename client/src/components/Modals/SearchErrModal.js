import React from "react";
import { Row, Col } from "react-materialize";
import "./Modal.css";

const modalOpenStyle = {
  display: "block",
  zIndex: 1050,
  backgroundColor: "white",
  width: "50%",
  color: "#BF691E"
};

const modalCloseStyle = {
  display: "none",
  zIndex: 1050,
  backgroundColor: "white",
  width: "50%",
  color: "#BF691E"
};

export const SearchErrModal = (props) => {
  return (
    <div>
      {!props.hideErr ? (
        <div style={modalCloseStyle} className="modal">
          <div className="modal-content">
            <Row>
              <Col s={12}><h4 className="modalHeader">Oops!</h4></Col>
              <Col s={12}>
                {/* pass in the error message from where the modal is invoked */}
                <p className="modalMessage">{props.message}</p>
              </Col>
            </Row>
          </div>
          <div className="modal-foot">
            <button className="btn" onClick={props.closeModal}>Close</button>
          </div>
        </div>
      ) : (
        <div style={modalOpenStyle} className="modal">
          <div className="modal-content">
            <Row>
              <Col s={12}><h4 className="modalHeader">Oops!</h4></Col>
              <Col s={12}>
                <p className="modalMessage">{props.message}</p>
              </Col>
            </Row>
          </div>
          <div className="modal-foot">
            <button className="btn" onClick={props.closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}