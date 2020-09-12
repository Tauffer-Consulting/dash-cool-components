import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import isEqual from '../utils/isEqual';

/*
 * Date Time picker component.
 */
const defaultStyle = {
    border: 'solid 1px',
    borderColor: '#ced4da',
    borderRadius: '2px',
    color: '#545057',
    height: '33px',
    backgroundColor: 'white',
};


const getTimezoneFromDatetime = datetime => {
    if(typeof datetime === 'string' && datetime.match(/.*\+.*/)) {
        const [, timezone] = datetime.split('+');

        return timezone;
    }    

    return null;
}

const getISODateWithoutTimezone = datetime => {
    if(datetime) {
        const datetimeBound = 22;

        return datetime.substr(0, datetimeBound);
    }

    return null;
}

const isDateValid = date => !isNaN(date.getTime());

const DateTimePicker = ({
    id,
    setProps,
    value,
    style = defaultStyle,
    datetime: datetimeProp,
    renderTimezone = true,
}) => {
    const [timezone] = useState(getTimezoneFromDatetime(datetimeProp));
    const [datetime, setDatetime] = useState(getISODateWithoutTimezone(datetimeProp));

    useEffect(() => {
        const newTimezone = timezone || '';
        const newValue = datetime && `${datetime}${newTimezone}`;

        if(!isEqual(newValue, value)){
            setProps({ value: newValue });
        }
    }, [datetime, timezone]);

    const handleDateChange = event => {
        const { value } = event.target;

        const date = new Date(value);

        if(isDateValid(date)){
            const ISODate = date.toISOString();

            const formattedISODate = getISODateWithoutTimezone(ISODate);

            setDatetime(formattedISODate);
        }
        else {
            setDatetime(null);
        }
    };

    const handleTimezoneChange = () => {
        // To be implemented
    }

    return (
        <div id={id}>
            <input
                type="datetime-local"
                value={datetimeProp}
                onChange={handleDateChange}
                style={style}

            />
            {renderTimezone && (
                <TimezonePicker
                    value={timezone}
                    placeholder="Select timezone..."
                    onChange={handleTimezoneChange}
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
    timezone: PropTypes.string,
    renderTimezone: PropTypes.bool,
    style: PropTypes.object,

    // Dash props
    id: PropTypes.string,
    setProps: PropTypes.func,

    // Dash Feedback
    value: PropTypes.string,
};

export default DateTimePicker;
