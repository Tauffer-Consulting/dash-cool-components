import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagInput } from 'reactjs-tag-input'

/*
 * Keyword tag component 
 */
export default class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = { tags: [] }
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    onTagsChanged(tags) {
        this.setState({ tags })
        const { value, setProps } = this.props;
        setProps({ value: tags })
    }

    render() {
        const { id, wrapperStyle, inputStyle, tagDeleteStyle, placeholder, tagStyle } = this.props;

        return (
            <div id={id}>
                <TagInput
                    tags={this.state.tags}
                    onTagsChanged={this.onTagsChanged}
                    wrapperStyle={wrapperStyle}
                    inputStyle={inputStyle}
                    tagDeleteStyle={tagDeleteStyle}
                    placeholder={placeholder}
                    tagStyle={tagStyle}
                />
            </div>
        );
    }
}

Keywords.defaultProps = {};

Keywords.propTypes = {

    // The ID used to identify this component in Dash callbacks.
    id: PropTypes.string,


    // Wrapper style css
    wrapperStyle: PropTypes.object,

    tagStyle: PropTypes.object,

    // Input style css 
    inputStyle: PropTypes.object,

    // Delete btn style
    tagDeleteStyle: PropTypes.object,

    // Placeholder
    placeholder: PropTypes.string,

    // Tags Values
    value: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
