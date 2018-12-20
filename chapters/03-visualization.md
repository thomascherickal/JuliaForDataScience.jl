![](https://julialang.org/images/waves.gif)

# Plots.jl

There are a variety of data viz tools in Julia, but this chapter will focus on the [Plots](https://github.com/JuliaPlots/Plots.jl) package, which provides an interface for writing plot commands that work with multiple "backends", including [GR](https://github.com/jheinen/GR.jl) and [plotly](https://plot.ly)


```julia;run;
using Plots

scatter(rand(10))
```

```julia;hide;
png("plot1.png")
```
![](plot1.png)