# AUTO GENERATED FILE - DO NOT EDIT

export fileexplorer

"""
    fileexplorer(;kwargs...)

A FileExplorer component.

Keyword arguments:
- `id` (String; optional)
- `selectedPath` (String; optional)
- `value` (Array; optional)
"""
function fileexplorer(; kwargs...)
        available_props = Symbol[:id, :selectedPath, :value]
        wild_props = Symbol[]
        return Component("fileexplorer", "FileExplorer", "dash_cool_components", available_props, wild_props; kwargs...)
end

