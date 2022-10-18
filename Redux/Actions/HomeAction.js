import axios from 'axios';

export const getHome = () => async dispatch => {
  try {
    dispatch({
      type: 'allHomeRequest',
    });
    const {data} = await axios.get(
      'http://localhost:8080/ikm/web/api/setting/indexs',
    );
    dispatch({
      type: 'allHomeSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'allHomeFail',
      payload: error.response.data.message,
    });
  }
};
