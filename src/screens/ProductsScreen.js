import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import React from 'react';
// import Header from '../components/Layout/Header';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import Header from '../components/Layout/Header';
import {getProduct} from '../../Redux/Actions/ProductAction';
import Loader from '../components/Layout/Loader';
import ProductCard from '../components/Home/ProductCard';
import ProductCard2 from '../components/Home/ProductCard2';
// import {useSelector} from 'react-redux';

export default function ProductsScreen({navigation}) {
  const dispatch = useDispatch();
  const {products, error} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />
        <HomeProduct products={products} navigation={navigation} />
      </ScrollView>
    </View>
  );
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Text>ProductsScreen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
