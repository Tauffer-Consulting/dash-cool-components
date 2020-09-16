% Auto-generated: do not edit by hand
\name{dateTimePicker}

\alias{dateTimePicker}

\title{DateTimePicker component}

\description{
DateTimePicker is a datetime input component. The inputs can be initialized with the `defaultValue` property and the input date, on ISO format, is specified with the `value` property.
}

\usage{
dateTimePicker(id=NULL, value=NULL, defaultValue=NULL, placeholder=NULL,
timezonePlaceholder=NULL, renderTimezone=NULL, style=NULL,
dateInputStyle=NULL, timezoneInputStyle=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{value}{Character. The input's current value.}

\item{defaultValue}{Character. The input's default value. Accepts values on the ISO format.}

\item{placeholder}{Character. The date input placeholder.}

\item{timezonePlaceholder}{Character. The timezone input placeholder.}

\item{renderTimezone}{Logical. Defines if the timezone input should be rendered. Defaults to true.}

\item{style}{Named list | character. The container's style.}

\item{dateInputStyle}{Named list | character. The date input's style.}

\item{timezoneInputStyle}{Named list. The timezone input's container style.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

