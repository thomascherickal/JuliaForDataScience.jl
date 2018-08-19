using Documenter, JuliaForDataScience

makedocs(
    format = :html,
    modules = [JuliaForDataScience],
    sitename = "Julia For Data Science",
    pages = [
        "intro.md"
    ]
)

deploydocs(
    repo   = "github.com/USER/PKG.jl.git",
    target = "build",
    deps   = nothing,
    make   = nothing
)