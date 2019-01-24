import React, { Component } from "react";
import { Modal, Button } from "react-materialize";

class MissingVal extends Component {
  render() {
    console.log(this.props.missingValModal);
    // if (this.props.missingValModal) {
    return (
      <div>
        <Modal header="Modal Header" trigger={<Button>Use Me!</Button>} />
      </div>
      //   <div className="modal">
      //     <div className="modal-content">
      //       <Row>
      //         <Col s={12} m={12}>
      //           <h4 className="modalHeader">Oops!</h4>
      //         </Col>
      //         <Col s={12} m={12}>
      //           <p>Oops! It looks like something's missing</p>
      //           {/* <Verification addressVerified={props.addressVerified} /> */}
      //         </Col>
      //       </Row>
      //     </div>
      //     <div className="modal-foot" />
      //   </div>
    );
    // } else {
    //   console.log("nope not working!");
    // }
  }
}

export default MissingVal;

// trigger = {};
