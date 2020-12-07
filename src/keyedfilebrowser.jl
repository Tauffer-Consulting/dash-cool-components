# AUTO GENERATED FILE - DO NOT EDIT

export keyedfilebrowser

"""
    keyedfilebrowser(;kwargs...)

A KeyedFileBrowser component.
KeyedFileBrowser is a component that renders a file browser based on a entry JSON.
The files and folders can be selected and the selected path can be
accessed via the `selectedPath` property.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `selectedPath` (String; optional): The current selected path in the browser.
- `files` (optional): The file tree to be displayed in the browser.
Each entry in the array must be an object with the `key`
property, which specifies it's location in the tree. Other
properties are `modified` and `size`.
To be able to receive the path selection feedback, you must
enter keys for both files and folders.. files has the following type: Array of lists containing elements 'key', 'modified', 'size'.
Those elements have the following types:
  - `key` (String; required)
  - `modified` (Real; optional)
  - `size` (Real; optional)s
- `momentFiles` (optional): . momentFiles has the following type: Array of lists containing elements 'key', 'modified', 'size'.
Those elements have the following types:
  - `key` (String; required)
  - `modified` (Real; optional)
  - `size` (Real; optional)s
"""
function keyedfilebrowser(; kwargs...)
        available_props = Symbol[:id, :selectedPath, :files, :momentFiles]
        wild_props = Symbol[]
        return Component("keyedfilebrowser", "KeyedFileBrowser", "dash_cool_components", available_props, wild_props; kwargs...)
end

