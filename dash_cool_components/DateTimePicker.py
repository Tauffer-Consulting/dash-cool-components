# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateTimePicker(Component):
    """A DateTimePicker component.


Keyword arguments:
- id (string; optional)
- datetime (string; default undefined)
- timezone (string; default undefined)
- value (dict; optional)
- renderTimezone (boolean; default True)
- style (dict; default { "border": "solid 1px", "borderColor": "#ced4da", "borderRadius": "2px", "color": '#545057', 'height': '33px', 'backgroundColor': 'white' })"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, datetime=Component.UNDEFINED, timezone=Component.UNDEFINED, value=Component.UNDEFINED, renderTimezone=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'datetime', 'timezone', 'value', 'renderTimezone', 'style']
        self._type = 'DateTimePicker'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'datetime', 'timezone', 'value', 'renderTimezone', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DateTimePicker, self).__init__(**args)
