```@setup viz
using Plots
ENV["GKSwstype"] = "100"
gr()
```

![](http://docs.juliaplots.org/latest/examples/img/lorenz.gif)

# 2. Data Visualization

## 2.1 Intro

There are several plotting packages in Julia, but in this book we will focus on 
[Plots.jl](https://github.com/JuliaPlots/Plots.jl).  Plots wraps an intuitive interface 
around multiple plotting backends, allowing you to switch from a fast-rendering static plot 
to an interactive javascript plot without changing your code.

The backends we'll use in this chapter are [GR.jl](https://github.com/jheinen/GR.jl) and 
[https://plot.ly](https://plot.ly), both of which come installed with Plots.

For the full Plots documentation, click [here](http://docs.juliaplots.org/latest/).

## 2.2 The Plots.jl Way 

Plots is super powerful, but requires learning some core components of how it works.  It relies
heavily on multiple dispatch and easy-to-use conventions.


### Each type of plot has its own `seriestype`

The type of plot is defined by the `seriestype`.  Calling a function 

```
scatter(x)
```

is simply a shortcut for 

```
plot(x, seriestype = :scatter)
```

### Arguments are passed column-wise

Notice that the `label` argument is a 1×3 Matrix (and not a Vector).  Each column of `label` is then mapped
to the respective column of `x` as its label.

```@example viz
x = [(sin(i) + j) for i in 1:10, j in 1:3]

plot(x, label = ["one" "two" "three"])
svg("columnwise.svg") # hide
```
![](columnwise.svg)

### Arguments have aliases

Aliases are useful for generating plots quickly for one-off analyses.  For clarity, they should
be left out of reproducible code, but they are great for iterating on a plot until you get 
the visualization you want.

```@example viz
p1 = plot(x, lab = [1 2 3])
p2 = plot(x, label = ["1" "2" "3"])
plot(p1, p2)
svg("aliases.svg") # hide
```
![](aliases.svg)

### Some arguments are "magic"

There are some magic arguments like `marker` for which you can provide a tuple of different-typed
things, that will get intelligently mapped to other arguments based on their type.

```@example viz
p1 = plot(x)

p2 = plot(x, marker = (1:10, :blue, .2))  # set size, color, and alpha

p3 = plot(x, marker = :auto)

p4 = plot(x, linestyle = :auto)

plot(p1, p2, p3, p4)
svg("magic.svg")  # hide
```
![](magic.svg)

# 2.3