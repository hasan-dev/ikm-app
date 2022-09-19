import React from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const MenuBar = () => {
  return (
    <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 3,
          paddingTop: 10,
          paddingBottom: 15,
        }}>
        <TouchableOpacity 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="home" size={20} color="#34354E" />
          <Text style={{color: "#34354E"}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="cart" size={20} color="#34354E" />
          <Text style={{color: "#34354E"}}>product</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="person" size={20} color="#34354E" />
          <Text style={{color: "#34354E"}}>Profile</Text>
        </TouchableOpacity>
      </View>
  );
}

export default MenuBar;