using Documenter
using JuliaForDataScience

makedocs(
    sitename = "JuliaForDataScience",
    format = :html,
    modules = [JuliaForDataScience]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl"
)
