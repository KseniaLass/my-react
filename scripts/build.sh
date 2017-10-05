# convert js
babel --presets react,es2015 js/source -d js/build

# create js package
browserify js/build/app.js -o bundle.js

#create css package
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css

#ready
date;
echo;