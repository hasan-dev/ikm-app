import {View, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../components/Home/Banner';
import Header from '../components/Layout/Header';
import HomePage from '../components/Home/HomePage';
import {getHome, getProduct} from '../../Redux/Actions/ProductAction';

export default function HomeScreen({navigation}) {
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
        {/* <Setting /> */}
        <HomePage products={products} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
