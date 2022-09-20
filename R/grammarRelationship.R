# AUTO GENERATED FILE - DO NOT EDIT

#' @export
grammarRelationship <- function(id=NULL, data=NULL, selectedText=NULL, style=NULL) {
    
    props <- list(id=id, data=data, selectedText=selectedText, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GrammarRelationship',
        namespace = 'dash_cool_components',
        propNames = c('id', 'data', 'selectedText', 'style'),
        package = 'dashCoolComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
