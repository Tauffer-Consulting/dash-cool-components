import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__)

app.layout = html.Div([
    dash_cool_components.DateTimePicker(
        id='input',
        renderTimezone=True
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    if value is not None:
        output_div = html.Div([
            html.H4('Datetime: {}'.format(value['datetime'])),
            html.H4('Timezone: {}'.format(value['timezone']))
        ])
        return output_div

if __name__ == '__main__':
    app.run_server(debug=True)
