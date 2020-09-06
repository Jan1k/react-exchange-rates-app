import { connect, ConnectedProps } from "react-redux";

import { IAppState } from "store";
import Component from "./Component";
import { loadRates } from "./Handler";
import { bindActionCreators } from "redux";
import { onChangeSelect } from "../../actions/rates";

const mapStateToProps = (state: IAppState) => ({
  options: state.rates.options,
  selectedValue: state.rates.selectedValue,
  rates: state.rates.rates,
  error: state.rates.error,
});
const mapActionsToProps = (dispatch) =>
  bindActionCreators(
    {
      loadRates,
      onChangeSelect,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapActionsToProps);
export type TReduxProps = ConnectedProps<typeof connector>;
export default connector(Component);
