import React, { useState, useEffect } from 'react';
import MapView, { Marker } from "react-native-maps";
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GTMap(props) {
  const defaultInitialRegion = {
    latitude: 27.50,
    longitude: -82.26,
    latitudeDelta: 3.000,
    longitudeDelta: 3.000,
  }
  console.log('gtmap.props', props)
  const [region, setRegion] = useState(defaultInitialRegion)
  const { events } = props
  return (
    <MapView
      style={{ flex: 1, width: 500 }}
      region={region}
      initialRegion={defaultInitialRegion}>
      {events.filter(ev => {
        return ev.venueLat && ev.venueLng
      }).map((ev, index) => {
        console.log('index', index)
        return <Marker key={`e${index}`} coordinate={{
          latitude: ev.venueLat,
          longitude: ev.venueLng
        }}
        />
      })}
    </MapView>
  );
}
