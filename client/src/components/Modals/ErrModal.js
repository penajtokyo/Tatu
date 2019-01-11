import React from "react";
import { Row } from "react-materialize";
// import "../../App.css";

const modalOpenStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "block",
        zIndex: 1050,
        overflow: "hidden",
        outline: 0,
        boxSizing: "border-box",
        border: "solid",
}

const modalCloseStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "none",
        zIndex: 1050,
        overflow: "hidden",
        outline: 0,
        boxSizing: "border-box",
        border: "solid"
}



export const ErrModal = (props) => {
   
         if (!props.hideErr) {
           return ( 
                <div  style={modalCloseStyle}>
                    <h4>Oops</h4>
                        <Row>
                        Please fill in all available fields in the form.
                        </Row>
                        <button onClick={props.closeModal}> Close </button> 
                </div> 
           )
        } else if (props.hideErr) {
            return (
                <div  style={modalOpenStyle}>
                    <h4>Oops</h4>
                        <Row>
                        Please fill in all available fields in the form.
                        </Row>
                        <button onClick={props.closeModal}> Close </button> 
                </div>  

            )
        }
        
};