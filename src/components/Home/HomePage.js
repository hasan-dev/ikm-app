import axios from 'axios';
import {produceWithPatches} from 'immer';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {Icon} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'react-native-svg';
// import {image} from '../../../src/Assets/image';

var {width} = Dimensions.get('window');
import ProductCard from '../Home/ProductCard';
import {color} from 'react-native-reanimated';
import ProductCard2 from './ProductCard2';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {getProduct} from '../../../Redux/Actions/ProductAction';

export default function HomePage({homes, home, navigation}) {
  const [click, setClick] = useState(false);

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

  const [kategori, setKategori] = useState([]);
  const getKategori = async () => {
    try {
      let linkkategoriproduk =
        'http://192.168.1.25:8080/ikm/web/api/kategori-produk';
      let res = await fetch(linkkategoriproduk, {
        method: 'GET',
        headers: {
          // accept: 'application/json',
          'content-type': 'application/json',
        },
      });
      res = await res.json();
      // console.log(res);
      // console.log(res.data.deksripsi_lengkap);
      setKategori(res);
    } catch (error) {
      alert(error.message);
    }
  };

  const [products, setProduct] = useState([]);
  const getProduct = async (id_kat = null) => {
    try {
      let linkproduk =
        'http://192.168.1.25:8080/ikm/web/api/produk/list-produk';
      if (id_kat !== null) {
        linkproduk += '?id_kat=' + id_kat;
      }
      let res = await fetch(linkproduk, {
        method: 'GET',
        headers: {
          // accept: 'application/json',
          'content-type': 'application/json',
        },
      });
      res = await res.json();
      // console.log(res);
      // console.log(res.data.deksripsi_lengkap);
      setProduct(res.products);
    } catch (error) {
      alert(error.message);
    }
  };

  const funsiRefreshProduk = async id => {
    getProduct(id);
  };

  useEffect(() => {
    getSet();
    getKategori();
    getProduct();
  }, []);

  return (
    <>
      {data &&
        data.map(item => {
          const banner = item.banner;
          const urll =
            'http://192.168.1.25:8080/ikm/web/uploads/setting/' + banner;
          return (
            <>
              <View>
                <>
                  {/* {console.log(data)} */}
                  <View style={{flexDirection: 'row', marginTop: -10}}>
                    <Image
                      source={{uri: urll}}
                      style={{
                        width: 140,
                        height: 70,
                        borderRadius: 7,
                        borderColor: '#FFFFFF',
                        marginTop: 40,
                        marginLeft: 17,
                      }}
                    />
                    <View
                      style={{
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        flex: 1,
                        marginEnd: 170,
                        marginTop: 35,
                      }}>
                      <TouchableWithoutFeedback
                        style={{
                          backgroundColor: '#cb1d08',
                          borderRadius: 7,
                          size: 10,
                        }}
                        onPress={() =>
                          navigation.navigate('About', {about: item})
                        }>
                        <Text
                          style={{
                            color: 'white',
                            padding: 10,
                            fontSize: 8,
                            fontWeight: 'bold',
                          }}>
                          Learn More
                        </Text>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  {/* <Text
                    style={{
                      fontSize: 18,
                      marginTop: 5,
                      fontWeight: 'bold',
                      color: '#333',
                      marginLeft: 20,
                    }}>
                    Pendaftaran Merek Dan Unit Usaha
                  </Text> */}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#333',
                      marginTop: 5,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 5,
                    }}>
                    Daftarkan Merek antar unit usaha UKM anda untuk mempermudah
                    promosi produk anda
                  </Text>
                  <View style={{borderColor: 'red'}}>
                    <View style={{marginTop: 0, marginBottom: 10}}>
                      <Text
                        numberOfLines={2}
                        style={{
                          textAlign: 'center',
                          color: '#cb1d08',
                        }}>
                        _____________________________________________________
                      </Text>
                    </View>
                  </View>
                </>
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#333',
                      textAlign: 'center',
                      marginBottom: 7,
                      marginTop: 3,
                    }}>
                    Best Selling
                  </Text>
                  {/* <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        paddingRight: 100,
                        paddingTop: 10,
                      }}>
                      Kategori
                    </Text>
                    <TextInput
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
                  {/* <TextInput
                      value={props.pencarian}
                      onChangeText={text => props.setPencarian(text)}
                      placeholder="cari Produk"
                      style={{
                        backgroundColor: '#fff',
                        elevation: 3,
                        paddingLeft: 10,
                        borderRadius: 5,
                        flex: 1,
                        height: 40,
                      }}
                    /> */}
                  {/* <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: 20,
                        borderRadius: 5,
                        marginLeft: 10,
                        elevation: 3,
                        height: 40,
                      }}>
                      <Icon name="search" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <FlatList
                      data={kategori}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          key={item.id}
                          onPress={() => funsiRefreshProduk(item.id)}
                          style={{
                            paddingVertical: 10,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            backgroundColor: '#ffff',
                            borderRadius: 25,
                            elevation: 3,
                            marginBottom: 10,
                            marginTop: 20,
                          }}>
                          <Icon
                            name={item.icon.replace('fa-', '')}
                            size={30}
                            color="pink"
                          />
                          <Text style={{color: '#34354E'}}>{item.nama}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View> */}
                  <View style={styles.productCard}>
                    {products &&
                      products.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          navigation={navigation}
                        />
                      ))}
                  </View>
                  <View style={{marginTop: 150}}></View>
                </View>
              </View>
            </>
          );
        })}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: width,
    // padding: 10,
    // marginVertical: 10,
    // marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
