// App.js
import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const change = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.sectionTitle}>Day-by-Day Itinerary</Text>
            <View style={styles.headerLeft}>
              <Image
                source={require('../../assets/images/Image2.png')}
                style={styles.profileImage}
              />
              <Text style={styles.userName}>John Doe</Text>
            </View>
          </View>

          <View style={styles.itinerary}>
            <View style={styles.day}>
              <View style={styles.dayT}>
                <Text style={styles.dayTitle}>Day 1 {'\n'}Arrival</Text>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.day}>
              <View style={styles.dayT}>
                <Text style={styles.dayTitle}>Day 2</Text>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.daySummary}>Day Summary: Explore city of Victoria on bikes.</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayT}>
                <Text style={styles.dayTitle}>Day 3</Text>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.daySummary}>Day Summary: Visit Vancouver's Beach Tours, local farmers' market, and have lunch at the best local bistros.</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Trip Description</Text>
          <View style={styles.tripDescription}>
            <Text style={styles.tripDescriptionText}>Destination: Vancouver Island, BC</Text>
            <Text>Duration: 3 Nights{'\n'}{'\n'}</Text>
            <Text>Key Highlights: Tofino, Crystal Blue Lakes, Explore other Islands, Victoria</Text>
          </View>

          <View style={styles.comments}>
            <Text style={styles.sectionTitle}>Comments</Text>
            <View style={styles.comment}>
              <View style={styles.commentA}>
                <Image
                  source={require('../../assets/images/Image2.png')}
                  style={styles.commentImage}
                />
                <Text style={styles.commentRating}><AntDesign name="heart" size={24} color="black" />Like </Text>
              </View>
              <View style={styles.commentText}>
                <Text style={styles.commentUser}>User123</Text>
                <Text>Had an amazing time in Vancouver. Bikes rental is the best way to explore!</Text>
              </View>
              <View style={styles.commentA}>
                <Text style={styles.commentRating}>5 <AntDesign name="star" size={24} color="black" /></Text>
                <Text style={styles.commentRating}><Entypo style={{ marginHorizontal: 10 }} name="reply" size={24} color="black" />Reply</Text>
              </View>
            </View>

            <View style={styles.comment}>
              <View style={styles.commentA}>
                <Image
                  source={require('../../assets/images/Image2.png')}
                  style={styles.commentImage}
                />
                <Text style={styles.commentRating}><AntDesign name="heart" size={24} color="black" />Like </Text>
              </View>
              <View style={styles.commentText}>
                <Text style={styles.commentUser}>User123</Text>
                <Text>Had an amazing time in Vancouver. Bikes rental is the best way to explore!</Text>
              </View>
              <View style={styles.commentA}>
                <Text style={styles.commentRating}>5 <AntDesign name="star" size={24} color="black" /></Text>
                <Text style={styles.commentRating}><Entypo style={{ marginHorizontal: 10 }} name="reply" size={24} color="black" />Reply</Text>
              </View>
            </View>

            <View style={styles.addComment}>
              <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonT}>Post Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    paddingBottom: 150, // Ensure there's space at the bottom for the keyboard
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  userName: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  itinerary: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  tripDescriptionText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  day: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    height: 120,
  },
  dayT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 3,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 34,
  },
  daySummary: {
    fontSize: 14,
    marginBottom: 5,
  },
  tripDescription: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    height: 140,
  },
  btn: {
    width: 105,
    height: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: '#ddfac8',
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Roboto',
    fontWeight: "400",
    textAlign: 'center',
  },
  comments: {
    marginBottom: 20,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    height: 140,
  },
  commentImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  commentText: {
    flex: 1,
    marginLeft: 10,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentRating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentA: {
    flexDirection: 'column',
    justifyContent: "space-between",
    height: 100,
  },
  addComment: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddfac8',
    borderRadius: 10,
  },
  input: {
    // marginRight: 10,
    width: 320,
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    width: 320,
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonT: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default change;