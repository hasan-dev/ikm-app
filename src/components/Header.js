import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <Icon name="basket-outline" style={{fontSize:80}} color="#6495ED">
          <Text style={{color: '#6495ED',fontSize:40}}>Pasar</Text>
          <Text style={{color: '#6495ED',fontSize:40}}>Batu</Text>
          </Icon>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={props.pencarian}
          onChangeText = {text => props.setPencarian(text)} color="black"
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0082F7',
            marginTop: 20,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginLeft: 10,
            elevation: 3,
          }}>
          <Icon name="search" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
