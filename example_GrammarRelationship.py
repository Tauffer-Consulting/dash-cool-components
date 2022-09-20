import dash_cool_components
from dash import dash, html

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
        style={'height': '100vh', "display": "flex", "align-items": "center", "justify-content": "center"}
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
