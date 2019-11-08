import React, { Component } from 'react';
import slugify from 'slugify';
import Features from '../Features/Features';

class Item extends Component {
  render() {
     const { featureHash, feature, selected } = this.props;
     
     const options = this.props.features[feature].map(item => {
       console.log(item)
        return (<Features 
          item={item} 
          feature={feature}
          selected={selected} 
          updateFeature={this.props.updateFeature} />)})

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    };
  };

export default Item;