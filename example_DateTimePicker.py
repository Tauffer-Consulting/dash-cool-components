import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

app.layout = dbc.Container([
    dbc.Row([
        dbc.Col([
            dbc.Label('Input component'),
            dash_cool_components.DateTimePicker(
                id="input",
                defaultValue="2020-09-02T14:00:00.000-05:00"
            )
        ], width={'size':4}),
        dbc.Col([
            dbc.Label('Output component'),
            dash_cool_components.DateTimePicker(
                id="output",
            )
        ], width={'size':4}),
        dbc.Col([
            dbc.Label('Output String'),
            dbc.Input(id='output-text')
        ],width={'size':4}),
    ]),
    html.Div(id='hidden')
], style={'marginTop': '200px'})

@app.callback(
    Output('output', 'defaultValue'),
    [Input('output-text', 'value')]
)
def test(value):
    print(value)
    return value
'''
@app.callback(
    [Output('output', 'defaultValue'), Output('output-text', 'value')],
    [Input('input', 'value')]
)
def timezone_test(value):
    print('out', value)
    return value, value
'''

if __name__ == '__main__':
    app.run_server(debug=True)
