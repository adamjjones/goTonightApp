import React, { useState, useEffect } from 'react';
import MapView, { Marker } from "react-native-maps";
import { View, Text, WebView, Linking } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function GTMap(props) {
  const defaultInitialRegion = {
    latitude: 27.50,
    longitude: -82.26,
    latitudeDelta: 3.000,
    longitudeDelta: 3.000,
  }
  const [region, setRegion] = useState(defaultInitialRegion)
  const { events } = props
  return (
    <MapView
      style={{ flex: 1, width: 500 }}
      region={region}
      initialRegion={defaultInitialRegion}>
      {events.map((ev, index) => {
        return <Marker key={`e${index}`} coordinate={{
          latitude: ev.venueLat,
          longitude: ev.venueLng
        }}
        >
          <View style={{
            borderRadius: 15,
            border: '1px solid black',
            backgroundColor: "white", padding: 10
          }}>
            <Text>
              {ev.venueName}
            </Text>
          </View>

        </Marker>
      })}
    </MapView>
  );
}
