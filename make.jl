module Renderers

using Reproducible, Glob

Reproducible.build(glob("*.md", "book"))
mv("book.json", "build/book.json")

end
