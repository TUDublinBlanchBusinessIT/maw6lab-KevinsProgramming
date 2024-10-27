import { Text, SafeAreaView, TextInput, StyleSheet, View, Switch, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from '../components/DatePicker';
import { useState } from 'react';

export default function MovieBooking({ screenstyle, data, setData }) {
  const [movieList, setMovieList] = useState([
    { 'id': 1, "title": "Kneecap", "age": 16 },
    { 'id': 2, "title": "Joker, Folie a Deux", "age": 18 },
    { 'id': 3, "title": "Deadpool and Wolverine", "age": 12 }
  ]);

  // Function to update movie title
  function handleChangeMovieTitle(newTitle) {
    setData(prevData => ({
      ...prevData,
      movieTitle: newTitle
    }));
  };

  // Function to update the number of tickets
  function handleTicketChange(newTotal) {
    setData(prevData => ({
      ...prevData,
      numberOfSeats: newTotal
    }));
  }

  // Function to update the balcony choice
  function handleBalconyChange(isBalcony) {
    setData(prevData => ({
      ...prevData,
      balcony: isBalcony ? 1 : 0
    }));
  }

  // Function to update the movie date
  function handleDateChange(newDate) {
    setData(prevData => ({
      ...prevData,
      bookDate: newDate.toISOString().split('T')[0]
    }));
  }

  return (
    <View style={screenstyle}>
      <Text style={styles.label}>Choose Movie</Text>
      <Picker
        style={styles.textbox}
        selectedValue={data.movieTitle}
        onValueChange={(itemValue) => handleChangeMovieTitle(itemValue)}
      >
        {movieList.map((movie) => (
          <Picker.Item label={movie.title} value={movie.title} key={movie.id} />
        ))}
      </Picker>

      <DatePicker thisDate={new Date(data.bookDate)} setThisdate={handleDateChange} datelabel="Showing Date" />

      <Text style={styles.label}>Number of Tickets: {data.numberOfSeats}</Text>
      <Slider
        minimumValue={0}
        maximumValue={5}
        step={1}
        style={styles.sliderstyle}
        value={data.numberOfSeats}
        onValueChange={handleTicketChange}
      />

      <Text style={styles.label}>Balcony</Text>
      <View style={{ alignItems: "left", flexDirection: "row" }}>
        <Switch value={data.balcony === 1} onValueChange={handleBalconyChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderstyle: {
    marginBottom: "5%"
  },
  label: {
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "bold",
  },
  textbox: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    fontSize: 24,
    marginBottom: 14,
    backgroundColor: "white",
  }
});

