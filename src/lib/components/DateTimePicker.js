import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DatePicker, { registerLocale } from 'react-datepicker';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import { DateTime } from 'luxon';

import ptBR from 'date-fns/locale/pt-BR';
import { getFormattedDate, getFormattedDateInput, getFormattedTimezoneInput } from '../utils/DatePicker';
import isEqual from '../utils/isEqual';

import { Container, Input } from './Styles/DateTimePicker';

import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBR);
/**
 * DateTimePicker is a datetime input component.
 * The inputs can be initialized with the `defaultValue` property and the
 * input date, on ISO format, is specified with the `value` property.
 */
const DateTimePicker = ({
    id,
    setProps,
    value,
    placeholder,
    timezonePlaceholder,
    style,
    dateInputStyle,
    timezoneInputStyle,
    defaultValue,
    renderTimezone,
}) => {
    const [datetime, setDatetime] = useState(getFormattedDate(defaultValue));
    const [dateInputValue, setDateInputValue] = useState(getFormattedDateInput(defaultValue));
    const [timezoneInputValue, setTimezoneInputValue] = useState(getFormattedTimezoneInput(defaultValue));

    useEffect(function updateStates() {
        const newDatetime = getFormattedDate(defaultValue);
        if(!isEqual(newDatetime, datetime)) {
            setDateInputValue(getFormattedDateInput(defaultValue));
            setTimezoneInputValue(getFormattedTimezoneInput(defaultValue));
        }
    }, [defaultValue])

    useEffect(function updateDateValue() {
        if(datetime.isValid){
            const stringDatetime = datetime.toString();

            if(!isEqual(stringDatetime, value)){
                setProps({ value: stringDatetime });
            }
        }
    }, [datetime]);

    useEffect(function updateDatetime() {

        let dateOptions;
        if(timezoneInputValue) {
            dateOptions = { zone: timezoneInputValue };
        }

        const newDatetime = DateTime.fromJSDate(dateInputValue, dateOptions);

        setDatetime(newDatetime);
    }, [dateInputValue, timezoneInputValue]);

    return (
        <Container id={id} style={style}>
            <DatePicker
                selected={dateInputValue}
                locale="pt-BR"
                showTimeInput
                customInput={<Input style={dateInputStyle} />}
                dateFormat="dd/MM/yyyy hh:mm"
                placeholderText={placeholder}
                popperPlacement="bottom"
                isClearable
                popperModifiers={{
                    flip: {
                        behavior: ['bottom'],
                    },
                    preventOverflow: {
                        enabled: false,
                    },
                    hide: {
                        enabled: false,
                    },
                }}
                onChange={setDateInputValue}
            />
            {renderTimezone && (
                <TimezonePicker
                    value={timezoneInputValue}
                    placeholder={timezonePlaceholder}
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
    placeholder: 'dd/MM/yyyy hh:mm',
    timezonePlaceholder: 'Select timezone...',
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
    * The date input placeholder.
    */
    placeholder: PropTypes.string,

    /**
    * The timezone input placeholder.
    */
    timezonePlaceholder: PropTypes.string,

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
