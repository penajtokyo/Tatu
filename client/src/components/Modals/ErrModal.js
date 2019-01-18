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
     if (!props.hideErr) {
       return ( 
                    <div style={modalCloseStyle} className="modal">
                        <div className="modal-content">
                        <Row>
                            <Col s={12} m={12}>
                                <h4>Oops</h4>
                                    </Col>
                                        <Col s={12} m={12}>
                                    <p>All fields are required, please fill in the empty field(s)</p>
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
                                <h4>Oops</h4>
                                    </Col>
                                        <Col s={12} m={12}>
                                    <p>All fields are required, please fill in the empty field(s)</p>
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