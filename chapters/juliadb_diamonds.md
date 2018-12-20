# JuliaDB Tutorial: Diamonds

```julia;run;
using JuliaDB, RDatasets
```

```julia;repl
t = table(dataset("ggplot2", "diamonds"))
```