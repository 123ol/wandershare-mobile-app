import React from 'react';
import { AntDesign, Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { Image } from 'react-native';


export const icons = {
    index: (props) => <Entypo name="home" size={25} {...props} />,
    explore: (props) => <FontAwesome name="search" size={25} {...props} />,
    Hero: (props) => <Image source={require('./images/Image (8).png')} style={{ width: 50, height: 40 }} {...props} />,
    create: (props) => <Entypo name="plus" size={25} {...props} />,
    profile: (props) => <FontAwesome name="user" size={25} {...props} />,
  
};
