import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

app.layout = dbc.Container([
    dbc.Row([
        dbc.Col(
            dash_cool_components.TagInput(
                id='input',
                placeholder='input'
            ), width={'size':6}
        ),
        dbc.Col(
            dash_cool_components.TagInput(id='output', placeholder='output'),
            width={'size':6}
        )
    ]),
    html.Div(id='hidden')
], style={'margin-top': '200px'})

@app.callback(
    Output('hidden', 'children'),
    [Input('output', 'value')]
)
def output_test(value):
    print('out', value)

@app.callback(Output('output', 'value'), [Input('input', 'value')])
def display_output(value):
    if value is not None:
        return value

if __name__ == '__main__':
    app.run_server(debug=True)
