module Renderers

using Reproducible, Glob

Reproducible.build(glob("*.md", "book"))

end
