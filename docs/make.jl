using Documenter, JuliaForDataScience

using Plots
ENV["GKSwstype"] = "100"
gr()

makedocs(
    format = [:html],
    sitename = "Julia For Data Science",
    authors = "Josh Day",
    clean = true,
    pages = [
        "whyjulia.md",
        "index.md",
        "viz.md",
        "tabular.md",
        "interact.md"
    ]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl.git",
    target = "build",
    julia = "1.0",
    deps = nothing,
    make = nothing
)
