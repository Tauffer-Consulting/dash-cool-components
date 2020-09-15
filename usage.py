import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

app.layout = dbc.Container([
    dbc.Row([
        dbc.Col(
            width={'size':4}
        ),
        dbc.Col(
            dash_cool_components.DateTimePicker(
                id="input",
                defaultValue="2020-09-02T11:00:00.000-07:00"
            ), width={'size':4}
        ),
        dbc.Col(
            width={'size':4}
        )
    ]),
    html.Div(id='hidden')
], style={'marginTop': '200px'})

@app.callback(
    Output('hidden', 'children'),
    [Input('input', 'value')]
)
def timezone_test(value):
    print('out', value)

""" @app.callback(Output('output', 'injectedTags'), [Input('input', 'value')])
def display_output(value):
    print('input', value)
    if value is not None:
        return value """

if __name__ == '__main__':
    app.run_server(debug=True)
