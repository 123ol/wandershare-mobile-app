import { StyleSheet, SafeAreaView, View, ImageBackground, Image, Text, TouchableOpacity, TextInput, Alert, Modal,Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const LoginScreen = ({ onLogin }) => {

   
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeToggle = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../../assets/images/Image1.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={require('../../assets/images/Image.jpeg')}
                        />
                        <Text style={styles.title}>
                            Join this Travel Community!
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.input}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                keyboardType="default"
                                placeholder="Username"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                placeholder="Password"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                placeholder="Repeat password"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={repassword}
                                onChangeText={setRepassword}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                checked={rememberMe}
                                onPress={handleRememberMeToggle}
                                containerStyle={styles.checkbox}
                            />
                            <Text style={styles.checkboxLabel}>Remember me</Text>
                        </View>
                        <View style={styles.formAction}>
                            <TouchableOpacity onPress={() => onLogin(name, password, rememberMe)}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Sign up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textLabel}>Ready to start your journey?</Text>
                        </View>
                        </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const AppLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const loggedIn = await AsyncStorage.getItem('isLoggedIn');
                if (loggedIn !== null) {
                    setIsLoggedIn(JSON.parse(loggedIn));
                }
            } catch (error) {
                console.error("Failed to load login status", error);
            }
        };

        checkLoginStatus();
    }, []);

    const handleLogin = async (name, password, rememberMe) => {
        // Perform your login logic here
        if (name === 'test@example.com' && password === 'password') {
            try {
                if (rememberMe) {
                    await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                }
                setIsLoggedIn(true);
            } catch (error) {
                console.error("Failed to save login status", error);
            }
        } else {
            Alert.alert('Login Failed', 'Invalid username or password');
        }
    };

    if (!isLoggedIn) {
        return <LoginScreen onLogin={handleLogin} />;
    }

    return (
        <>
                <Tabs tabBar={(props) => <TabBar {...props} />}>

            
            <Tabs.Screen
                name="index"

                options={{
                    headerTitle: () => (
                        <Text style={styles.TabText}>Featured Itineraries</Text>
                    ),
                    }}
            />
         <Tabs.Screen
    name="explore"
    options={{
        headerTitle: () => (
            <Text style={styles.TabText}>Trip Filters</Text>
        ),
    }}
/>
            <Tabs.Screen
                name="Hero"
                options={{
                     headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                              <Text style={styles.TabText}>Get Started</Text>
                              <Image
            source={require('../../assets/images/Image.jpeg')} 
            style={{width:40, height:40, borderRadius: 10,}}
          />
                        </View>

                      
                    ),
                }}
            />

<Tabs.Screen
                name="Itineraries"
                options={{
                     headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                              <Text style={styles.TabsText }>Suggested Itineraries</Text>
                              <Link href="/explore"  asChild>
                              <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Change Filters</Text>
    </TouchableOpacity></Link>
                        </View>

                      
                    ),
                }}
            />
            <Tabs.Screen
                name="change"
                options={{
                     headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                        <Link href="/Itineraries"  asChild>
                     <TouchableOpacity  >
                  <AntDesign name="arrowleft" size={24} color="black" />
</TouchableOpacity></Link>
                  <Text style={{  color: '#030303',
fontSize: 16,
fontFamily: 'Roboto',
fontWeight: "700",
lineHeight: 28,
textAlign: 'left',} }>Vancouver Island Mountain Adventure</Text>
                
                  <TouchableOpacity   onPress={() => setModalVisible(true)}  >
                  <Entypo name="share" size={24} color="black" />
</TouchableOpacity>
            </View>

                      
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                               <Text style={styles.TabText}>Upload Your Itinerary</Text>
                      
                        </View>

                      
                    ),
                }}
            />
                 <Tabs.Screen
                name="Travel"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                               <Text style={styles.TabText}>Travel Input Form</Text>
                               <Link href="/create"  asChild>
                              <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
    </Link>
                        </View>

                      
                    ),
                }}
            />
              <Tabs.Screen
                name="ItineraryDetails"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"80%",alignItems: 'center',}}>
                               <Link href="/Details"  asChild>
                                 <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity></Link>
                               <Text style={styles.TabText}>Itinerary Details</Text>
                            
                         
                        </View>

                      
                    ),
                }}
            />

<Tabs.Screen
                name="SavedItineraries"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"90%",alignItems: 'center',}}>
                             <Link href="/profile"  asChild>
                                 <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity></Link>
                               <Text style={styles.TabText}>My Saved Itineraries</Text>
                            
                         
                        </View>

                      
                    ),
                }}
            />

