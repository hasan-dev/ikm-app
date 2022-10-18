import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
// import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

var {width} = Dimensions.get('window');

const Header = ({navigation}) => {
  const [data, setData] = useState();
  const getSet = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.25:8080/ikm/web/api/setting/',
        {
          // params:{
          // },
        },
      );
      // console.log(response);
      setData(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSet();
  }, []);

  return (
    <>
      {data &&
        data.map(item => {
          return (
            <>
              <View style={styles.headerMain}>
                <View style={styles.headerFlex}>
                  <Image
                    source={{
                      uri:
                        'http://192.168.1.25:8080/ikm/web/uploads/setting/' +
                        item.logo,
                    }}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 70,
                      borderColor: '#FFFFFF',
                      borderWidth: 2,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#212121',
                      }}>
                      {item.nama_web}
                    </Text>
                    <Text style={{color: '#212121'}}>{item.judul_web}</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu-outline" size={40} hei color="#333" />
                  </TouchableOpacity>
                  {/* <TextInput
          placeholder="Search..."
          placeholderTextColor="#333"
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Icon
            name="search-outline"
            size={30}
            color="#333"
            style={styles.searchIcon}
          />
        </TouchableOpacity> */}
                </View>
              </View>
            </>
          );
        })}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 3 - 45,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: -15,
    right: 15,
  },
});
