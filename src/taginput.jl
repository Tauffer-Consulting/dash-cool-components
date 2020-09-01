# AUTO GENERATED FILE - DO NOT EDIT

export taginput

"""
    taginput(;kwargs...)

A TagInput component.

Keyword arguments:
- `id` (String; optional)
- `wrapperStyle` (Dict; optional)
- `tagStyle` (Dict; optional)
- `inputStyle` (Dict; optional)
- `tagDeleteStyle` (Dict; optional)
- `placeholder` (String; optional)
- `value` (Array; optional)
"""
function taginput(; kwargs...)
        available_props = Symbol[:id, :wrapperStyle, :tagStyle, :inputStyle, :tagDeleteStyle, :placeholder, :value]
        wild_props = Symbol[]
        return Component("taginput", "TagInput", "dash_cool_components", available_props, wild_props; kwargs...)
end

