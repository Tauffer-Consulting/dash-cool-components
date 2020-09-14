# AUTO GENERATED FILE - DO NOT EDIT

''TagInput <- function(id=NULL, value=NULL, wrapperStyle=NULL, tagStyle=NULL, inputStyle=NULL, tagDeleteStyle=NULL, placeholder=NULL, injectedTags=NULL) {
    
    props <- list(id=id, value=value, wrapperStyle=wrapperStyle, tagStyle=tagStyle, inputStyle=inputStyle, tagDeleteStyle=tagDeleteStyle, placeholder=placeholder, injectedTags=injectedTags)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TagInput',
        namespace = 'dash_cool_components',
        propNames = c('id', 'value', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'injectedTags'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
