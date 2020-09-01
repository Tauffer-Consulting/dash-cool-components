# AUTO GENERATED FILE - DO NOT EDIT

keyedFileBrowser <- function(id=NULL, selectedPath=NULL, value=NULL) {
    
    props <- list(id=id, selectedPath=selectedPath, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_cool_components',
        propNames = c('id', 'selectedPath', 'value'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
