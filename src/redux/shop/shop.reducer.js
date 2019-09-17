// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITAL_STATE = {
  collections: null,
  isFecthing: false,
  errorMessage: undefined
}

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFecthing: true
      }
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
        ...state,
        isFecthing: false,
        collections: action.payload
      };
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
          ...state,
          isFecthing: false,
          errorMessage: action.payload
        }
    default:
      return state;
  }
}

export default shopReducer;