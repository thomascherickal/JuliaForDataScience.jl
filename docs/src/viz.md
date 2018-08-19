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

Notice that the `label` argument is a 1×3 Matrix (and not a Vector).  Each column of `label` is then mapped
to the respective column of `x` as its label.

```@example viz
x = [(sin(i) + j) for i in 1:10, j in 1:3]

plot(x, label = ["one" "two" "three"])
png("columnwise.png") # hide
```
![](columnwise.png)

### Arguments have aliases

Aliases are useful for generating plots quickly for one-off analyses.  For clarity, they should
be left out of reproducible code, but they are great for iterating on a plot until you get 
the visualization you want.

```@example viz
p1 = plot(x, lab = [1 2 3])
p2 = plot(x, label = ["1" "2" "3"])
plot(p1, p2)
png("aliases.png") # hide
```
![](aliases.png)


### Series Types

The type of plot is defined by the `seriestype`

```@example viz
y = randn(50)

plot(y)
png("viz_ex1.png")  # hide
```

![](viz_ex1.png)
