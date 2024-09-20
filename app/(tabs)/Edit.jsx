import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Edit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/Image (17).png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Alex Jones</Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.item}>
            <Text style={styles.label}>Name: Alex Jones</Text>
            <TextInput style={styles.input} placeholder="Change Name" placeholderTextColor="#000" />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Email: Alex_Jones@gmail.com</Text>
            <TextInput style={styles.input} placeholder="Change Email" placeholderTextColor="#000" />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Password: AJ123_45!</Text>
            <TextInput style={styles.input} placeholder="Change Password" placeholderTextColor="#000" secureTextEntry />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    flex: 1,
   
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
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
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  item: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#ddfac8',
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Edit;
