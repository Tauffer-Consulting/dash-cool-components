import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__)

app.layout = html.Div([
    dash_cool_components.DateTimePicker(
        id='input',
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value'), Input('input', 'timezone')])
def display_output(value, timezone):
    return 'You have entered {} {}'.format(value, timezone)


if __name__ == '__main__':
    app.run_server(debug=True)
