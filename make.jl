module Renderers

using Reproducible, Glob

Reproducible.build(glob("*.md", "book"))
cp("book.json", "build/book.json")

end
