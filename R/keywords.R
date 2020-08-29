# AUTO GENERATED FILE - DO NOT EDIT

keywords <- function(id=NULL, wrapperStyle=NULL, tagStyle=NULL, inputStyle=NULL, tagDeleteStyle=NULL, placeholder=NULL, value=NULL) {
    
    props <- list(id=id, wrapperStyle=wrapperStyle, tagStyle=tagStyle, inputStyle=inputStyle, tagDeleteStyle=tagDeleteStyle, placeholder=placeholder, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Keywords',
        namespace = 'dash_cool_components',
        propNames = c('id', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
