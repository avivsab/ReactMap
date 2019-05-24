import React, {Component} from 'react';
import MapGL, {Marker} from 'react-map-gl';
import SvgUmbrella from './Svg';


class MapComponent extends Component {

    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 32.08088,
        longitude: 48,
        zoom: 3.5,
        width: 800,
      },
      token: '************************************'
    };
  
    render() {
        const mapStyle = {position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row-reverse'}
      return (
         
            
                <MapGL mapboxApiAccessToken={this.state.token}
                {...this.state.viewport}
                style={mapStyle}
                onViewportChange={(viewport) => this.setState({viewport})}
                >
                <Marker latitude={32} longitude={49} offsetLeft={-20} offsetTop={-10}>
            <SvgUmbrella />
            </Marker>
            </MapGL>
            
           
      );
    }
  }
export default MapComponent;