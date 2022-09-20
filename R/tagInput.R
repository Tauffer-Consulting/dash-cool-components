# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tagInput <- function(id=NULL, injectedTags=NULL, inputStyle=NULL, placeholder=NULL, tagDeleteStyle=NULL, tagStyle=NULL, value=NULL, wrapperStyle=NULL) {
    
    props <- list(id=id, injectedTags=injectedTags, inputStyle=inputStyle, placeholder=placeholder, tagDeleteStyle=tagDeleteStyle, tagStyle=tagStyle, value=value, wrapperStyle=wrapperStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TagInput',
        namespace = 'dash_cool_components',
        propNames = c('id', 'injectedTags', 'inputStyle', 'placeholder', 'tagDeleteStyle', 'tagStyle', 'value', 'wrapperStyle'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
