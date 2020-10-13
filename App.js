import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Fragment, StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import venueInfo from './components/venueInfo';
import { NavigationNativeContainer } from '@react-navigation/native';
import GTMap from './components/GTMap'

const Stack = createStackNavigator();

// const Separator = () => (
//   <View style={styles.separator} />
// );


const App = () => {
  let [events, setEvents] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    console.log('getData called')
    if (events.length === 0) {
      fetch('http://gotonight.com/api/events.cfm')
        .then(response => {
          console.log('response', response)
          return response.json()
        })
        .then(data => {
          console.log('setevents', data)
          setEvents(data)
        }).catch(console.error)
    }
  };
  console.log('events', events)
  return (
    <SafeAreaView style={styles.container}>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="venueInfo"
          component={GTMap}
          events={events}
          options={{ title: 'Welcome', events: events }}
        />
      </Stack.Navigator> */}
      <GTMap events={events} />
    </SafeAreaView>
  )
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
