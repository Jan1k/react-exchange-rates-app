import { loadRatesSuccess, loadRatesError } from "../../actions/rates";
import { getWeekBeforeNow, getCurrentDate } from "../../utils/date";

const API_URL = "https://www.nbrb.by/api";

export const loadRates = (rateID: number) => {
  return (dispatch) => {
    return fetch(
      `${API_URL}/ExRates/Rates/Dynamics/${rateID}?startdate=${getWeekBeforeNow()}&enddate=${getCurrentDate()}`
    )
      .then((response) => Promise.all([response, response.json()]))
      .then(([_, data]) => {
        dispatch(loadRatesSuccess(data));
      })
      .catch((error) => dispatch(loadRatesError(error)));
  };
};
