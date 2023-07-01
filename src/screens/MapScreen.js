import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from "expo-location";


export const MapScreen = ({ route }) => {
    // const [location, setLocation] = useState(null);
    const { location } = route.params;
    // if (location && location.latitude && location.longitude) {
        return (
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
            //   initialRegion={{
            //     latitude: location.latitude,
            //     longitude: location.longitude,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421,
            //   }}
            >
              <Marker
                // coordinate={{
                //   latitude: location.latitude,
                //   longitude: location.longitude,
                // }}
                title="You are here"
              />
            </MapView>
          </View>
        );
    //   } else {
    //     return <View style={styles.errorContainer}><Text style={styles.errorText}>Помилка: Неправильні координати місцезнаходження.</Text></View>;
      }
    // };
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  }
});
