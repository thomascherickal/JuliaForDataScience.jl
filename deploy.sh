# delete gh-pages branch
git push origin --delete gh-pages
git branch -D gh-pages

# create gh-pages branch
git checkout --orphan gh-pages

# make book
julia -e "include(\"make.jl\")"
gitbook build book/build
cp -r book/build/_book .

# commit book
git add .
git commit -m "Book built on `date`"
git push --set-upstream origin gh-pages
git checkout master