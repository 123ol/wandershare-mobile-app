import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,Pressable,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
const ItineraryDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.top}>
       <Text style={styles.TopTitle}>Day 1</Text>

       <View style={styles.topImageContainer}>
        <Image
          source={require('../../assets/images/Image1A.jpeg')} // Adjust the path as needed
          style={styles.topimage}
        />
         <Text style={styles.imageTitle}>Alex Jones</Text>
      </View>
       </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Hotel Night 1: Helms Inn</Text>
        <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (16).png')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>

    <View style={styles.top}>
       <Text style={styles.TopTitle}>Day 2</Text>

       </View>

    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Crust Bakery</Text>
       
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (5).jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Cycle BC</Text>
      
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image1A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Red Fish Blue Fish</Text>
        
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (7).jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Hotel Night 2: Helms Inn</Text>
        <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (16).png')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
    
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>

    <View style={styles.top}>
       <Text style={styles.TopTitle}>Day 3</Text>

       
       </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Drive to Tofino</Text>
       
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image8A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Water Taxi</Text>
        
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image (9).jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Rhino Coffee House</Text>
       
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image10A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Hotel Night 3: Water's Edge Shoreside Suites Ucluelet</Text>
        <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image11A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
      </View>
    </View>
    <View style={styles.card}>
        <View style={styles.head}>
        <Text style={styles.cardTitle}>Ukee Poke</Text>
        </View>
   
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../assets/images/Image12A.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
      </View>
    
      
 
      
      <View style={styles.cardprofile}>
      <Text style={styles.cardDescription}>
      Arrive in Victoria and check in to the conveniant Helms Inn in the heart of Victoria. Super affordable, only cost me $100 per night for a famiily of 4 (1 room). Great little hotel very close to Beacon Hill Park and short walking distance to main resturants and attractions in city center.
      </Text>

     
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
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },

  topimage:{
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 50,
    marginHorizontal:10,
  },
  topImageContainer:{
    width: 140,
    height: 50,
    flexDirection:'row',
    alignItems:'center',
   
  },
  TopTitle:{
    fontSize:20,
    fontFamily: 'Roboto',
    fontWeight: "700",
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
    borderRadius: 10,
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
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: "700",
    lineHeight: 21,
    marginBottom:10,
    width: '70%',
  },
  cardDescription: {
    padding:'10',
    color: '#030303',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: "400",
    lineHeight: 16,
  },

  cardprofile:{
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
  head:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  button: {
    backgroundColor: '#ddfac8',
    padding:5,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: 100,
    height:35,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default ItineraryDetails;
