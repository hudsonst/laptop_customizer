import React, { Component } from 'react';
import Item from '../Item/Item';


class Customize extends Component {
  render() {
  const processFeatures = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;

        return (<Item feature={feature} 
          featureHash={featureHash}
          selected={this.props.selected} 
          features={this.props.features} 
          updateFeature={this.props.updateFeature} />)})
      

      return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
            {processFeatures}
        </form>
      );
  }

}

export default Customize;