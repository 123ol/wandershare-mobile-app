import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.profileContainer}>
      <Image source={require('../../assets/images/Image (17).png')} style={styles.profileImage} />
      <Text style={styles.profileName}>Alex Jones</Text>
    </View>
    <View style={styles.menuContainer}>
    <Link href="/SavedItineraries"  asChild>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Saved Itineraries</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      </Link>
      <Link href="/Uploaded"  asChild>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Uploaded Itineraries</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      </Link>
      <Link href="/Edit"  asChild>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Edit Account</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      </Link>
    
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>App Settings</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
  paddingTop: 50,
},
profileContainer: {
  alignItems: 'center',
  marginBottom: 30,
  marginTop: 50,
},
profileImage: {
  width: 100,
  height: 100,
  borderRadius: 50,
  marginBottom: 10,
},
profileName: {
  fontSize: 20,
  fontWeight: 'bold',
},
menuContainer: {
  width: '90%',
},
menuItem: {
  backgroundColor: '#e0f7fa',
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
menuText: {
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default Profile