import axios from "axios";
import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "../action";
export const OnSaleFetch = () => async (dispatch) => {
  const production_url = "http://127.0.0.1:5000/house/sale";
  const dev_url = "/house/sale";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const locationSearchFilter = (location) => async (dispatch) => {
  const production_url = `http://127.0.0.1:5000/house/location-filter/${location}`;
  const dev_url = `/house/location-filter/${location}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const roomSearchFilter = (roomNO) => async (dispatch) => {
  const production_url = `http://127.0.0.1:5000/house/room-filter/${roomNO}`;
  const dev_url = `/house/room-filter/${roomNO}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};