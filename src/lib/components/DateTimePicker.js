import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DateTimePicker extends Component {
    render() {
        const { id, setProps, value, style } = this.props;

        return (
            <div id={id}>
                <input
                    type="datetime-local"
                    value={value}
                    onChange={e => setProps({ value: e.target.value })}
                    style={style}
                />
            </div>
        );
    }
}

DateTimePicker.defaultProps = {};

DateTimePicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
