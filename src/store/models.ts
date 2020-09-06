import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RouterState } from "connected-react-router";
import { IRatesState } from "reducers/rates";

export interface IAction<T> extends Action<string> {
  payload?: T;
}

export interface IAppState {
  router: RouterState;
  rates: IRatesState;
}

export type TAppActionThunk<TPayload, TReturn = void> = ThunkAction<
  TReturn,
  IAppState,
  unknown,
  IAction<TPayload>
>;

export type TAppDispatchThunk<TPayload> = ThunkDispatch<
  IAppState,
  unknown,
  IAction<TPayload>
>;
