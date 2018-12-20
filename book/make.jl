using Documenter
using JuliaForDataScience

makedocs(
    sitename = "JuliaForDataScience",
    format = Documenter.HTML(),
    modules = [JuliaForDataScience]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl"
)
