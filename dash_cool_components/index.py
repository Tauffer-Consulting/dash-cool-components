# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class index(Component):
    """An index component.
DateTimePicker is a datetime input component.
The inputs can be initialized with the `defaultValue` property and the
input date, on ISO format, is specified with the `value` property.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- value (string; optional): The input's current value
- defaultValue (string; optional): The input's default value. Accepts values on the ISO format.
- renderTimezone (boolean; default True): Defines if the timezone input should be rendered. Defaults to true.
- style (dict | string; optional): The container's style.
- dateInputStyle (dict | string; optional): The date input's style.
- timezoneInputStyle (dict; optional): The timezone input's container style."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, renderTimezone=Component.UNDEFINED, style=Component.UNDEFINED, dateInputStyle=Component.UNDEFINED, timezoneInputStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'defaultValue', 'renderTimezone', 'style', 'dateInputStyle', 'timezoneInputStyle']
        self._type = 'index'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'defaultValue', 'renderTimezone', 'style', 'dateInputStyle', 'timezoneInputStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(index, self).__init__(**args)
