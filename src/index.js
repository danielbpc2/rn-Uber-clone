import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import MapView from 'react-native-maps';

const App = () => (
  <View style={{flex: 1}}>
    <MapView
      style={{flex: 1}}
      region={{
        latitude: -27.210753,
        longitude: -49.644183,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }}
      showsUserLocation
      loadingEnabled
    />
  </View>
);

export default App;
