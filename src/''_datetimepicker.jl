# AUTO GENERATED FILE - DO NOT EDIT

export ''_datetimepicker

"""
    ''_datetimepicker(;kwargs...)

A DateTimePicker component.

Keyword arguments:
- `datetime` (String; optional)
- `renderTimezone` (Bool; optional)
- `dateInputStyle` (Dict; optional)
- `timezoneInputStyle` (Dict; optional)
- `id` (String; optional)
- `value` (String; optional)
"""
function ''_datetimepicker(; kwargs...)
        available_props = Symbol[:datetime, :renderTimezone, :dateInputStyle, :timezoneInputStyle, :id, :value]
        wild_props = Symbol[]
        return Component("''_datetimepicker", "DateTimePicker", "dash_cool_components", available_props, wild_props; kwargs...)
end

