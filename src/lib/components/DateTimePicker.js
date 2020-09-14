import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TimezonePicker from 'react-bootstrap-timezone-picker';

import { DateTime } from 'luxon';
import { formatFromDMYtoMDY, getFormattedDate, getInitialDateInput, getInitialTimezoneInput } from '../utils/DatePicker';
import isEqual from '../utils/isEqual';

import { Container, Input } from './Styles/DateTimePicker';

import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

/**
 * DateTimePicker is a datetime input component.
 * The inputs can be initialized with the `defaultValue` property and the
 * input date, on ISO format, is specified with the `value` property.
 */
const DateTimePicker = ({
    id,
    setProps,
    value,
    style,
    dateInputStyle,
    timezoneInputStyle,
    defaultValue,
    renderTimezone,
}) => {
    const [datetime, setDatetime] = useState(getFormattedDate(defaultValue));
    const [dateInputValue, setDateInputValue] = useState(getInitialDateInput(defaultValue));
    const [timezoneInputValue, setTimezoneInputValue] = useState(getInitialTimezoneInput(defaultValue));

    useEffect(function updateDateValue() {
        if(datetime.isValid){
            const stringDatetime = datetime.toString();

            if(!isEqual(stringDatetime, value)){
                setProps({ value: stringDatetime });
            }
        }
    }, [datetime]);

    useEffect(function updateDatetime() {
        const dateInAcceptableFormat = formatFromDMYtoMDY(dateInputValue);
        const JSDate = new Date(dateInAcceptableFormat);

        let dateOptions;
        if(timezoneInputValue) {
            dateOptions = { zone: timezoneInputValue };
        }

        const newDatetime = DateTime.fromJSDate(JSDate, dateOptions);

        setDatetime(newDatetime);
    }, [dateInputValue, timezoneInputValue]);

    return (
        <Container id={id} style={style}>
            <Input
                type="datetime-local"
                value={dateInputValue}
                onChange={event => setDateInputValue(event.target.value)}
                style={dateInputStyle}
            />
            {renderTimezone && (
                <TimezonePicker
                    value={timezoneInputValue}
                    placeholder="Select timezone..."
                    onChange={setTimezoneInputValue}
                    style={timezoneInputStyle}
                />
            )}
        </Container>
    );
}

DateTimePicker.defaultProps = {
    value: null,
    renderTimezone: true,
};

DateTimePicker.propTypes = {
    /**
    * The ID of this component, used to identify dash components
    * in callbacks. The ID needs to be unique across all of the
    * components in an app.
    */
    id: PropTypes.string,

    /**
    * The input's current value.
    */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    /**
    * The input's default value. Accepts values on the ISO format.
    */
    defaultValue: PropTypes.string,

    /**
    * Defines if the timezone input should be rendered. Defaults to true.
    */
    renderTimezone: PropTypes.bool,

    /**
    * The container's style.
    */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
    * The date input's style.
    */
    dateInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
    * The timezone input's container style.
    */
    timezoneInputStyle: PropTypes.object,
};

export default DateTimePicker;
