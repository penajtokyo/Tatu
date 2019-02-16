import React from 'react';
import { Button, Input, Modal, Row } from 'react-materialize';

const UserAdmin = props => {
  return (
    <div>
      <Modal
        header='Edit Profile'
        trigger={<Button
          floating
          icon="edit"
          className="profile-btn fixed-action-btn"
          large
          style={{ bottom: "45px", right: "24px" }}
        />}
        actions={
          <div>
             <Button
              waves="light"
              type="submit"
              value="Submit"
              className="update-btn modal-action modal-close"
              onClick={props.handleUpdateSubmit}
            >Update
            </Button>

            <Button
              className="cancel-btn"
              flat
              modal="close"
              waves="light"
            >Cancel
            </Button>
          </div>}>
        <Row>
          <Input
            s={12} m={6}
            label="First Name"
            type="text"
            name="firstName"
            placeholder={props.firstName}
            onChange={props.handleSelection}
          />
          <Input
            s={12} m={6}
            label="Last Name"
            type="text"
            name="lastName"
            placeholder={props.lastName}
            onChange={props.handleSelection}
          />
        </Row>
        <Row>
          <Input
            s={12} m={6}
            label="Email"
            type="email"
            name="email"
            placeholder={props.email}
            onChange={props.handleSelection}
          />
          <Input
            s={12} m={6}
            label="Phone Number"
            type="text"
            name="phone"
            placeholder={props.phone}
            onChange={props.handleSelection}
          />
        </Row>
      </Modal>
    </div >
  );
};

export default UserAdmin;