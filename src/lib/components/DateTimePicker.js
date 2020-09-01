import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

/*
 * Date Time picker component.
 */
export default class DateTimePicker extends Component {
    render() {
        const { id, setProps, value, style, timezone } = this.props;

        if (typeof style == 'undefined') {
            setProps({ style: { "border": "solid 1px", "borderColor": "#ced4da", "borderRadius": "2px", "color": '#545057', 'height': '33px' } })
        }
        else {
            setProps({ style: style })
        }

        return (
            <div id={id}>
                <input
                    type="datetime-local"
                    value={value}
                    onChange={e => setProps({ value: e.target.value })}
                    style={style}

                />
                <TimezonePicker
                    value={timezone}
                    placeholder="Select timezone..."
                    onChange={e => setProps({ timezone: e })}
                />
            </div>
        );
    }
}

DateTimePicker.defaultProps = {};

DateTimePicker.propTypes = {

    // The ID used to identify this component in Dash callbacks.
    id: PropTypes.string,


    // The value displayed in the input.
    value: PropTypes.string,

    // Style object property
    style: PropTypes.object,

    timezone: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
