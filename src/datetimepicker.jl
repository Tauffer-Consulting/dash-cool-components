# AUTO GENERATED FILE - DO NOT EDIT

export datetimepicker

"""
    datetimepicker(;kwargs...)

A DateTimePicker component.

Keyword arguments:
- `id` (String; optional)
- `value` (String; optional)
- `style` (Dict; optional)
"""
function datetimepicker(; kwargs...)
        available_props = Symbol[:id, :value, :style]
        wild_props = Symbol[]
        return Component("datetimepicker", "DateTimePicker", "dash_cool_components", available_props, wild_props; kwargs...)
end

