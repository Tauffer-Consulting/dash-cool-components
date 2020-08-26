# AUTO GENERATED FILE - DO NOT EDIT

export fileexplorer

"""
    fileexplorer(;kwargs...)

A FileExplorer component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `selectedPath` (String; optional): A selectedPath that will be printed when this component is rendered.
- `value` (Array; optional): The value displayed in the input.
"""
function fileexplorer(; kwargs...)
        available_props = Symbol[:id, :selectedPath, :value]
        wild_props = Symbol[]
        return Component("fileexplorer", "FileExplorer", "dash_cool_components", available_props, wild_props; kwargs...)
end

