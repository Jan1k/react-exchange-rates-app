import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import routeHistory from "route-history";

import ratesReducer from "reducers/rates";
import { IAppState } from "./models";

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  rates: ratesReducer,
});

export default rootReducer;
