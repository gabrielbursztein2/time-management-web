import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const Container = styled.div`
  align-self: flex-end;

  .link {
    background-color: transparent;
    border: 0;
    color: #4a90e2;
    cursor: pointer;
    margin-right: 1rem;

    :focus {
      outline: 0;
    }
  }

  .input-from-to
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .input-from-to .DayPicker-Day {
    border-radius: 0 !important;
  }
  .input-from-to .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .input-from-to .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .input-from-to .DayPickerInput-Overlay {
    width: 17.5rem;
  }
  .input-from-to-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`;

const DateRange = ({ handleChange }) => {
  const [range, setRange] = useState({});
  const toRef = useRef();

  const handleFromChange = from => {
    setRange({ from });
  };

  const handleToChange = to => {
    const newRange = { ...range, to };
    setRange(newRange);
    handleChange(newRange);
  };

  const handleResetClick = () => {
    setRange({});
    handleChange({});
  };

  const { from, to } = range;
  const modifiers = { start: from, end: to };
  return (
    <Container>
      <button type="button" className="link" onClick={handleResetClick}>
        Reset
      </button>
      <span className="input-from-to">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => toRef.current.getInput().focus()
          }}
          onDayChange={handleFromChange}
        />
      </span>{' '}
      —{' '}
      <span className="input-from-to">
        <DayPickerInput
          ref={toRef}
          value={to}
          placeholder="To"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from,
            numberOfMonths: 1
          }}
          onDayChange={handleToChange}
        />
      </span>
    </Container>
  );
};

DateRange.propTypes = {
  handleChange: func.isRequired
};

export default DateRange;
