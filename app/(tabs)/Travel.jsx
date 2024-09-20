import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
export default function HomeScreen() {
    const [step, setStep] = useState(1);
    const [days, setDays] = useState([
      {
        hotel: '',
        hotelDescription: '',
        attraction: '',
        attractionDescription: '',
        restaurant: '',
        restaurantDescription: '',
        hotelImage: null,
        attractionImage: null,
        restaurantImage: null,
      },
    ]);
  
    const handleImagePick = async (type) => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        const newDays = [...days];
        newDays[step - 1][type] = result.assets[0].uri;
        setDays(newDays);
      }
    };
  
    const handleRemoveImage = (type) => {
      const newDays = [...days];
      newDays[step - 1][type] = null;
      setDays(newDays);
    };
  
    const handleInputChange = (type, value) => {
      const newDays = [...days];
      newDays[step - 1][type] = value;
      setDays(newDays);
    };
  
    const addNewDay = () => {
      setDays([
        ...days,
        {
          hotel: '',
          hotelDescription: '',
          attraction: '',
          attractionDescription: '',
          restaurant: '',
          restaurantDescription: '',
          hotelImage: null,
          attractionImage: null,
          restaurantImage: null,
        },
      ]);
      setStep(step + 1);
    };
  
    const goBack = () => {
        if (step > 1) {
          setStep(step - 1);
        }
      };
    
    const renderForm = () => (
      <View style={styles.dayContainer}>

        <Text>Hotel:{'\n'}</Text>
       
        <TextInput
          style={styles.input}
          placeholder="Hotel Name"
          value={days[step - 1].hotel}
          onChangeText={(text) => handleInputChange('hotel', text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Describe your experience..."
          value={days[step - 1].hotelDescription}
          onChangeText={(text) => handleInputChange('hotelDescription', text)}
          multiline
          placeholderTextColor="#888"
        />
        {days[step - 1].hotelImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: days[step - 1].hotelImage }} style={styles.image} />
            <TouchableOpacity style={styles.cancelButton} onPress={() => handleRemoveImage('hotelImage')}>
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
  
        <TouchableOpacity style={styles.button} onPress={() => handleImagePick('hotelImage')}>
          <Text style={styles.buttonText}>
            <Entypo name="upload-to-cloud" size={24} color="black" /> Upload Picture
          </Text>
        </TouchableOpacity>
  
        <Text>Attractions:{'\n'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Attraction Name"
          value={days[step - 1].attraction}
          onChangeText={(text) => handleInputChange('attraction', text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Describe your experience..."
          value={days[step - 1].attractionDescription}
          onChangeText={(text) => handleInputChange('attractionDescription', text)}
          multiline
          placeholderTextColor="#888"
        />
        {days[step - 1].attractionImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: days[step - 1].attractionImage }} style={styles.image} />
            <TouchableOpacity style={styles.cancelButton} onPress={() => handleRemoveImage('attractionImage')}>
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
  
        <TouchableOpacity style={styles.button} onPress={() => handleImagePick('attractionImage')}>
          <Text style={styles.buttonText}>
            <Entypo name="upload-to-cloud" size={24} color="black" /> Upload Picture
          </Text>
        </TouchableOpacity>
  
        <Text>Restaurant:{'\n'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Restaurant Name"
          value={days[step - 1].restaurant}
          onChangeText={(text) => handleInputChange('restaurant', text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Describe your experience..."
          value={days[step - 1].restaurantDescription}
          onChangeText={(text) => handleInputChange('restaurantDescription', text)}
          multiline
          placeholderTextColor="#888"
        />
        {days[step - 1].restaurantImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: days[step - 1].restaurantImage }} style={styles.image} />
            <TouchableOpacity style={styles.cancelButton} onPress={() => handleRemoveImage('restaurantImage')}>
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
  
        <TouchableOpacity style={styles.button} onPress={() => handleImagePick('restaurantImage')}>
          <Text style={styles.buttonText}>
            <Entypo name="upload-to-cloud" size={24} color="black" /> Upload Picture
          </Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.header}>Day {step}</Text>
          {step > 1 && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.header}>Back</Text>
        </TouchableOpacity>
      )}
         
          </View>
       
          {renderForm()}
  
          {step < 3 ? (
            <TouchableOpacity style={styles.addButton} onPress={addNewDay}>
              <Text style={styles.addButtonText}>Add New Day</Text>
            </TouchableOpacity>
          ) : (

            
            <Link href="/Details"  asChild>
            <TouchableOpacity
              style={styles.addButton}
            
            >
              <Text style={styles.addButtonText}>View Itinerary!</Text>
            </TouchableOpacity>
            </Link>
          )}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 15,
    marginBottom: 100,
  },
  dayContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e9f4f9',
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    width: "100%",
    marginBottom: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Adds shadow for Android
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  cancelButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ddfac8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
