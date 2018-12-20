![](https://julialang.org/images/waves.gif)

```@setup viz
ENV["GKSwstype"] = "100"
```

# Data Visualization

## Plots.jl

There are a variety of data viz tools in Julia, but this chapter will focus on the [Plots](https://github.com/JuliaPlots/Plots.jl) package, which provides an interface for writing plot commands that work with multiple "backends", including [GR](https://github.com/jheinen/GR.jl) and [plotly](https://plot.ly)


```@example setup
using Plots

scatter(rand(10))

png("plot1.png"); nothing # hide
```

![](plot1.png)