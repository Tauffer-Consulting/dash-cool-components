# AUTO GENERATED FILE - DO NOT EDIT

keywords <- function(id=NULL, wrapperStyle=NULL, tagStyle=NULL, inputStyle=NULL, tagDeleteStyle=NULL, placeholder=NULL) {
    
    props <- list(id=id, wrapperStyle=wrapperStyle, tagStyle=tagStyle, inputStyle=inputStyle, tagDeleteStyle=tagDeleteStyle, placeholder=placeholder)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Keywords',
        namespace = 'dash_cool_components',
        propNames = c('id', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
