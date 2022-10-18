import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Button,
  Linking,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import RenderHTML from 'react-native-render-html';
import ProductCard from './ProductCard';
var {width} = Dimensions.get('window');

const ProductCard2 = props => {
  const {navigation} = props;

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
      console.log(res);
      // console.log(res.data.deksripsi_lengkap);
      setKategori(res);
    } catch (error) {
      alert(error.message);
    }
  };

  const funsiRefreshProduk = async id => {
    getData(id);
  };

  const [products, setData] = useState([]);
  const getData = async (id_kat = null) => {
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
      console.log(res);
      // console.log(res.data.deksripsi_lengkap);
      setData(res.products);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getKategori();
    getData();
  }, []);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
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
        />
        <TouchableOpacity
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
              onPress={() => funsiRefreshProduk(item.id)}
              style={{
                paddingVertical: 10,
                marginRight: 10,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderRadius: 25,
                elevation: 3,
                marginBottom: 10,
                marginTop: 20,
              }}>
              <Icon
                name={item.icon.replace('fa-', '')}
                size={30}
                color="pink"
                style={{justifyContent: 'center'}}
              />
              <Text style={{color: '#34354E'}}>{item.nama}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 3,
          paddingTop: 10,
          paddingBottom: 15,
        }}>
        <>
          <SafeAreaView>
            <ScrollView>
              {products &&
                products.map((item, i) => {
                  const name = item.foto_banner;
                  const urll =
                    'http://192.168.1.25/ikm/web/uploads/banner_produk/' + name;
                  return (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 10,
                          marginHorizontal: 5,
                          paddingLeft: 7,
                        }}>
                        <Image
                          style={{width: 100, height: 100}}
                          source={{
                            uri:
                              'http://192.168.1.25:8080/ikm/web/uploads/banner_produk/' +
                              item.foto_banner,
                          }}
                        />
                        {console.log(urll)}
                        <View style={{justifyContent: 'space-between'}}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: 'black',
                              paddingLeft: 10,
                            }}>
                            {item.nama}
                          </Text>
                          <View style={{paddingTop: 10, marginLeft: 10}}>
                            <RenderHTML
                              style={{
                                color: '#555',
                                fontSize: 15,
                                fontWeight: '500',
                                lineHeight: 20,
                                paddingTop: 10,
                                marginLeft: 30,
                              }}
                              source={{
                                html: item.deskripsi_singkat,
                              }}
                            />
                          </View>
                          {/* <Text style={{color: 'black', paddingLeft: 10}}>
                            {item.deskripsi_singkat}
                          </Text> */}
                          <Text style={{color: 'black', paddingLeft: 10}}>
                            {item.harga}
                          </Text>
                        </View>
                      </View>
                    </>
                  );
                })}
            </ScrollView>
          </SafeAreaView>
        </>
      </View>
    </View>
  );
};
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

export default ProductCard2;
