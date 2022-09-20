
module DashCoolComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.1.5"

include("jl/datetimepicker.jl")
include("jl/grammarrelationship.jl")
include("jl/keyedfilebrowser.jl")
include("jl/taginput.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_cool_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_cool_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_cool_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
