import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';


/*
 * Date Time picker component.
 */
export default class DateTimePicker extends Component {
    render() {
        const { id, setProps, style, timezone, datetime, renderTimezone } = this.props;

        function handleChange(e) {
            if ((typeof e) == 'object') {
                setProps({ datetime: e.target.value })
                if (typeof timezone == 'undefined') {
                    const auxValue = { 'datetime': e.target.value, 'timezone': '' }
                    setProps({ value: auxValue })
                } else {
                    const auxValue = { 'datetime': e.target.value, 'timezone': timezone }
                    setProps({ value: auxValue })
                }
            } else {
                setProps({ timezone: e })
                if (typeof datetime == 'undefined') {
                    const auxValue = { 'datetime': '', 'timezone': e }
                    setProps({ value: auxValue })
                } else {
                    const auxValue = { 'datetime': datetime, 'timezone': e }
                    setProps({ value: auxValue })
                }
            }
        }
        if (renderTimezone) {
            return (
                <div id={id}>
                    <input
                        type="datetime-local"
                        value={datetime}
                        onChange={handleChange}
                        style={style}

                    />
                    <TimezonePicker
                        value={timezone}
                        placeholder="Select timezone..."
                        onChange={handleChange}
                    />
                </div>
            );
        } else {
            return (
                <div id={id}>
                    <input
                        type="datetime-local"
                        value={datetime}
                        onChange={handleChange}
                        style={style}

                    />
                </div>
            )
        }
    }
}

DateTimePicker.defaultProps = {

    datetime: undefined,

    timezone: undefined,

    renderTimezone: true,

    value: { "datetime": "", "timezone": "" },

    style: { "border": "solid 1px", "borderColor": "#ced4da", "borderRadius": "2px", "color": '#545057', 'height': '33px', 'backgroundColor': 'white' },
};

DateTimePicker.propTypes = {

    // The ID used to identify this component in Dash callbacks.
    id: PropTypes.string,

    // Datetime value
    datetime: PropTypes.string,

    // Timezone value
    timezone: PropTypes.string,

    // Value object with datetime and timezone selected values
    value: PropTypes.object,

    // Boolean to render or not timezone picker
    renderTimezone: PropTypes.bool,

    // Style object property for datetime picker
    style: PropTypes.object,




    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
