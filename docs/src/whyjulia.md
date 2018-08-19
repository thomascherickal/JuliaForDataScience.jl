![](https://julialang.org/v2/img/logo.svg)

# [0. Why Julia](@id why-julia)

If you are interested of why Julia exists at all, a good read by its creators is here:
[Why We Created Julia](https://julialang.org/blog/2012/02/why-we-created-julia).


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
