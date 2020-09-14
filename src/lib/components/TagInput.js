import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { TagInput as InputTag } from 'reactjs-tag-input';
import isEqual from '../utils/isEqual';

const replaceRefState = (refCurrent, newState, callback) => {
    const { updater } = refCurrent;

    updater.enqueueReplaceState(refCurrent, newState, callback);
}

/**
 * TagInput is an input for creating tags.
 * The input is fully customizable and its current added tags
 * can be accessed via the the `value` property.
 */
const TagInput = ({ wrapperStyle, inputStyle, tagDeleteStyle, placeholder, tagStyle, injectedTags, setProps, id }) => {
    const [tags, setTags] = useState([]);
    const tagInputRef = useRef(null);

    const haveTagsBeenInjected = () => injectedTags && !isEqual(tags, injectedTags);

    const onTagsChanged = useCallback(tags => {
        setTags(tags);
        setProps({ value: tags });
    }, []);

    const injectTagsInState = useCallback(() => {
        if(haveTagsBeenInjected()){
            if(tagInputRef.current) {
                replaceRefState(tagInputRef.current, { selectedTags: injectedTags }, () => onTagsChanged(injectedTags))
            }
        }
    }, [injectedTags]);

    useEffect(injectTagsInState, [injectedTags])

    return (
        <div id={id}>
            <InputTag
                tags={tags}
                onTagsChanged={onTagsChanged}
                wrapperStyle={wrapperStyle}
                inputStyle={inputStyle}
                tagDeleteStyle={tagDeleteStyle}
                placeholder={placeholder}
                tagStyle={tagStyle}
                ref={tagInputRef}
            />
        </div>
    );
}

TagInput.propTypes = {
    /**
    * The ID of this component, used to identify dash components
    * in callbacks. The ID needs to be unique across all of the
    * components in an app.
    */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    /**
    * The input's current tags.
    */
    value: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number,
        displayValue: PropTypes.string,
    })),

    /**
    * The component wrapper's style.
    */
    wrapperStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),

    /**
    * The tag's style.
    */
    tagStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),

    /**
    * The text input's style.
    */
    inputStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),

    /**
    * The tag delete button's style.
    */
    tagDeleteStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),

    /**
    * Placeholder for the text input.
    */
    placeholder: PropTypes.string,

    /**
    * Inject these tags into the component. They will be rendered on
    * the next React commit. This replaces the component's actual tags.
    */
    injectedTags: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number,
        displayValue: PropTypes.string,
    })),
};


export default TagInput;