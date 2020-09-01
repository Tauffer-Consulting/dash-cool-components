# AUTO GENERATED FILE - DO NOT EDIT

export keyedfilebrowser

"""
    keyedfilebrowser(;kwargs...)

A KeyedFileBrowser component.

Keyword arguments:
- `id` (String; optional)
- `selectedPath` (String; optional)
- `value` (Array; optional)
"""
function keyedfilebrowser(; kwargs...)
        available_props = Symbol[:id, :selectedPath, :value]
        wild_props = Symbol[]
        return Component("keyedfilebrowser", "KeyedFileBrowser", "dash_cool_components", available_props, wild_props; kwargs...)
end

