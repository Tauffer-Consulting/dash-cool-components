# AUTO GENERATED FILE - DO NOT EDIT

dateTimePicker <- function(id=NULL, dateInputStyle=NULL, placeholder=NULL, renderTimezone=NULL, style=NULL, timezoneInputStyle=NULL, timezonePlaceholder=NULL, value=NULL) {
    
    props <- list(id=id, dateInputStyle=dateInputStyle, placeholder=placeholder, renderTimezone=renderTimezone, style=style, timezoneInputStyle=timezoneInputStyle, timezonePlaceholder=timezonePlaceholder, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'dateInputStyle', 'placeholder', 'renderTimezone', 'style', 'timezoneInputStyle', 'timezonePlaceholder', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
