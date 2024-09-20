import { View, Text, Image, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';
import React from 'react';

const Hero = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Discover and {'\n'}Share New {'\n'}Travel {'\n'}Destination{'\n'}With Ease
        </Text>
        <View style={styles.headbtns}>
          <TouchableOpacity style={styles.headbtn}>
            <Text style={styles.btntext}>Share now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headbtn}>
            <Text style={styles.btntext}>Discover Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headimg}>
          <Image
            source={require('../../assets/images/Image.jpeg')} // Adjust the path as needed
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.texticon}>Wander<Text style={{color:"#004aad"}}>Share</Text></Text>
            <Image
              source={require('../../assets/images//Icon ios share.png')} // Adjust the path as needed
              style={styles.images}
            />
          </View>
        </View>

        <View style={styles.card}>
      <Image
        source={require('../../assets/images/Image (10).png')} // Replace with your image path
        style={styles.cardimage}
      />
      <Text style={styles.title}>Plan The Perfect Getaway Hassle-{'\n'}Free</Text>
      <Text style={styles.subtitle}>Discover your next dream destination.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start exploring</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.section}>
        <Text style={styles.headerText}>Your Journey Starts Here</Text>
        <Text style={styles.descriptionText}>
        Embark on a seamless travel experience by viewing travel itineraries from other travelers that have been to your destination before! Why spend all the time researching a destination, when you can consult an itinerary made by a fellow traveler like you!
        </Text>
        <TouchableOpacity style={styles.but}>
          <Text style={styles.buttonText}>Begin now</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/Image (13).png')} // Replace with your image path
          style={styles.sectionimage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Share Your Travel Experiences</Text>
        <Text style={styles.descriptionText}>
        Share your itinerary and trip highlights with the travel community!
        </Text>
        <TouchableOpacity style={[styles.button, { marginTop: 50 }]}>
          <Text style={styles.buttonText}>Share an Itinerary</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    paddingBottom: 50,
  },
  head: {
  
   
  },
  headText: {
    color: '#030303',
    fontSize: 43,
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 55,
    marginTop: 30,
    marginBottom: 50,
  },
  headbtns: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headbtn: {
    width: 335,
    height: 46,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#e9f4f9',
    marginBottom: 10,
      // Shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5, // Adds shadow for Android
  },
  btntext: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 22,
    textAlign: 'center',
  },
  headimg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Add margin if needed to separate from buttons
  },
  image: {
    width: 256,
    height: 276,
    borderRadius: 8,
    marginBottom: 30,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    marginTop: 10, // Add margin if needed to separate from image
    marginBottom: 50,
  },
  texticon: {
    color: '#000',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '600',
    lineHeight: 42,
  },
  images: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
  },

  card: {
    backgroundColor: '#ddfac8',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginBottom:50,
  },
  cardimage: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: '#030303',
    fontSize: 35,
    fontFamily: 'Roboto',
    fontWeight: '600',
    lineHeight: 46,
    marginBottom: 10,
  },
  subtitle: {
    color: '#030303',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
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

  section: {
    marginBottom: 50,
    width: '100%',
  },
  headerText: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  descriptionText: {
    color: '#000',
    fontSize: 16,
    marginBottom: 20,
      lineHeight: 21,
  },
  but: {
    backgroundColor: '#ddfac8', // Button background color
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:46,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adds shadow for Android
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight:22,
    textAlign: 'center',
  },
  sectionimage: {
    width: 260,
    height: 260,
    margin:40,
    marginBottom: 20,
    marginTop:50,
  },
});

export default Hero;
