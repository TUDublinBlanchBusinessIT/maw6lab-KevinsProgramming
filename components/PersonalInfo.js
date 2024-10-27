import { Text, SafeAreaView, TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker.js';
import { useState } from 'react';

export default function PersonalInfo({ screenstyle, data, setData }) {
  const [showDTP, setShowDTP] = useState(false);


  function showDatePicker() {
    setShowDTP(true);
  }

  
  function hideDatePicker(value) {
    setData(prevData => ({
      ...prevData,
      bookDate: value.toISOString().split('T')[0]  
    }));
    setShowDTP(false);
  }

  
  function handleFirstNameChange(text) {
    setData(prevData => ({
      ...prevData,
      firstName: text,
    }));
  }

  function handleLastNameChange(text) {
    setData(prevData => ({
      ...prevData,
      lastName: text,
    }));
  }

  return (
    <View style={screenstyle}>
      <View style={styles.label}><Text style={styles.label}>Firstname</Text></View>
      <TextInput
        style={styles.textbox}
        placeholder="Enter your first name"
        value={data.firstName || ""}
        onChangeText={handleFirstNameChange}
      />
      <Text style={styles.label}>Lastname</Text>
      <TextInput
        style={styles.textbox}
        placeholder="Enter your last name"
        value={data.lastName || ""}
        onChangeText={handleLastNameChange}
      />
      <DatePicker
        thisDate={new Date(data.bookDate)}
        setThisdate={hideDatePicker}
        datelabel="Date of Birth"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#0569FF',
    borderColor: '#0569FF',
  }
});
