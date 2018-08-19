using Documenter, JuliaForDataScience

makedocs(
    format = [:html],
    sitename = "Julia For Data Science",
    authors = "Josh Day",
    clean = true,
    pages = [
        "whyjulia.md",
        "index.md",
        "juliadb.md",
        "viz.md"
    ]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl.git",
    target = "build",
    julia = "1.0",
    deps = nothing,
    make = nothing
)
