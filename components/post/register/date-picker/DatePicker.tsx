import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { IForm } from "../../../../interfaces/post";
import styles from "./DatePicker.module.css";
import DatePicker from "react-datepicker";

interface IDateSelect {
  control: Control<IForm>;
}

function DateSelector({ control }: IDateSelect) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <span>방탈출 날짜</span>
      <Controller
        name={"date"}
        control={control}
        defaultValue={new Date()}
        render={({ field: { value = startDate, onChange } }) => (
          <DatePicker
            selected={value}
            minDate={new Date()}
            showDisabledMonthNavigation
            dateFormat="yyyy/MM/dd"
            onChange={onChange}
            popperClassName={styles.reactDatepickerPopper}
          />
        )}
      />
    </>
  );
}

export default DateSelector;
