# AUTO GENERATED FILE - DO NOT EDIT

''KeyedFileBrowser <- function(id=NULL, selectedPath=NULL, files=NULL) {
    
    props <- list(id=id, selectedPath=selectedPath, files=files)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_cool_components',
        propNames = c('id', 'selectedPath', 'files'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
