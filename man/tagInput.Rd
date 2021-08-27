% Auto-generated: do not edit by hand
\name{tagInput}

\alias{tagInput}

\title{TagInput component}

\description{
TagInput is an input for creating tags. The input is fully customizable and its current added tags can be accessed via the the `value` property.
}

\usage{
tagInput(id=NULL, injectedTags=NULL, inputStyle=NULL,
placeholder=NULL, tagDeleteStyle=NULL, tagStyle=NULL,
value=NULL, wrapperStyle=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{injectedTags}{List of lists containing elements 'index', 'displayvalue'.
those elements have the following types:
  - index (numeric; optional)
  - displayvalue (character; optional)s. Inject these tags into the component. They will be rendered on
the next React commit. This replaces the component's actual tags.}

\item{inputStyle}{Named list | character. The text input's style.}

\item{placeholder}{Character. Placeholder for the text input.}

\item{tagDeleteStyle}{Named list | character. The tag delete button's style.}

\item{tagStyle}{Named list | character. The tag's style.}

\item{value}{List of lists containing elements 'index', 'displayvalue'.
those elements have the following types:
  - index (numeric; optional)
  - displayvalue (character; optional)s. The input's current tags.}

\item{wrapperStyle}{Named list | character. The component wrapper's style.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

