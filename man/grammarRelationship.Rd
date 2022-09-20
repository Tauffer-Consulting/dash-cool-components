% Auto-generated: do not edit by hand
\name{grammarRelationship}

\alias{grammarRelationship}

\title{GrammarRelationship component}

\description{

}

\usage{
grammarRelationship(id=NULL, data=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{List with named elements and values of type lists containing elements 'text', 'pos', 'head', 'postag', 'children'.
those elements have the following types:
  - text (character; optional)
  - pos (character; optional)
  - head (optional): . head has the following type: lists containing elements 'ind', 'relationship', 'relationshiptag'.
those elements have the following types:
  - ind (character; optional)
  - relationship (character; optional)
  - relationshiptag (character; optional)
  - postag (character; optional)
  - children (logical | numeric | character | named list | unnamed list; optional). The data to be displayed}

\item{style}{Named list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

