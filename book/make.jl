using Documenter
using JuliaForDataScience

makedocs(
    sitename = "JuliaForDataScience",
    format = Documenter.HTML(),
    modules = [JuliaForDataScience],
    pages = [
        "00-index.md",
        "01-whyjulia.md",
        "02-juliabasics.md",
        "03-visualization.md",
        "JuliaDB" => [
            "juliadb.md",
            "juliadb_diamonds.md"
        ],
        "onlinestats.md"
    ]
)

deploydocs(
    repo = "github.com/joshday/JuliaForDataScience.jl"
)
