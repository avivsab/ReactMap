import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class MapComponent extends Component {

    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 32.08088,
        longitude: 48,
        zoom: 3.5,
        width: 800
      },
      token: '*********************************************'
    };
  
    render() {
      return (
        <ReactMapGL mapboxApiAccessToken={this.state.token}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      );
    }
  }
export default MapComponent;