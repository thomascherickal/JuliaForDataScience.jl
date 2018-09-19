**Julia for Data Science** exists to help people get started with data science tasks using Julia.

**We are dedicated to keeping material up to date and focused on Julia 1.0 and beyond.**

To that end, only packages that are well supported in Julia 1.0 will be covered. Many existing tutorials have out-of-date information (e.g. using the old package manager or unmaintained packages), whereas this book is a "living document" that stays current with the state of data science in Julia.

# Help Write This Book

This book uses [Reproducible.jl](https://github.com/joshday/Reproducible.jl) to generate markdown files with interpolated code blocks.  These files are then sent to [GitBook](https://www.gitbook.com), which generates the website.

[![Build Status](https://travis-ci.org/joshday/JuliaForDataScience.jl.svg?branch=master)](https://travis-ci.org/joshday/JuliaForDataScience.jl)

## Simple Edits

Click the "Edit on GitHub" button and make a pull request!

## Bigger Edits

1. Clone the repo
2. Generate the markdown by running the command below in the repo's root directory.
3. Make a pull request!

`julia -e 'using Reproducible, Glob; Reproducible.build(glob("*.md"))'`

