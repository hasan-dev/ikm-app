import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useState} from 'react';
import {useEffect} from 'react';

var {width} = Dimensions.get('window');

export default function Banner() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      // 'https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38886.jpg?w=740&t=st=1649620293~exp=1649620893~hmac=5c9107ea2ea3ce12882a18e099701bde00f1786252d93ed6bfd1f73eb1404733',
      'https://ikmbatu.com/web/uploads/setting/cD9AOWkDXKKAV-0smjPS5w4lFzJ0ATQF.jpeg',
      'https://seru.co.id/wp-content/uploads/2022/01/Gelar-Produk-IKM-Batu-dalam-sebuah-pameran-produk.jpg',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{
              height: width / 2,
            }}>
            {BannerData.map(item => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={{uri: item}}
                  style={styles.banner}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
