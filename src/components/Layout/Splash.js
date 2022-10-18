import {StyleSheet, Image, View, Dimensions} from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import React, {useState, useEffect} from 'react';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

export default function Splash() {
  const [data, setData] = useState();
  const getSet = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.27:8080/ikm/web/api/setting/',
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
    // <>
    //   {data &&
    //     data.map(item => {
    //       <>
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/splash/logo.png')}
          style={styles.img}
        />
      </View>
      <LottieView
        source={require('../../Assets/splash/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
    //       </>;
    //     })}
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 1 - 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    position: 'absolute',
    bottom: -150,
    left: 20,
  },
});
