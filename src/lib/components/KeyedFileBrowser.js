import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import FileBrowser from 'react-keyed-file-browser';
import '../../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css';

const alertOnUndefinedFolder = () => {
    console.warn(
        'WARNING: Tried to select a folder with unspecified key. ',
        'If you want feedback on managing this folder, please include it on your `files` array.',
    );
}

/**
 * KeyedFileBrowser is a component that renders a file browser based on a entry JSON.
 * The files and folders can be selected and the selected path can be
 * accessed via the `selectedPath` property.
 */
const KeyedFileBrowser = ({ id, setProps, files }) => {

    const handleSelectFile = useCallback(file => {
        setProps({ selectedPath: file.key });
    },[]);

    const handleSelectFolder = useCallback(folder => {
        if(!folder) {
            return alertOnUndefinedFolder();
        }
        return setProps({ selectedPath: folder.key });
    }, []);

    return (
        <div id={id}>
            <FileBrowser
                files={files}
                onSelectFile={handleSelectFile}
                onSelectFolder={handleSelectFolder}
            />
        </div>
    );
};

export default KeyedFileBrowser;

KeyedFileBrowser.defaultProps = {
    files: [],
};

KeyedFileBrowser.propTypes = {
    /**
    * The ID of this component, used to identify dash components
    * in callbacks. The ID needs to be unique across all of the
    * components in an app.
    */
    id: PropTypes.string,

    /**
    * The current selected path in the browser.
    */
    selectedPath: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    /**
    * The file tree to be displayed in the browser.
    * Each entry in the array must be an object with the `key`
    * property, which specifies it's location in the tree. Other
    * properties are `modified` and `size`.
    * To be able to receive the path selection feedback, you must
    * enter keys for both files and folders.
    */
    files: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        modified: PropTypes.number,
        size: PropTypes.number,
    })),
};
