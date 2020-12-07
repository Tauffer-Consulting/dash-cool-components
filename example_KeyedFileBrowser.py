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
    {'key': 'dir2/other_image.tif', 'modified': 100, 'size': 499240007},
    {'key': 'dir2/other_image.tif', 'modified': 100, 'size': 499240007}
]

#test = [{'key': 'files2/102086.nwb', 'modified': 144, 'size': 2782874}, {'key': 'files2/GPi12_LRDL_Visual_Cue_Setup2_20191230_164119.mat', 'modified': 10, 'size': 126624}, {'key': 'files2/nwb_files/102086.nwb', 'modified': 144, 'size': 2782874}, {'key': 'files2/nwb_files/102511.nwb', 'modified': 124, 'size': 3086872}, {'key': 'files2/nwb_files/oephys_dataset_original/raw_data/Emx1-s_highzoom/102086_2.tif', 'modified': 3, 'size': 499240007}, {'key': 'files2/h5_files/102086.h5', 'modified': 40, 'size': 129986224}, {'key': 'files2/', 'modified': None, 'size': 0}, {'key': 'files2/nwb_files/', 'modified': None, 'size': 0}, {'key': 'files2/nwb_files/oephys_dataset_original/', 'modified': None, 'size': 0}, {'key': 'files2/nwb_files/oephys_dataset_original/raw_data/', 'modified': None, 'size': 0}, {'key': 'files2/nwb_files/oephys_dataset_original/raw_data/Emx1-s_highzoom/', 'modified': None, 'size': 0}, {'key': 'files2/h5_files/', 'modified': None, 'size': 0}]

app.layout = dbc.Container([
    dbc.Row([
        dbc.Col(
            width={'size':4}
        ),
        dbc.Col(
            dash_cool_components.KeyedFileBrowser(
                id="input",
                files=dir_dict,
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
