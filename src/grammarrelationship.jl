# AUTO GENERATED FILE - DO NOT EDIT

export grammarrelationship

"""
    grammarrelationship(;kwargs...)

A GrammarRelationship component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (optional): The data to be displayed. data has the following type: Dict with Strings as keys and values of type lists containing elements 'text', 'pos', 'head', 'posTag', 'children'.
Those elements have the following types:
  - `text` (String; optional)
  - `pos` (String; optional)
  - `head` (optional): . head has the following type: lists containing elements 'ind', 'relationship', 'relationshipTag'.
Those elements have the following types:
  - `ind` (String; optional)
  - `relationship` (String; optional)
  - `relationshipTag` (String; optional)
  - `posTag` (String; optional)
  - `children` (Bool | Real | String | Dict | Array; optional)
"""
function grammarrelationship(; kwargs...)
        available_props = Symbol[:id, :data]
        wild_props = Symbol[]
        return Component("grammarrelationship", "GrammarRelationship", "dash_cool_components", available_props, wild_props; kwargs...)
end

