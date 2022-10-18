import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from './Reducers/ProductReducer';
import {homesReducer} from './Reducers/HomeReducer';
import {forgotPasswordReducer, userReducer} from './Reducers/UserReducer';

const Store = configureStore({
  reducer: {
    products: productsReducer,
    homes: homesReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
  },
});
export default Store;
