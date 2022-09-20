from subprocess import call
import dash_cool_components
from dash import dash, html, Input, Output, callback, no_update

app = dash.Dash(__name__)

data = {
  "0": {
    "text": "I",
    "pos": "pronoun",
    "posTag": "PRON",
    "head": {
      "ind": "1",
      "relationship": "nominal subject",
      "relationshipTag": "nsubj"
    },
    "children": []
  },
  "1": {
    "text": "had",
    "pos": "verb",
    "posTag": "VERB",
    "head": None,
    "children": [
      {
        "ind": "0",
        "text": "I"
      },
      {
        "ind": "3",
        "text": "apple"
      }
    ]
  },
  "2": {
    "text": "an",
    "pos": "determiner",
    "posTag": "DET",
    "head": {
      "ind": "3",
      "relationship": "determiner",
      "relationshipTag": "det"
    },
    "children": []
  },
  "3": {
    "text": "apple",
    "pos": "noun",
    "posTag": "NOUN",
    "head": {
      "ind": "1",
      "relationship": "direct object",
      "relationshipTag": "dobj"
    },
    "children": [
      {
        "ind": "2",
        "text": "an"
      }
    ]
  }
}

app.layout = html.Div([
    html.Div(
        dash_cool_components.GrammarRelationship(id='input', data=data),
        style={'height': '20vh', "display": "flex", "align-items": "center", "justify-content": "center"}
    ),
    html.Div(
        html.Label('Selected value: ', id='output'),
        style={'height': '20vh', "display": "flex", "align-items": "center", "justify-content": "center"}
    )
])

@callback(
    Output('output', 'children'),
    [Input('input', 'selectedText')]
)
def display_output(selectedText):
    print(selectedText)
    if not selectedText:
        return no_update
    return 'Selected value: {}'.format(
        selectedText.get('text', 'No text selected')
    )


if __name__ == '__main__':
    app.run_server(debug=True)
