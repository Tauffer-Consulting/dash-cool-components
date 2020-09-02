import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FileBrowser, { Icons } from 'react-keyed-file-browser';
import '../../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css'

/*
 * File Browser component.
 */
export default class KeyedFileBrowser extends Component {


    render() {
        const { id, setProps, value, selectedPath } = this.props;

        return (
            <div id={id}>
                <FileBrowser
                    files={value}
                    onSelectFile={e => setProps({ selectedPath: e.key })}
                    onSelectFolder={e => console.log(e)}
                />
            </div>
        );
    }
}

KeyedFileBrowser.defaultProps = {};

KeyedFileBrowser.propTypes = {

    // The ID used to identify this component in Dash callbacks.
    id: PropTypes.string,

    // A selectedPath that will be printed when this component is rendered.
    selectedPath: PropTypes.string,

    // The value displayed in the input.
    value: PropTypes.array.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
