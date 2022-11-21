import * as React from 'react';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TimeSelector } from './ticketSelectors/timeSelector';
import Box from '@mui/material/Box';



function getWeeksAfter(date, amount) {
  return date ? date.add(amount, 'week') : undefined;
}

export default function DateTimeSelector() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        disablePast
        value={value}
        maxDate={getWeeksAfter(value[0])}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
          <p {...startProps} style={{margin:"0px"}}>
            <TimeSelector
            // startProps={startProps}
            caption="check-in"
            date={startProps["inputProps"]["value"]}
                ></TimeSelector>
        </p>
            <p {...endProps} style={{margin:"0px"}}>

            <TimeSelector
            caption="check-out"
              date={endProps["inputProps"]["value"]}
            ></TimeSelector>
            </p>
            {/* <TextField {...startProps} /> */}
            
            {/* <TextField {...endProps} /> */}
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
