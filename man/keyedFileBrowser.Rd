% Auto-generated: do not edit by hand
\name{keyedFileBrowser}

\alias{keyedFileBrowser}

\title{KeyedFileBrowser component}

\description{
KeyedFileBrowser is a component that renders a file browser based on a entry JSON. The files and folders can be selected and the selected path can be accessed via the `selectedPath` property.
}

\usage{
keyedFileBrowser(id=NULL, selectedPath=NULL, files=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{selectedPath}{Character. The current selected path in the browser.}

\item{files}{List of lists containing elements 'key', 'modified', 'size'.
those elements have the following types:
  - key (character; required)
  - modified (numeric; optional)
  - size (numeric; optional)s. The file tree to be displayed in the browser.
Each entry in the array must be an object with the `key`
property, which specifies it's location in the tree. Other
properties are `modified` and `size`.
To be able to receive the path selection feedback, you must
enter keys for both files and folders.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

