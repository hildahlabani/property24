import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "../action";

export const SaleReducer = (state = { houseOnSale: [] }, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { loading: true };
    case FETCH_HOUSE_SUCCESS:
      return { loading: false, houseOnSale: action.payload };
    case FETCH_HOUSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const RentReducer = (state = { houseOnRent: [] }, action) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { loading: true };
    case FETCH_HOUSE_SUCCESS:
      return { loading: false, houseOnSale: action.payload };
    case FETCH_HOUSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};