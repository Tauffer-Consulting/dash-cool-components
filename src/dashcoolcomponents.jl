# AUTO GENERATED FILE - DO NOT EDIT

export dashcoolcomponents

"""
    dashcoolcomponents(;kwargs...)

A DashCoolComponents component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; required): A label that will be printed when this component is rendered.
- `value` (String; optional): The value displayed in the input.
"""
function dashcoolcomponents(; kwargs...)
        available_props = Symbol[:id, :label, :value]
        wild_props = Symbol[]
        return Component("dashcoolcomponents", "DashCoolComponents", "dash_cool_components", available_props, wild_props; kwargs...)
end

