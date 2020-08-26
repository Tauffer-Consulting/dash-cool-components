
<h3 align="center">Dash Cool Components</h3>

<p align="center">
  Useful components for Plotly Dash
</p>


## Table of contents

- [Installation](#installation)
- [Quick Start](#quickstart)

## Installation

### PyPI

You can install _dash-cool-components_ with `pip`:

```sh
pip install dash-cool-components
```

## Quick Start

**Usage Example**
```
import dash
import dash_html_components as html
import dash_cool_components

app = dash.Dash(__name__)

my_component = dash_cool_components.DateTimePicker(id='date_time_picker')
app.layout = html.Div(my_component)

if __name__ == '__main__':
    app.run_server(debug=True)

```
