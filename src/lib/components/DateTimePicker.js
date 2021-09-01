import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DatePicker, { registerLocale } from 'react-datepicker';
import { DateTime } from 'luxon';

import {pt, ptBR, enUS, enIN, es, it, de} from 'date-fns/locale';

import { appendTimezone, getFormattedDate, getFormattedDateInput, getFormattedTimezoneInput, getDateWithoutTimezone } from '../utils/DatePicker';
import isEqual from '../utils/isEqual';

import utcOptions from '../data/utcOptions';

import { Container, Input, Select } from './Styles/DateTimePicker';

import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import 'react-datepicker/dist/react-datepicker.css';


const locales = {
    "pt": pt,
    "pt-BR": ptBR,
    "en-US": enUS,
    "en-IN": enIN,
    "es": es,
    "it": it,
    "de": de
}

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
    renderTimezone,
    locale
}) => {
    const [datetime, setDatetime] = useState(null);
    const [dateInputValue, setDateInputValue] = useState(null);
    const [timezoneInputValue, setTimezoneInputValue] = useState(null);

    useEffect(() => {
        registerLocale(locale, locales[locale])
    }, [locale])

    useEffect(function onValueChange() {
        const newDatetime = getFormattedDate(value);

        if (!isEqual(newDatetime, datetime)) {
            const newDateInputValue = getFormattedDateInput(value);
            const newTimezoneInputValue = getFormattedTimezoneInput(value);
            setDateInputValue(newDateInputValue);
            setTimezoneInputValue(newTimezoneInputValue);
        }
    }, [value])

    useEffect(function updateDateValue() {
        if (datetime === null) return;
        if (datetime.isValid) {
            const stringDatetime = datetime.toString();

            if (!isEqual(stringDatetime, value)) {
                renderTimezone ? setProps({value: stringDatetime}) : setProps({value: getDateWithoutTimezone(stringDatetime)})
            }
        }
    }, [datetime]);

    useEffect(function updateDatetime() {
        let newDatetime = DateTime.fromJSDate(dateInputValue);

        if (renderTimezone){
            newDatetime = appendTimezone(newDatetime, timezoneInputValue);
        }
        setDatetime(newDatetime);

    }, [dateInputValue, timezoneInputValue]);

    return (
        <Container id={id} style={style}>
            <DatePicker
                selected={dateInputValue}
                locale={locale}
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
                <Select
                    value={timezoneInputValue}
                    onChange={event => setTimezoneInputValue(event.target.value)}
                    style={timezoneInputStyle}
                >
                    <option value="">{timezonePlaceholder}</option>
                    {utcOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </Select>
            )}
        </Container>
    );
}

DateTimePicker.defaultProps = {
    value: null,
    renderTimezone: true,
    placeholder: 'dd/MM/yyyy hh:mm',
    timezonePlaceholder: 'Select timezone...',
    locale: 'en-US'
};

DateTimePicker.propTypes = {
    /**
    * The ID of this component, used to identify dash components
    * in callbacks. The ID needs to be unique across all of the
    * components in an app.
    */
    id: PropTypes.string,

    /**
    * The input's value. Accepts values on the ISO format.
    */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,


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

    /*
    * Datetime picker locale.
    */
    locale: PropTypes.oneOf(["pt", 'pt-BR', 'en-US', "en-IN", "es", "it", "de"])

};

export default DateTimePicker;
