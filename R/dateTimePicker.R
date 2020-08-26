# AUTO GENERATED FILE - DO NOT EDIT

dateTimePicker <- function(id=NULL, value=NULL, style=NULL) {
    
    props <- list(id=id, value=value, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'value', 'style'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
