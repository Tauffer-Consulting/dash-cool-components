import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { TagInput as InputTag } from 'reactjs-tag-input';
import isEqual from '../utils/isEqual';

const replaceRefState = (refCurrent, newState, callback) => {
    const { updater } = refCurrent;

    updater.enqueueReplaceState(refCurrent, newState, callback);
}

/*
 * Keyword tag component 
 */
const TagInput = ({ wrapperStyle, inputStyle, tagDeleteStyle, placeholder, tagStyle, injectedTags, setProps, id }) => {
    const [tags, setTags] = useState([]);
    const tagInputRef = useRef(null);

    const haveTagsBeenInjected = useCallback(() => injectedTags && !isEqual(tags, injectedTags), [injectedTags]);

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
    wrapperStyle: PropTypes.object,
    tagStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    tagDeleteStyle: PropTypes.object,
    placeholder: PropTypes.string,

    // Use this prop to force the render of your tags
    injectedTags: PropTypes.array,

    // Dash props
    id: PropTypes.string,
    setProps: PropTypes.func,

    // Dash Feedback
    value: PropTypes.array,
};


export default TagInput;