import React, {Component} from 'react';
import MapView from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: -8.117809,
          longitude: -34.897593,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
      />
    );
  }
}
