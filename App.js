import React, {useState, useEffect} from 'react';
import {View, ScrollView,} from 'react-native';
import MenuBar from './src/components/MenuBar';
import Product from './src/components/Product';

const App = () => {
  const [pencarian, setPencarian] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Product pencarian={pencarian} setPencarian={setPencarian} />
      </ScrollView>
      <MenuBar />
    </View>
  );
};

export default App;
