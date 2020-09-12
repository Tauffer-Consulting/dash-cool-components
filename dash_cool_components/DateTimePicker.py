# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateTimePicker(Component):
    """A DateTimePicker component.


Keyword arguments:
- datetime (string; optional)
- renderTimezone (boolean; default True)
- dateInputStyle (dict; default {
    border: 'solid 1px',
    borderColor: '#ced4da',
    borderRadius: '2px',
    color: '#545057',
    height: '33px',
    backgroundColor: 'white',
})
- timezoneInputStyle (dict; optional)
- id (string; optional)
- value (string; optional)"""
    @_explicitize_args
    def __init__(self, datetime=Component.UNDEFINED, renderTimezone=Component.UNDEFINED, dateInputStyle=Component.UNDEFINED, timezoneInputStyle=Component.UNDEFINED, id=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['datetime', 'renderTimezone', 'dateInputStyle', 'timezoneInputStyle', 'id', 'value']
        self._type = 'DateTimePicker'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['datetime', 'renderTimezone', 'dateInputStyle', 'timezoneInputStyle', 'id', 'value']
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
