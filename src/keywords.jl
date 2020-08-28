# AUTO GENERATED FILE - DO NOT EDIT

export keywords

"""
    keywords(;kwargs...)

A Keywords component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `wrapperStyle` (Dict; optional)
- `tagStyle` (Dict; optional)
- `inputStyle` (Dict; optional)
- `tagDeleteStyle` (Dict; optional)
- `placeholder` (String; optional)
"""
function keywords(; kwargs...)
        available_props = Symbol[:id, :wrapperStyle, :tagStyle, :inputStyle, :tagDeleteStyle, :placeholder]
        wild_props = Symbol[]
        return Component("keywords", "Keywords", "dash_cool_components", available_props, wild_props; kwargs...)
end

