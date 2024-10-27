import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import * as Crypto from 'expo-crypto';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';
import { AsyncStorage } from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function App() {
  // Generate UUID as the first line inside the App() function
  var uuid = Crypto.randomUUID();

  // State for booking details
  const [booking, setBooking] = useState({
    bookDate: "2000-02-02",
    movieTitle: "",
    numberOfSeats: 0,
    balcony: 0,
  });

  // saveData function
  async function saveData() {
    try {
      // Alert message to display the UUID
      Alert.alert("UUID=" + uuid); // Use this line if on a phone or virtual device
      // alert("UUID=" + uuid); // Use this line if testing on the web
      
      // Save booking data to AsyncStorage
      await AsyncStorage.setItem(uuid, JSON.stringify(booking));
      Alert.alert("Booking saved successfully!"); // Confirmation alert
    } catch (error) {
      Alert.alert("Error saving booking: " + error.message); // Error handling
    }
  }

  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}>
        <Image source={require('./assets/moviesV3.png')} />
      </View>
      <Swiper showsButtons={true}>
        <PersonalInfo screenstyle={styles.screen} data={booking} setData={setBooking} />
        <MovieBooking screenstyle={styles.screen} data={booking} setData={setBooking} />
      </Swiper>
      {/* Save Data Button */}
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 0.5,
    marginTop: "8%"
  },
  screencontainer: {
    flexDirection: "column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#0569FF',
  }
});
