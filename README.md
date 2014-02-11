Jekyll-barebone
===================

Jekyll-barebone is a simple scaffold I created for my personal pages. It is powered with Jekyll, Grunt, Bower and is heavily inspired with
Yeoman generator jekyllrb.

Warning : This is an opinionated setup and you might need to modify according to your changes.

I will discuss more of the setup on this documentation.

Installation
============

### The Git Way

```
$ git clone https://github.com/vsbarba/jekyll-barebone.git
```

### The Basics

Initially you might want to install all the bower components in bower.json
also check .bowerrc for directory

```
$ bower install
```

and then install node packages in package.json

```
$ npm install
```

After that make sure that you have grunt and grunt-cli installed.
If you are new to grunt I suggest you visit [Grunt.JS][grunt-url]

```
$ npm install grunt -g // to install globally
$ npm install grunt-cli -g 
```

### Running the App

After the basic installation part, you can now do the following to use the Gruntfile.js.
Basically, you might want to do them in order if you want. The following copies the bootstrap-less, and some assets like (jquery, modernizr) to app/assets/{less, js or css}

#### Bootstrap Less

```
$ grunt copy-bootstrap
```

#### Update the basic libraries

```
$ grunt update-assets
```

#### Serve the App using Jekyll

This will run the app in http://localhost:4000 although you can change the configuration for host and port if you want. We'll be providing that in the Grunfile.js

```
$ grunt serve
```



Developer Notes
===============

Hello, this is our dev notes :) I usually put notes and reference of my learnings here.

[Test Button >][stackoverflow-handlebarsobjloop]


[grunt-url]: http://gruntjs.com
[stackoverflow-objectnumber]: http://stackoverflow.com/questions/956719/number-of-elements-in-a-javascript-object
[stackoverflow-jsliteralobj]: http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members
[stackoverflow-handlebarsobjloop]: http://stackoverflow.com/questions/9058774/handlebars-mustache-is-there-a-built-in-way-to-loop-through-the-properties-of
[rsc]: http://ricostacruz.com
[c]:   http://github.com/rstacruz/flatdoc/contributors
[nd]:  http://nadarei.co

[GitHub API]: http://github.com/api
[marked]: https://github.com/chjj/marked
[Backbone.js]: http://backbonejs.org
[dox]: https://github.com/visionmedia/dox
[Stripe]: https://stripe.com/docs/api
[Docco]: http://jashkenas.github.com/docco
[GitHub pages]: https://pages.github.com
[fences]:https://help.github.com/articles/github-flavored-markdown#syntax-highlighting
[DocumentUp]: http://documentup.com

[project]: https://github.com/rstacruz/flatdoc
[template]: https://github.com/rstacruz/flatdoc/raw/gh-pages/templates/template.html
[blank]: https://github.com/rstacruz/flatdoc/raw/gh-pages/templates/blank.html
[dist]: https://github.com/rstacruz/flatdoc/tree/gh-pages/v/0.8.0
