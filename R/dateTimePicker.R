# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dateTimePicker <- function(id=NULL, dateInputStyle=NULL, locale=NULL, placeholder=NULL, renderTimezone=NULL, style=NULL, timezoneInputStyle=NULL, timezonePlaceholder=NULL, value=NULL) {
    
    props <- list(id=id, dateInputStyle=dateInputStyle, locale=locale, placeholder=placeholder, renderTimezone=renderTimezone, style=style, timezoneInputStyle=timezoneInputStyle, timezonePlaceholder=timezonePlaceholder, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateTimePicker',
        namespace = 'dash_cool_components',
        propNames = c('id', 'dateInputStyle', 'locale', 'placeholder', 'renderTimezone', 'style', 'timezoneInputStyle', 'timezonePlaceholder', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
