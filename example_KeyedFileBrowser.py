import dash_cool_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc


app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

dir_dict = [
    {'key': 'dir1/', 'size': 1},
    {'key': 'dir1/my_image.jpeg', 'modified': 141, 'size': 2782874},
    {'key': 'dir2/', 'size': 1},
    {'key': 'dir2/other_image.tif', 'modified': 100, 'size': 499240007}
]

app.layout = dbc.Container([
    dbc.Row([
        dbc.Col(
            width={'size':4}
        ),
        dbc.Col(
            dash_cool_components.KeyedFileBrowser(
                id="input",
                files=dir_dict
            ), width={'size':4}
        ),
        dbc.Col([
            dbc.Label('Selected path'),
            dbc.Input(
                id="output",
            ),
        ], width={'size':4}),
        dbc.Col(
            dbc.Button('Update files tree', id='update_files_tree'),
            width={'size':12}
        )
    ]),
], style={'marginTop': '200px'})

@app.callback(
    Output('input', 'files'),
    [Input('update_files_tree', 'n_clicks')]
)
def update_files_tree(click):
    if click:
        global dir_dict
        dir_dict.append({'key': 'add_file.jpg', 'modified': 100, 'size': 499240007})
        return dir_dict

    return dash.no_update

@app.callback(
    Output('output', 'value'),
    [Input('input', 'selectedPath')]
)
def timezone_test(value):
    #print('out', value)
    return value


if __name__ == '__main__':
    app.run_server(debug=True)
