# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GrammarRelationship(Component):
    """A GrammarRelationship component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- data (dict; optional):
    The data to be displayed.

    `data` is a dict with strings as keys and values of type dict with
    keys:

    - children (boolean | number | string | dict | list; optional)

    - head (dict; optional)

        `head` is a dict with keys:

        - ind (string; optional)

        - relationship (string; optional)

        - relationshipTag (string; optional)

    - pos (string; optional)

    - posTag (string; optional)

    - text (string; optional)

- selectedText (dict; optional)

    `selectedText` is a dict with keys:

    - id (string; optional)

    - text (string; optional)

- style (dict; default {    "display": "flex",    "justify-content": "center",    "align-items": "center"})"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_cool_components'
    _type = 'GrammarRelationship'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, style=Component.UNDEFINED, selectedText=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'selectedText', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'selectedText', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GrammarRelationship, self).__init__(**args)
