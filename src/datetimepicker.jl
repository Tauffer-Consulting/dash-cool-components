# AUTO GENERATED FILE - DO NOT EDIT

export datetimepicker

"""
    datetimepicker(;kwargs...)

A DateTimePicker component.

Keyword arguments:
- `id` (String; optional)
- `datetime` (String; optional)
- `timezone` (String; optional)
- `value` (Dict; optional)
- `renderTimezone` (Bool; optional)
- `style` (Dict; optional)
"""
function datetimepicker(; kwargs...)
        available_props = Symbol[:id, :datetime, :timezone, :value, :renderTimezone, :style]
        wild_props = Symbol[]
        return Component("datetimepicker", "DateTimePicker", "dash_cool_components", available_props, wild_props; kwargs...)
end

