import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TagInput as InputTag } from 'reactjs-tag-input';
import isEqual from '../utils/isEqual';

/*
 * Keyword tag component 
 */
const TagInput = ({ wrapperStyle, inputStyle, tagDeleteStyle, placeholder, tagStyle, injectedTags, setProps, id }) => {
    const [tags, setTags] = useState([]);

    const onTagsChanged = useCallback((tags) => {
        setTags(tags);
        setProps({ value: tags });
    }, []);

    useEffect(() => {
        if(injectedTags && !isEqual(tags, injectedTags)){
            onTagsChanged(injectedTags);
        }
    }, [injectedTags])

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
    injectedTags: PropTypes.array,

    // Dash props
    id: PropTypes.string,
    setProps: PropTypes.func,

    // Dash Feedback
    value: PropTypes.array,
};


export default TagInput;