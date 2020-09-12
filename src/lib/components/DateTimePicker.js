import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import isEqual from '../utils/isEqual';
import { DateTime } from 'luxon';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const defaultStyle = {
    border: 'solid 1px',
    borderColor: '#ced4da',
    borderRadius: '2px',
    color: '#545057',
    height: '33px',
    backgroundColor: 'white',
};

const getFormattedDate = date => DateTime.fromISO(date);

const formatISODate = ISODate => {
    if(typeof ISODate === 'string'){    
        const dateElements = String(ISODate).split('-');
        const reversedElements = dateElements.reverse();
        const formattedDate = reversedElements.join('/');

        return formattedDate;
    }

    return '';
}

const getInitialDateInput = datetimeProp => {
    const datetime = getFormattedDate(datetimeProp);

    if(datetime.isValid) {
        const formattedDate = formatISODate(datetime.toISODate());
        
        return formattedDate;
    }

    return '';
}

const getInitialTimezoneInput = datetimeProp => {
    const datetime = getFormattedDate(datetimeProp);

    if(datetime.isValid) {
        return datetime.zoneName;
    }

    return '';
}

/*
 * Date Time picker component.
 */
const DateTimePicker = ({
    id,
    setProps,
    value,
    dateInputStyle = defaultStyle,
    timezoneInputStyle,
    datetime: datetimeProp,
    renderTimezone = true,
}) => {
    const [datetime, setDatetime] = useState(getFormattedDate(datetimeProp));
    const [dateInputValue, setDateInputValue] = useState(getInitialDateInput(datetimeProp));
    const [timezoneInputValue, setTimezoneInputValue] = useState(getInitialTimezoneInput(datetimeProp));

    useEffect(function updateDashValue() {
        if(datetime.isValid){
            const stringDatetime = datetime.toString();

            if(!isEqual(stringDatetime, value)){
                setProps({ value: stringDatetime });
            }
        }
    }, [datetime]);

    useEffect(function updateDatetime() {
        const JSDate = new Date(dateInputValue);
        let dateOptions;
        if(timezoneInputValue) {
            dateOptions = { zone: timezoneInputValue };
        }

        const newDatetime = DateTime.fromJSDate(JSDate, dateOptions);

        setDatetime(newDatetime);
    }, [dateInputValue, timezoneInputValue]);

    return (
        <div id={id}>
            <input
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
        </div>
    );
}

DateTimePicker.defaultProps = {
    value: null,
};

DateTimePicker.propTypes = {
    datetime: PropTypes.string,
    renderTimezone: PropTypes.bool,
    dateInputStyle: PropTypes.object,
    timezoneInputStyle: PropTypes.object,

    // Dash props
    id: PropTypes.string,
    setProps: PropTypes.func,

    // Dash Feedback
    value: PropTypes.string,
};

export default DateTimePicker;
