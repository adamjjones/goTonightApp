import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Fragment, StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import venueInfo from './components/venueInfo';
import { NavigationContainer } from '@react-navigation/native';
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
    if (events.length === 0) {
      fetch('http://gotonight.com/api/events.cfm')
        .then(response => {
          return response.json()
        })
        .then(data => {
          // console.log('data', data)
          const data2 = data.filter(ev => {
            return ev.venueLat && ev.venueLat !== 0.0 &&
              ev.venueLng && parseFloat(ev.venueLng) !== 0.0
          })
          // console.log('data2', data2)
          setEvents(data2)
        })
        .catch(err => {
          console.error(err)
        })
    }
  };
  const gtmap = <GTMap events={events} />
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="GotonightMap">
          <Stack.Screen
            name="GotonightMap"
            options={{ title: `Where Will We Go Tonight? (${events.length} venues)` }} >
            {() => <GTMap events={events} />}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer >
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
