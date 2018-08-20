![](https://github.com/JuliaGraphics/julia-logo-graphics/raw/master/images/julia-logo-325-by-225.png)

# [0. Why Julia](@id why-julia)

If you are interested in why Julia exists at all, a good read by its creators is here:
[Why We Created Julia](https://julialang.org/blog/2012/02/why-we-created-julia).

The reason(s) that you should use Julia for data science is a different story.  If you're reading
this, it's likely that you are coming from another language like R, Matlab, or Python.

```@example
abstract type Language end 

# Julia
struct Julia <: Language end
is_open_source(::Julia) = true
fast_for_loops(::Julia) = true

# Matlab
struct Matlab <: Language end 
is_open_source(::Matlab) = false
fast_for_loops(::Matlab) = false

# R
struct R <: Language end 
is_open_source(::R) = true
fast_for_loops(::R) = false

# Python
struct Python <: Language end
is_open_source(::Python) = true
fast_for_loops(::Python) = false


langs = subtypes(Language)
parts = [is_open_source, fast_for_loops]
heatmap(string.(langs), string.(parts), [p(l()) for p in parts, l in langs], legend=false, color=:blues)
```


## 0.1 Getting Started

### Types


### Functions 

- A function can be written on a single line or multiple lines.

```@example
f(x) = x + x

function f(x)
    x + x
end
#hide
```

- The example above has one **positional** argument.  A Julia function can also have 
**keyword** arguments that are specified by name.

```@example keyword
function f(x, y; operation = +)
    operation(x, y)
end

f(1, 1)
#hide
```

```@example keyword
f(2, 1, operation = -)
#hide
```

- You can provide **type annotations** to limit what argument types the function accepts 
as input.  Note that *type annotations are not necessary for performance*, but they are useful
for taking advantage of multiple dispatch (next section) as well as making sure the function 
doesn't get used for something it's not meant to do (e.g. subtract a `Number` from a `String`)

```@example
f(x::Int, y::Int) = x + y

f(1, 1)
#hide
```

## 0.2 Multiple Dispatch

Julia programs are centered around **multiple dispatch**, the idea that different code gets 
called depending on the types of the arguments.  Julia compiles a different **method** for each
set of types an argument gets called with.

```@repl code_llvm
add_to_itself(x) = x + x
```

```@repl code_llvm
using InteractiveUtils

@code_llvm add_to_itself(1)  # add_to_itself method for Int

@code_llvm add_to_itself(1.0)  # add_to_itself method for Float64
```
