```@setup viz
using Plots
ENV["GKSwstype"] = "100"
gr()
```

# 2. Data Visualization

## 2.1 Intro

There are several plotting packages in Julia, but in this book we will focus on 
[Plots.jl](https://github.com/JuliaPlots/Plots.jl).  Plots wraps an intuitive interface 
around multiple plotting backends, allowing you to switch from a fast-rendering static plot 
to an interactive javascript plot without changing your code.

The backends we'll use in this section are [GR.jl](https://github.com/jheinen/GR.jl) and 
[https://plot.ly](https://plot.ly), both of which come installed with Plots.

For the full Plots documentation, click [here](http://docs.juliaplots.org/latest/).

## 2.2 The Plots Interface 

Plots is super powerful, but requires learning some core components of how it works:

### Arguments are passed column-wise

Notice that the `labels` argument is a 1×3 Matrix.  Each column of `labels` is then mapped
to the respective column of `x` as the label.

```@example viz
x = randn(10, 3)

plot(x, 3, labels = ["one" "two" "three])
png("columnwise.png") #hide
```
![](columnwise.png)

### Arguments have aliases


### Series Types

The type of plot is defined by the `seriestype`

```@example viz
y = randn(50)

plot(y)
png("viz_ex1.png")  # hide
```

![](viz_ex1.png)
