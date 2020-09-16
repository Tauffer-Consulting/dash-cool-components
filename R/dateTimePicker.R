# AUTO GENERATED FILE - DO NOT EDIT

dateTimePicker <- function(id=NULL, value=NULL, defaultValue=NULL, placeholder=NULL, timezonePlaceholder=NULL, renderTimezone=NULL, style=NULL, dateInputStyle=NULL, timezoneInputStyle=NULL) {
    
    props <- list(id=id, value=value, defaultValue=defaultValue, placeholder=placeholder, timezonePlaceholder=timezonePlaceholder, renderTimezone=renderTimezone, style=style, dateInputStyle=dateInputStyle, timezoneInputStyle=timezoneInputStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'value', 'defaultValue', 'placeholder', 'timezonePlaceholder', 'renderTimezone', 'style', 'dateInputStyle', 'timezoneInputStyle'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
