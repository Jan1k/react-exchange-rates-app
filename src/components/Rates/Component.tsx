import React from "react";
import ApexChart from "react-apexcharts";
import { TReduxProps } from "./Container";
import { StyledContainer } from "./style";
import { RateOption } from "./Model";
import DropdownList from "./DropdownList";

export type TComponentProps = {} & TReduxProps;

interface Props {
  options: Array<RateOption>;
  rates: any[];
  loadRates: (key: number) => void;
  onChangeSelect: (option: RateOption) => void;
  selectedValue: RateOption;
  isLoading: boolean;
  error: null;
}

class Rates extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadRates(this.props.selectedValue.key);
  }
  componentDidUpdate(prevProps, _) {
    if (prevProps.selectedValue !== this.props.selectedValue) {
      this.props.loadRates(this.props.selectedValue.key);
    }
  }
  getChartDates = () => {
    const datesArray: string[] = [];
    for (let i in this.props.rates) {
      datesArray.push(this.props.rates[i]["Date"].substring(0, 10));
    }
    return {
      xaxis: { categories: datesArray },
    };
  };
  getChartCourses = () => {
    const coursesArray: number[] = [];
    for (let i in this.props.rates) {
      coursesArray.push(this.props.rates[i]["Cur_OfficialRate"]);
    }
    return {
      name: "Course",
      data: coursesArray,
    };
  };
  render() {
    const { error, onChangeSelect, selectedValue } = this.props;
    const { options } = this.props;

    if (error) {
      return <p>Error: {error}</p>;
    } else {
      return (
        <StyledContainer>
          <h2>Exchange rates for {selectedValue.text} for the last week:</h2>
          <ApexChart
            options={this.getChartDates()}
            series={[this.getChartCourses()]}
            type={"line"}
            width={500}
            height={300}
          />
          <DropdownList
            selectedValue={selectedValue}
            onChangeSelect={onChangeSelect}
            listOptions={options}
          />
        </StyledContainer>
      );
    }
  }
}

export default Rates;
