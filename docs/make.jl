using Documenter, JuliaForDataScience

makedocs(
    format = [:html],
    sitename = "Julia For Data Science",
    authors = "Josh Day",
    clean = true,
    pages = Any[
        "whyjulia.md",
        "intro.md",
        "juliadb.md",
        "viz.md"
    ]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl.git",
    julia = "1.0",
    deps = nothing,
    make = nothing
)
