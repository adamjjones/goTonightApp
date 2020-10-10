// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Fragment,StyleSheet, Text, View, SectionList, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Fragment, StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import PropTypes from 'prop-types'

// const Separator = () => (
//   <View style={styles.separator} />
// );

const getData = () => {
  fetch('http://dev.gotonight.com/api/events.cfm')
    .then(response => response.json())
    .then(data => console.log(data));
}

const App = () => {
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal)
  useEffect(() =>
    getData()
  )
  const [region, setRegion] = useState({
    latitude: 51.5078788,
    longitude: -0.0877321,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  })
  return (
    < SafeAreaView style={styles.container} >
      <MapView
        style={{ flex: 1, width: 500 }}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}
        initialRegion={{
          latitude: 51.5078788,
          longitude: -0.04324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}>
        <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
      </MapView>

      {/* <View>
        <TouchableOpacity>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
          <Button
            title={`Press Me - ${modal}`}
            onPress={toggleModal}
          />
          <Image
            style={{ width: 380, height: 150 }}
            source={{
              uri: 'http://miro.medium.com/max/900/1*V3lEj-lK6xveF09ebDiySg.png'
            }}
          />
          <TextInput
            style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
          />
        </TouchableOpacity>
      </View>

      {modal &&
        <Modal
          animationType="slide"
          visible={modal}
          style={{ width: 380, height: 150 }}
          onRequestClose={toggleModal}
        >
          <Button
            style={{ width: 100, height: 100, flex: 1, flexDirection: "row" }}
            onPress={toggleModal} title="Close Me" />
        </Modal>
      }

      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
        <Button
          title={`Press me ${modal}`}
          color="#f194ff" 
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
      </Text>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
      </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View> */}
    </SafeAreaView >
  )

};
App.viewPropTypes = {
  style: PropTypes.object
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  image: {
    resizeMode: 'contain',
    marginTop: 20,
    width: 380,
    height: 150,
  },
  button: {
    width: 200,
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>My test React Native App!!</Text>
//       <FlatList>Test</FlatList>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     borderStyle: 'solid',
//     borderColor: 'white',
//     alignItems: 'center',
//   },

//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//   },
// });
