# AUTO GENERATED FILE - DO NOT EDIT

keyedFileBrowser <- function(id=NULL, files=NULL, selectedPath=NULL) {
    
    props <- list(id=id, files=files, selectedPath=selectedPath)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_cool_components',
        propNames = c('id', 'files', 'selectedPath'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