<Tabs.Screen
                name="Uploaded"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"90%",alignItems: 'center',}}>
                                   <Link href="/profile"  asChild>
                                 <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity></Link>
                               <Text style={styles.TabText}>Uploaded Itineraries</Text>
                            
                         
                        </View>

                      
                    ),
                }}
            />

<Tabs.Screen
                name="Edit"
                options={{
                 
                    headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"80%",alignItems: 'center',}}>
                                <Link href="/profile"  asChild>
                                 <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity></Link>
                               <Text style={styles.TabText}>Edit Account</Text>
                            
                         
                        </View>

                      
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    headerTitle: () => (
                        <Text style={styles.TabText}>Account Settings</Text>
                    ),
                }}
            />
        <Tabs.Screen
                name="Details"
                options={{
                     headerTitle: () => (
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems: 'center',}}>
                                    <Link href="/Travel"  asChild>
                                 <TouchableOpacity  >
                              <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity></Link>
                              <Text style={{  color: '#030303',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: "700",
        lineHeight: 28,
        textAlign: 'left',} }>Vancouver Island Mountain Adventure</Text>
                            
                              <TouchableOpacity   onPress={() => setModalVisible(true)}  >
                              <Entypo name="share" size={24} color="black" />
    </TouchableOpacity>
                        </View>

                      
                    ),
                }}
            />

        </Tabs>



        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Share Itinerary</Text>
            <Pressable style={styles.buton} onPress={() => { /* Share via Messages */ }}>
                <View   style={{width:40, height:40, borderRadius: 10,  backgroundColor: '#ddfac8',  padding:5,}}> 
                    <Image
            source={require('../../assets/images/Icon sms.png')} 
          
            style={{width:30, height:30,}}
          />
          </View>
           
              <Text style={styles.textStyle}>Share via Messages</Text>
            </Pressable>
            <Pressable style={styles.buton} onPress={() => { /* Share on Facebook */ }}>
            <View   style={{width:40, height:40, borderRadius: 10,  backgroundColor: '#ddfac8',  padding:5,}}>
            <Image
             source={require('../../assets/images/Icon facebook.png')} 
            style={{width:30, height:30,}}
          /></View>
              <Text style={styles.textStyle}>Share on Facebook</Text>
            </Pressable>
            <Pressable style={styles.buton} onPress={() => { /* Share on Instagram */ }}>
                   <View   style={{width:40, height:40, borderRadius: 10,  backgroundColor: '#ddfac8',  padding:5,}}>
            <Image
             source={require('../../assets/images/Icon instagram.png')} 
          
            style={{width:30, height:30, }}
          />
          </View>
              <Text style={styles.textStyle}>Share on Instagram</Text>
            </Pressable>
            <View style={[ styles.close]}>

 <Pressable
              style={[ styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[ styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Share</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
        </>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        
    },
    container: {
        flexGrow: 1,
        paddingVertical: 24,
        paddingHorizontal: 0,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 36,
        borderRadius: 8,
    },
    title: {
        color: '#004aad',
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: "700",
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        padding: 0,
        margin: 0,
        borderColor:'#000',
        borderWidth: 2,
    },
    checkboxLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginLeft: 8,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    form: {
        paddingHorizontal: 24,
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    btn: {
        height: 40,
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddfac8',
    },
    btnText: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '700',
        textAlign: 'center',
        alignItems: 'center',
    },
    textLabel: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: "600",
        textAlign: 'center',
    },
    TabText:{
        color: '#030303',
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: "700",
        lineHeight: 28,
        textAlign: 'left',
    },
    TabsText:{
        color: '#030303',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: "700",
        lineHeight: 28,
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#ddfac8',
        padding:5,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        width: 120,
        height:40,
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
      },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    formFooterHighlight: {
        textDecorationLine: 'underline',
    },
    footerLink: {
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    shareButton: {
        backgroundColor: '#8BC34A',
        padding: 10,
        borderRadius: 5,
      },
      shareButtonText: {
        color: '#fff',
        fontSize: 24,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#e9f4f9',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buton: {
     flexDirection:"row",
     alignItems: 'center', 
width:220,
      marginBottom: 15,
    //   justifyContent:"space-between"
      },
      buttonClose: {
        backgroundColor: '#ddfac8',
        alignItems: 'center', 
        justifyContent:"center",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 5,
              width: 110,
              height:50,
              marginHorizontal:15,
              borderRadius: 5,
      },
      close:{
        flexDirection:"row",
        justifyContent:"center",
        width:150,
      },
      textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:15,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'l',
        width:"100%",
        fontSize: 24,
        color: 'black',
        fontWeight: "700",
  
      },
});

export default AppLayout;
