# AUTO GENERATED FILE - DO NOT EDIT

export ''_index

"""
    ''_index(;kwargs...)

An index component.
DateTimePicker is a datetime input component.
The inputs can be initialized with the `defaultValue` property and the
input date, on ISO format, is specified with the `value` property.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `value` (String; optional): The input's current value
- `defaultValue` (String; optional): The input's default value. Accepts values on the ISO format.
- `renderTimezone` (Bool; optional): Defines if the timezone input should be rendered. Defaults to true.
- `style` (Dict | String; optional): The container's style.
- `dateInputStyle` (Dict | String; optional): The date input's style.
- `timezoneInputStyle` (Dict; optional): The timezone input's container style.
"""
function ''_index(; kwargs...)
        available_props = Symbol[:id, :value, :defaultValue, :renderTimezone, :style, :dateInputStyle, :timezoneInputStyle]
        wild_props = Symbol[]
        return Component("''_index", "index", "dash_cool_components", available_props, wild_props; kwargs...)
end

