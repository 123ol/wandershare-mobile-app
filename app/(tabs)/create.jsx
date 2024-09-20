import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const TravelForm = () => {
  const [destination, setDestination] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [lengthOfTrip, setLengthOfTrip] = useState([]);
  const [interestOfTrip, setInterestOfTrip] = useState([]);
  const [rating, setRating] = useState('');
  const [activityLevel, setActivityLevel] = useState([]);
  const [step, setStep] = useState(1);
  const [otherInterest, setOtherInterest] = useState('');
  const [otherActivity, setOtherActivity] = useState('');

  const toggleLengthOfTrip = (length) => {
    setLengthOfTrip(lengthOfTrip === length ? '' : length);
  };

  const toggleInterestOfTrip = (interest) => {
    if (interestOfTrip.includes(interest)) {
      setInterestOfTrip(interestOfTrip.filter(item => item !== interest));
    } else {
      setInterestOfTrip([...interestOfTrip, interest]);
    }
  };

  const toggleActivityLevel = (level) => {
    if (activityLevel.includes(level)) {
      setActivityLevel(activityLevel.filter(item => item !== level));
    } else {
      setActivityLevel([...activityLevel, level]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      {step === 1 ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.label}>Desired Destination</Text>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
          />

          <View style={styles.gridContainer}>
            <Text style={styles.label}>Price Range</Text>
            <View style={styles.grid}>
              <CheckBox
                title='Budget'
                checked={priceRange === 'Budget'}
                onPress={() => setPriceRange('Budget')}
                containerStyle={[styles.checkbox, { backgroundColor: "#ddfac8", borderRadius: 10 }]}
              />
              <CheckBox
                title='Mid-range'
                checked={priceRange === 'Mid-range'}
                onPress={() => setPriceRange('Mid-range')}
                containerStyle={[styles.checkbox, { backgroundColor: "#ddfac8", borderRadius: 10 }]}
              />
              <CheckBox
                title='Luxury'
                checked={priceRange === 'Luxury'}
                onPress={() => setPriceRange('Luxury')}
                containerStyle={[styles.checkbox, { backgroundColor: "#ddfac8", borderRadius: 10 }]}
              />
            </View>
          </View>

          <View style={styles.gridContainer}>
            <Text style={styles.label}>Length of Trip</Text>
            <View style={styles.grid}>
              {['1 Night', '2 Nights', '3 Nights', '4 Nights', '5 Nights', '6 Nights', '1 Week', '2 Weeks', 'More Than 2 Weeks'].map((length) => (
                <CheckBox
                  key={length}
                  title={length}
                  checked={lengthOfTrip.includes(length)}
                  onPress={() => toggleLengthOfTrip(length)}
                />
              ))}
            </View>
          </View>

          <Text style={styles.label}>Rating</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={rating}
              onValueChange={(itemValue) => setRating(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label={Platform.OS === 'ios' ? "Select" : "Dropdown"} value="" />
              <Picker.Item label="1 Star" value="1" />
              <Picker.Item label="2 Stars" value="2" />
              <Picker.Item label="3 Stars" value="3" />
              <Picker.Item label="4 Stars" value="4" />
              <Picker.Item label="5 Stars" value="5" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
            <Text style={styles.buttonText}>Next Step!</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.step2}>
            <View style={styles.gridContainer}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "70%", alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => setStep(1)}>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.label}>Activity Level</Text>
              </View>
              <View style={styles.grid}>
                {[
                  'Adventurous', 'Relaxing', 'Educational', 'Historical', 'Touristy',
                  'Thrilling', 'Other', 'Outdoorsy'
                ].map((level) => (
                  <CheckBox
                    key={level}
                    title={level}
                    checked={activityLevel.includes(level)}
                    onPress={() => toggleActivityLevel(level)}
                  />
                ))}
              </View>
              {activityLevel.includes('Other') && (
                <TextInput
                  style={styles.input2}
                  value={otherActivity}
                  onChangeText={setOtherActivity}
                  placeholder="Please specify"
                />
              )}
            </View>

            <View style={styles.gridContainer}>
              <Text style={styles.label}>Activities of Interest</Text>
              <View style={styles.grid}>
                {[
                  'Snorkeling', 'Swimming', 'Hiking', 'Museums', 'Biking',
                  'Sightseeing', 'Shopping', 'Food/Drink', 'Cultural Activities',
                  'Water Sports', 'Camping', 'Other', 'Snow Sports'
                ].map((interest) => (
                  <CheckBox
                    key={interest}
                    title={interest}
                    checked={interestOfTrip.includes(interest)}
                    onPress={() => toggleInterestOfTrip(interest)}
                  />
                ))}
              </View>
              {interestOfTrip.includes('Other') && (
                <TextInput
                  style={styles.input2}
                  value={otherInterest}
                  onChangeText={setOtherInterest}
                  placeholder="Please specify"
                />
              )}
            </View>
          </View>
          <Link href="/Travel"  asChild>
<TouchableOpacity style={styles.button} >
        
          <Text style={styles.buttonText}>Create My Itinerary!</Text>
        
        </TouchableOpacity>
        </Link>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 5,
    paddingBottom: 100,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    width: 228,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  input2: {
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
  },
  gridContainer: {
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16,
    width: 180,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: Platform.OS === 'ios' ? 200 : 50,
    ...Platform.select({
      ios: {
        marginBottom: 16,
      },
    }),
  },
  button: {
    backgroundColor: '#ddfac8',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto',
  },
});

export default TravelForm;



