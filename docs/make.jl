using Documenter, JuliaForDataScience

makedocs(
    format = [:html],
    modules = [JuliaForDataScience],
    sitename = "Julia For Data Science",
    authors = "Josh Day",
    clean = true,
    pages = Any[
        "intro.md",
        "juliadb.md",
        "viz.md"
    ]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl.git",
    julia = "1.0",
    target = "build",
    osname = "linux",
    deps = nothing,
    make = nothing
)
