export const LOAD_RATES_SUCCESS = "LOAD_RATES_SUCCESS";
export const LOAD_RATES_ERROR = "LOAD_RATES_ERROR";
export const ADD_DROPDOWN_VALUE = "ADD_DROPDOWN_VALUE";
export const CHANGE_SELECT_VALUE = "CHANGE_SELECT_VALUE";

export const loadRatesSuccess = (rates) => ({
  type: LOAD_RATES_SUCCESS,
  payload: { rates },
});

export const loadRatesError = (error) => ({
  type: LOAD_RATES_ERROR,
  payload: { error },
});

export const DropdownOptions = (data) => {
  const option = {
    key: data.value,
    text: data.value,
    value: data.value,
  };
  return { type: ADD_DROPDOWN_VALUE, payload: option };
};

export const onChangeSelect = (data) => {
  return {
    type: CHANGE_SELECT_VALUE,
    payload: data,
  };
};
