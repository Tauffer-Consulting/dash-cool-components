# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KeyedFileBrowser(Component):
    """A KeyedFileBrowser component.


Keyword arguments:
- id (string; optional)
- selectedPath (string; optional)
- value (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectedPath=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectedPath', 'value']
        self._type = 'KeyedFileBrowser'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selectedPath', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(KeyedFileBrowser, self).__init__(**args)
