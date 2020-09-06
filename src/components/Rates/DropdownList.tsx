import React from "react";
import { Select } from "antd";
import { RateOption } from "./Model";

const { Option } = Select;

interface Props {
  listOptions: RateOption[];
  onChangeSelect: (option: RateOption) => void;
  selectedValue: RateOption;
}

class DropdownList extends React.Component<Props> {
  render() {
    const { listOptions, onChangeSelect, selectedValue } = this.props;
    return (
      <div>
        <Select
          defaultValue={selectedValue.text}
          style={{ width: 500 }}
          placeholder="Select currency"
          onChange={(selectedRateOption) =>
            onChangeSelect(
              listOptions.find((listOptions) => {
                return listOptions.value === selectedRateOption;
              })!
            )
          }
        >
          {listOptions.map((currency) => (
            <Option value={currency.text} key={currency.key}>
              {currency.value}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default DropdownList;
