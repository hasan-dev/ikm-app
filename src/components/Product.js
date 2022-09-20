import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';

const Header = props => {
  const [sidebar, setSidebar] = useState([
    {
      judul: 'UMKM Kerajinan Kota Batu',
      deskripsi: 'Telusuri Keunikan Kerajinan Berbahan Kayu Dari Kota Batu',
      image: require('../image/foto1.jpg'),
    },
  ]);
  const [kategori, setKategori] = useState([
    {namaKategori: 'Makanan' },
    {namaKategori: 'Minuman'},
    {namaKategori: 'Rumah Tangga'},
    {namaKategori: 'Baju'},
    {namaKategori: 'Sekolah'},
    {namaKategori: 'Kendaraan'},
  ]);
  return (
    <View>
      <TouchableOpacity style={{paddingTop: 10, paddingLeft: 10, borderRadius: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../image/logo-ikm.png')}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 25,
                    borderWidth: 2,
                  }}
                />
                <View
                  style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    IKM
                  </Text>
                  <Text style={{color: 'black'}}>Jawa Timur</Text>
                </View>
              </View>
        </TouchableOpacity>
        <View>
          <FlatList
            data={sidebar}
            style={{marginTop: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                  paddingBottom: 20,
                }}>
                <View
                  style={{
                    height: 200,
                    marginBottom: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      flex: 1,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                    imageStyle={{
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      marginHorizontal: 10,
                      marginTop: 5,
                      color:'#34354E'
                    }}>
                    {item.judul}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 10,
                      color:'#34354E'
                    }}>
                    {item.deskripsi}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Kategori</Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  marginRight: 10,
                  paddingHorizontal: 10,
                  backgroundColor: '#ffff',
                  borderRadius: 25,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <Text style={{color: "#34354E"}}>{item.namaKategori}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
    </View>
  );
};

export default Header;
