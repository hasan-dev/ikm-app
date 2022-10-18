import axios from 'axios';

export const getProduct = () => async dispatch => {
  try {
    dispatch({
      type: 'allProductRequest',
    });
    const {data} = await axios.get(
      'http://192.168.1.25:8080/ikm/web/api/produk/list-produk',
    );
    dispatch({
      type: 'allProductSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'allProductFail',
      payload: error.response.data.message,
    });
  }
};
