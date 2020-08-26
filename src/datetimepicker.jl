# AUTO GENERATED FILE - DO NOT EDIT

export datetimepicker

"""
    datetimepicker(;kwargs...)

A DateTimePicker component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `value` (String; optional): The value displayed in the input.
- `style` (Dict; optional)
"""
function datetimepicker(; kwargs...)
        available_props = Symbol[:id, :value, :style]
        wild_props = Symbol[]
        return Component("datetimepicker", "DateTimePicker", "dash_cool_components", available_props, wild_props; kwargs...)
end

