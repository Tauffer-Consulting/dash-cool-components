# AUTO GENERATED FILE - DO NOT EDIT

dateTimePicker <- function(id=NULL, value=NULL, placeholder=NULL, timezonePlaceholder=NULL, renderTimezone=NULL, style=NULL, dateInputStyle=NULL, timezoneInputStyle=NULL, locale=NULL) {
    
    props <- list(id=id, value=value, placeholder=placeholder, timezonePlaceholder=timezonePlaceholder, renderTimezone=renderTimezone, style=style, dateInputStyle=dateInputStyle, timezoneInputStyle=timezoneInputStyle, locale=locale)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'value', 'placeholder', 'timezonePlaceholder', 'renderTimezone', 'style', 'dateInputStyle', 'timezoneInputStyle', 'locale'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
