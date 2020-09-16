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
            dash_cool_components.TagInput(
                id="input",
            ), width={'size':4}
        ),
        dbc.Col([
            dbc.Label('Current tags'),
            dbc.Input(
                id="output",
            ),
        ], width={'size':4})
    ]),
    html.Div(id='hidden')
], style={'marginTop': '200px'})

@app.callback(
    Output('output', 'value'),
    [Input('input', 'value')]
)
def timezone_test(value):
    if value:
        tags = [e['displayValue'] for e in value]
        return tags


if __name__ == '__main__':
    app.run_server(debug=True)
