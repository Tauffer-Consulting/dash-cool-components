# AUTO GENERATED FILE - DO NOT EDIT

''DateTimePicker <- function(datetime=NULL, renderTimezone=NULL, dateInputStyle=NULL, timezoneInputStyle=NULL, id=NULL, value=NULL) {
    
    props <- list(datetime=datetime, renderTimezone=renderTimezone, dateInputStyle=dateInputStyle, timezoneInputStyle=timezoneInputStyle, id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('datetime', 'renderTimezone', 'dateInputStyle', 'timezoneInputStyle', 'id', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
