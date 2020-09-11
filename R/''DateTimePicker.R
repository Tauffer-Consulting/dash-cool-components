# AUTO GENERATED FILE - DO NOT EDIT

''DateTimePicker <- function(id=NULL, datetime=NULL, timezone=NULL, value=NULL, renderTimezone=NULL, style=NULL) {
    
    props <- list(id=id, datetime=datetime, timezone=timezone, value=value, renderTimezone=renderTimezone, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'datetime', 'timezone', 'value', 'renderTimezone', 'style'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
