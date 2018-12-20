var documenterSearchIndex = {"docs": [

{
    "location": "00-index/#",
    "page": "Julia For Data Science",
    "title": "Julia For Data Science",
    "category": "page",
    "text": ""
},

{
    "location": "00-index/#Julia-For-Data-Science-1",
    "page": "Julia For Data Science",
    "title": "Julia For Data Science",
    "category": "section",
    "text": ""
},

{
    "location": "00-index/#Table-of-Contents-1",
    "page": "Julia For Data Science",
    "title": "Table of Contents",
    "category": "section",
    "text": ""
},

{
    "location": "01-whyjulia/#",
    "page": "Why Julia?",
    "title": "Why Julia?",
    "category": "page",
    "text": "(Image: )"
},

{
    "location": "01-whyjulia/#Why-Julia?-1",
    "page": "Why Julia?",
    "title": "Why Julia?",
    "category": "section",
    "text": "If you are interested in how and why Julia exists at all, a good read by its creators is here: Why We Created Julia.  Below is  an excerpt:We love [Matlab/Lisp/Python/Ruby/Perl/Mathematica/R/C]; they are wonderful and powerful. For the work we do — scientific computing, machine learning, data mining, large-scale linear algebra, distributed and parallel computing — each one is perfect for some aspects of the work and terrible for others. Each one is a trade-off.  We are greedy: we want more."
},

{
    "location": "02-juliabasics/#",
    "page": "Julia Basics",
    "title": "Julia Basics",
    "category": "page",
    "text": ""
},

{
    "location": "02-juliabasics/#Julia-Basics-1",
    "page": "Julia Basics",
    "title": "Julia Basics",
    "category": "section",
    "text": ""
},

{
    "location": "02-juliabasics/#The-REPL-1",
    "page": "Julia Basics",
    "title": "The REPL",
    "category": "section",
    "text": "Your first usage of Julia will probably be with the REPL (read-eval-print-loop).x = 1\n\ny = 2.0"
},

{
    "location": "02-juliabasics/#Types-1",
    "page": "Julia Basics",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "02-juliabasics/#Multiple-Dispatch-1",
    "page": "Julia Basics",
    "title": "Multiple Dispatch",
    "category": "section",
    "text": ""
},

{
    "location": "02-juliabasics/#Package-Management-1",
    "page": "Julia Basics",
    "title": "Package Management",
    "category": "section",
    "text": ""
},

{
    "location": "03-visualization/#",
    "page": "Data Visualization",
    "title": "Data Visualization",
    "category": "page",
    "text": "(Image: )ENV[\"GKSwstype\"] = \"100\""
},

{
    "location": "03-visualization/#Data-Visualization-1",
    "page": "Data Visualization",
    "title": "Data Visualization",
    "category": "section",
    "text": ""
},

{
    "location": "03-visualization/#Plots.jl-1",
    "page": "Data Visualization",
    "title": "Plots.jl",
    "category": "section",
    "text": "There are a variety of data viz tools in Julia, but this chapter will focus on the Plots package, which provides an interface for writing plot commands that work with multiple \"backends\", including GR and plotlyusing Plots\n\nscatter(rand(10))\n\npng(\"plot1.png\"); nothing # hide(Image: )"
},

{
    "location": "juliadb/#",
    "page": "JuliaDB",
    "title": "JuliaDB",
    "category": "page",
    "text": "(Image: )"
},

{
    "location": "juliadb/#JuliaDB-1",
    "page": "JuliaDB",
    "title": "JuliaDB",
    "category": "section",
    "text": "JuliaDB is a package for working with large persistent data setsWe recognized the need for an all-Julia, end-to-end tool that canLoad multi-dimensional datasets quickly and incrementally. Index the data and perform filter, aggregate, sort and join operations. Save results and load them efficiently later. Use Julia\'s built-in parallelism to fully utilize any machine or cluster. We built JuliaDB to fill this void."
},

{
    "location": "juliadb_diamonds/#",
    "page": "JuliaDB Tutorial: Diamonds",
    "title": "JuliaDB Tutorial: Diamonds",
    "category": "page",
    "text": ""
},

{
    "location": "juliadb_diamonds/#JuliaDB-Tutorial:-Diamonds-1",
    "page": "JuliaDB Tutorial: Diamonds",
    "title": "JuliaDB Tutorial: Diamonds",
    "category": "section",
    "text": "using JuliaDB, RDatasets\nt = table(dataset(\"ggplot2\", \"diamonds\"))"
},

{
    "location": "onlinestats/#",
    "page": "OnlineStats: Parallelizable single-pass algorithms for statistics",
    "title": "OnlineStats: Parallelizable single-pass algorithms for statistics",
    "category": "page",
    "text": "(Image: )"
},

{
    "location": "onlinestats/#OnlineStats:-Parallelizable-single-pass-algorithms-for-statistics-1",
    "page": "OnlineStats: Parallelizable single-pass algorithms for statistics",
    "title": "OnlineStats: Parallelizable single-pass algorithms for statistics",
    "category": "section",
    "text": "OnlineStats is a Julia package which provides online algorithms for statistics, models, and data visualization. Online algorithms are well suited for streaming data or when data is too large to hold in memory. Observations are processed one at a time and all algorithms use O(1) memory."
},

]}
