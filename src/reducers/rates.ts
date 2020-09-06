import {
  LOAD_RATES_ERROR,
  LOAD_RATES_SUCCESS,
  ADD_DROPDOWN_VALUE,
  CHANGE_SELECT_VALUE,
} from "actions/rates";
import { RateOption } from "../components/Rates/Model";

const RATE_OPTIONS = [
  {
    key: 145,
    text: "USD",
    value: "USD",
  },
  {
    key: 292,
    text: "EUR",
    value: "EUR",
  },
  {
    key: 298,
    text: "RUB",
    value: "RUB",
  },
];

const initialState = {
  rates: [],
  error: null,
  options: RATE_OPTIONS,
  selectedValue: RATE_OPTIONS[0],
};

export interface IRatesState {
  rates: any[];
  options: RateOption[];
  selectedValue: RateOption;
  error: null;
}

export default (state: IRatesState = initialState, action) => {
  switch (action.type) {
    case LOAD_RATES_SUCCESS:
      return {
        ...state,
        rates: action.payload.rates,
      };
    case LOAD_RATES_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_DROPDOWN_VALUE:
      return { ...state, options: action.payload.data };
    case CHANGE_SELECT_VALUE:
      return {
        ...state,
        selectedValue: action.payload,
      };
    default:
      return state;
  }
};
