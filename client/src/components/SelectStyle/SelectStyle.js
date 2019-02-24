import React, { Component } from 'react';
import { Input } from 'react-materialize';

class SelectStyle extends Component {
  state = {
    options: [
      'All',
      'Abstract',
      'Ambigram',
      'American Traditional',
      'Anatomical',
      'Biomechanical',
      'Black And Grey',
      'Blackout',
      'Blackwork',
      'Blast Over',
      'Botanical',
      'Broken Glass',
      'Celtic',
      'Chicano',
      'Dotwork',
      'Geometric',
      'Glitch',
      'Glow In The Dark',
      'Gradient',
      'Graffiti',
      'Hawaiian',
      'Hyper Realistic',
      'Inverted',
      'Japanese',
      'Lettering',
      'Line',
      'Mambo/Destrutturato',
      'Mandala',
      'Maori',
      'Mayan',
      'Minimalist',
      'Negative Space',
      'Neo Traditional',
      'New School',
      'Norse',
      'Optical Illusion',
      'Outline',
      'Paint Brush Stroke',
      'Pinstripe',
      'Pixel',
      'Pointillism',
      'Polynesian',
      'Pop Art',
      'Portrait',
      'Quote/Word',
      'Realism',
      'Silhouette',
      'Sketch',
      'Stained Glass',
      'Surrealism',
      'Torn/Ripped Skin',
      'Trash Polka',
      'Traditional',
      'Tribal',
      'UV Ink',
      'Watercolor',
      'White Ink',
      'Wood Carving'
    ]
  }
  render() {
    return (
      <Input s={12} m={6} type='select' name='style' value={this.props.style} onChange={this.props.handleSelection}>
        <option value=''>Choose a Style...</option>
        {this.state.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>)
        )}
      </Input>

    )
  }
};

export default SelectStyle;