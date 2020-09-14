# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TagInput(Component):
    """A TagInput component.
TagInput is an input for creating tags.
The input is fully customizable and its current added tags
can be accessed via the the `value` property.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- value (dict; optional): The input's current tags. value has the following type: list of dicts containing keys 'index', 'displayValue'.
Those keys have the following types:
  - index (number; optional)
  - displayValue (string; optional)
- wrapperStyle (dict | string; optional): The component wrapper's style.
- tagStyle (dict | string; optional): The tag's style.
- inputStyle (dict | string; optional): The text input's style.
- tagDeleteStyle (dict | string; optional): The tag delete button's style.
- placeholder (string; optional): Placeholder for the text input.
- injectedTags (dict; optional): Inject these tags into the component. They will be rendered on
the next React commit. This replaces the component's actual tags. injectedTags has the following type: list of dicts containing keys 'index', 'displayValue'.
Those keys have the following types:
  - index (number; optional)
  - displayValue (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, wrapperStyle=Component.UNDEFINED, tagStyle=Component.UNDEFINED, inputStyle=Component.UNDEFINED, tagDeleteStyle=Component.UNDEFINED, placeholder=Component.UNDEFINED, injectedTags=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'injectedTags']
        self._type = 'TagInput'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'wrapperStyle', 'tagStyle', 'inputStyle', 'tagDeleteStyle', 'placeholder', 'injectedTags']
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
