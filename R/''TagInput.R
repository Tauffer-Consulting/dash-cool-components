# AUTO GENERATED FILE - DO NOT EDIT

''TagInput <- function(wrapperStyle=NULL, tagStyle=NULL, inputStyle=NULL, tagDeleteStyle=NULL, placeholder=NULL, injectedTags=NULL, id=NULL, value=NULL) {
    
    props <- list(wrapperStyle=wrapperStyle, tagStyle=tagStyle, inputStyle=inputStyle, tagDeleteStyle=tagDeleteStyle, placeholder=placeholder, injectedTags=injectedTags, id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TagInput',
        namespace = 'dash_cool_components',
        propNames = c('wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'injectedTags', 'id', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
