# AUTO GENERATED FILE - DO NOT EDIT

export datetimepicker

"""
    datetimepicker(;kwargs...)

A DateTimePicker component.
DateTimePicker is a datetime input component.
The inputs can be initialized with the `defaultValue` property and the
input date, on ISO format, is specified with the `value` property.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `dateInputStyle` (Dict | String; optional): The date input's style.
- `locale` (a value equal to: "pt", 'pt-BR', 'en-US', "en-IN", "es", "it", "de"; optional)
- `placeholder` (String; optional): The date input placeholder.
- `renderTimezone` (Bool; optional): Defines if the timezone input should be rendered. Defaults to true.
- `style` (Dict | String; optional): The container's style.
- `timezoneInputStyle` (Dict; optional): The timezone input's container style.
- `timezonePlaceholder` (String; optional): The timezone input placeholder.
- `value` (String; optional): The input's value. Accepts values on the ISO format.
"""
function datetimepicker(; kwargs...)
        available_props = Symbol[:id, :dateInputStyle, :locale, :placeholder, :renderTimezone, :style, :timezoneInputStyle, :timezonePlaceholder, :value]
        wild_props = Symbol[]
        return Component("datetimepicker", "DateTimePicker", "dash_cool_components", available_props, wild_props; kwargs...)
end

