```@setup viz
using Plots
ENV["GKSwstype"] = "100"
gr()
```

# 3. Data Visualization

## 3.1 Intro

There are several plotting packages in Julia, but in this book we will focus on 
[Plots.jl](https://github.com/JuliaPlots/Plots.jl).  Plots wraps an intuitive interface 
around multiple plotting backends, allowing you to switch from a fast-rendering static plot 
to an interactive javascript plot without changing your code.

The backends we'll use in this section are [GR.jl](https://github.com/jheinen/GR.jl) and 
[https://plot.ly](https://plot.ly), both of which come installed with Plots.

For the full Plots documentation, click [here](http://docs.juliaplots.org/latest/).

## 3.2 The Plots Interface

```@example viz
y = randn(50)

plot(y)

png("viz_ex1.png")  # hide
```

![](viz_ex1.png)
