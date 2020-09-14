# AUTO GENERATED FILE - DO NOT EDIT

export ''_taginput

"""
    ''_taginput(;kwargs...)

A TagInput component.
TagInput is an input for creating tags.
The input is fully customizable and its current added tags
can be accessed via the the `value` property.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `value` (optional): The input's current tags.. value has the following type: Array of lists containing elements 'index', 'displayValue'.
Those elements have the following types:
  - `index` (Real; optional)
  - `displayValue` (String; optional)s
- `wrapperStyle` (Dict | String; optional): The component wrapper's style.
- `tagStyle` (Dict | String; optional): The tag's style.
- `inputStyle` (Dict | String; optional): The text input's style.
- `tagDeleteStyle` (Dict | String; optional): The tag delete button's style.
- `placeholder` (String; optional): Placeholder for the text input.
- `injectedTags` (optional): Inject these tags into the component. They will be rendered on
the next React commit. This replaces the component's actual tags.. injectedTags has the following type: Array of lists containing elements 'index', 'displayValue'.
Those elements have the following types:
  - `index` (Real; optional)
  - `displayValue` (String; optional)s
"""
function ''_taginput(; kwargs...)
        available_props = Symbol[:id, :value, :wrapperStyle, :tagStyle, :inputStyle, :tagDeleteStyle, :placeholder, :injectedTags]
        wild_props = Symbol[]
        return Component("''_taginput", "TagInput", "dash_cool_components", available_props, wild_props; kwargs...)
end

