import React, { Component } from 'react';
import { Input } from 'react-materialize';

class SelectStyle extends Component {
  state = {
    options: [
      'Ankle',
      'Back',
      'Bicep',
      'Buttock',
      'Calf',
      'Chest',
      'Ear',
      'Elbow',
      'Eye Lid',
      'Face',
      'Finger',
      'Forearm',
      'Foot',
      'Groin',
      'Hand',
      'Hip',
      'Knee',
      'Lip',
      'Lower Back',
      'Navel',
      'Neck',
      'Shin',
      'Shoulder',
      'Sternum',
      'Stomach',
      'Thigh',
      'Toe',
      'Upper Back',
      'Wrist'
    ],
  }
  render() {
    return (
      <Input s={12} m={6} type='select' name='placement' value={this.props.placement} onChange={this.props.handleSelection}>
        <option value=''>Choose Placement...</option>
        {this.state.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>)
        )}
      </Input>

    )
  }
};

export default SelectStyle;