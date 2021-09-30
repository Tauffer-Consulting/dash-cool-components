# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KeyedFileBrowser(Component):
    """A KeyedFileBrowser component.
KeyedFileBrowser is a component that renders a file browser based on a entry JSON.
The files and folders can be selected and the selected path can be
accessed via the `selectedPath` property.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- selectedPath (string; optional): The current selected path in the browser.
- files (dict; optional): The file tree to be displayed in the browser.
Each entry in the array must be an object with the `key`
property, which specifies it's location in the tree. Other
properties are `modified` and `size`.
To be able to receive the path selection feedback, you must
enter keys for both files and folders. files has the following type: list of dicts containing keys 'key', 'modified', 'size'.
Those keys have the following types:
  - key (string; required)
  - modified (number; optional)
  - size (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectedPath=Component.UNDEFINED, files=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectedPath', 'files']
        self._type = 'KeyedFileBrowser'
        self._namespace = 'dash_cool_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selectedPath', 'files']
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
