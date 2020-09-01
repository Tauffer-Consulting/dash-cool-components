# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TagInput(Component):
    """A TagInput component.


Keyword arguments:
- id (string; optional)
- wrapperStyle (dict; optional)
- tagStyle (dict; optional)
- inputStyle (dict; optional)
- tagDeleteStyle (dict; optional)
- placeholder (string; optional)
- value (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, wrapperStyle=Component.UNDEFINED, tagStyle=Component.UNDEFINED, inputStyle=Component.UNDEFINED, tagDeleteStyle=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'value']
        self._type = 'TagInput'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TagInput, self).__init__(**args)
