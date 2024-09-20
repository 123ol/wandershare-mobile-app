import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,Pressable } from 'react-native';
import { Link } from 'expo-router';
const Itineraries = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image1A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
      <Pressable><Link href="/change"  asChild>
      <Text style={styles.cardTitle}>Vancouver Island Mountain Adventure</Text></Link></Pressable>
 
      <View style={styles.cardprofile}>
      <View style={styles.cardpr}>
      <Image
          source={require('../../assets/images/Image2.png')} // Adjust the path as needed
          style={styles.imagesmall}
        />

<Text style={styles.profileText}>
John Doe
      </Text>
      </View>

      <View style={styles.cardpr}>
        <Text style={styles.profileRate}>
5
      </Text>
      <Image
          source={require('../../assets/images/star.png')} // Adjust the path as needed
          style={styles.imagesmall1}
        />


      </View>
      </View>
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      -3 Night Stay -Budget - Adventurous Hiking, Biking, Swimming
      </Text>

      <Image
          source={require('../../assets/images/heart.png')} // Adjust the path as needed
          style={styles.imagesmall2}
        />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/ImageA.png')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
      <Text style={styles.cardTitle}>Maui</Text>
      <View style={styles.cardprofile}>
      <View style={styles.cardpr}>
      <Image
          source={require('../../assets/images/Image (11).png')} // Adjust the path as needed
          style={styles.imagesmall}
        />

<Text style={styles.profileText}>
Jane Smith
      </Text>
      </View>

      <View style={styles.cardpr}>
        <Text style={styles.profileRate}>
4.7
      </Text>
      <Image
          source={require('../../assets/images/star.png')} // Adjust the path as needed
          style={styles.imagesmall1}
        />


      </View>
      </View>
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      2 week Stay -Luxury -Relaxing Beach, Swimming, Eating, Shopping
      </Text>

      <Image
          source={require('../../assets/images/heart.png')} // Adjust the path as needed
          style={styles.imagesmall2}
        />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (3).png')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
      <Text style={styles.cardTitle}>New York City</Text>
      <View style={styles.cardprofile}>
      <View style={styles.cardpr}>
      <Image
          source={require('../../assets/images/Image (12).png')} // Adjust the path as needed
          style={styles.imagesmall}
        />

<Text style={styles.profileText}>
Emily Johnson
      </Text>
      </View>

      <View style={styles.cardpr}>
        <Text style={styles.profileRate}>
4.5
      </Text>
      <Image
          source={require('../../assets/images/star.png')} // Adjust the path as needed
          style={styles.imagesmall1}
        />


      </View>
      </View>
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      -3 Night Stay -Mid-Range -Educational -Active -Shopping, walking, museums, sight-seeing
      </Text>

      <Image
          source={require('../../assets/images/heart.png')} // Adjust the path as needed
          style={styles.imagesmall2}
        />
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (4).png')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
      <Text style={styles.cardTitle}>Finger Lakes Road Trip</Text>
      <View style={styles.cardprofile}>
      <View style={styles.cardpr}>
      <Image
          source={require('../../assets/images/Image2.png')} // Adjust the path as needed
          style={styles.imagesmall}
        />

<Text style={styles.profileText}>
Michael Brown
      </Text>
      </View>

      <View style={styles.cardpr}>
        <Text style={styles.profileRate}>
5
      </Text>
      <Image
          source={require('../../assets/images/star.png')} // Adjust the path as needed
          style={styles.imagesmall1}
        />


      </View>
      </View>
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      -5 Night Stay -Luxury -Relaxing -Active -Eating, Wine-Tasting, Biking, Hiking, Swimming, Boating
      </Text>

      <Image
          source={require('../../assets/images/heart.png')} // Adjust the path as needed
          style={styles.imagesmall2}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingBottom: 80,
  },
  profileText:{
    fontWeight: "500",
  },
  card: {
    flexDirection: 'column',
    maxHeight: 370,
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: 'rgba(0, 0, 0, 0.08)', // Shadow for iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 15,
  },

  profileRate:{
    fontWeight: "500",
    fontSize:18,
  },
  cardImageContainer: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: 'rgb(165, 165, 165)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imagesmall:{
    width: 40,
    height: 40,
    borderRadius: 10,
    resizeMode: 'cover',
    marginHorizontal: 7,
  },
  imagesmall1:{
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  imagesmall2:{
    width: 43,
    height: 40,
    resizeMode: 'cover',
 
  },
  cardTitle: {
    color: '#030303',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: "700",
    lineHeight: 21,
    marginBottom:10,
  },
  cardDescription: {
    color: '#030303',
    fontSize: 14,
    width:"75%",
    fontFamily: 'Roboto',
    fontWeight: "400",
    lineHeight: 16,
  },

  cardprofile:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  cardpr:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    marginHorizontal: 10, // Half of the desired gap on each side (20px gap)
  },
});

export default Itineraries;
