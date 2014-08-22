Basis-Boilerplate
=================

Basic Boilerplate, using HTML5 Boilerplate, SASS, Compass, Grunt, Bower

For starters clone the repository (into any directory you prefer):

```
  git clone https://github.com/Dechowmedia/Basis-Boilerplate.git
```

Run:
```
  npm install
```
```
  bower install
```

Now you are almost ready to start building!!!
Now run the command

```
  grunt
```

A prompt will pop-up and ask you three different choices:
- "Build (no cache)"
This is if you want to build the project and not start up a server (just a plain build) - note this does not cache images in the resources directory (but it's empty in this barebones version)
- "Build + Watch"
This does the same as the above choice HOWEVER, the watch task is intiated after building
- "Build + Serve"
This does the same as the above with the addition of starting up a small developing server and firing it up in your default browser. Pretty neat!
- "Styleguide"
This just builds the styleguide, for documentation on writing your pages for the styleguide please refer to the [SASSDOWN Docs](https://www.npmjs.org/package/sassdown)
- "Styleguide + Serve"
Builds and serves the styleguide, like the build + serve task.

## What do I get with this package of yours?

A complete starterkit!
I have recently started to utilise these tools and found them useful.
But I have myself ALWAYS lacked a decent and good boilerplate that does not bite me, and add unnecessary "bloat".
Whilst some will not like that I use SASS or Compass, you can always pull this repository or get fancy and fork it.
I've tried to keep it tight (and not add [to my personal preference] unecessary copy and delete tasks), but in case someone needs a (somewhat) updated list of what task are run here is a list:

"grunt-choose"
"grunt-contrib-compass"
"grunt-contrib-concat"
"grunt-contrib-csslint"
"grunt-contrib-cssmin"
"grunt-contrib-imagemin"
"grunt-contrib-jshint"
"grunt-contrib-uglify"
"grunt-contrib-watch"
"grunt-http-server"
"grunt-newer"
"grunt-open"
"sassdown"

(and yes i copy pasta it from the package.json no biggie... please also note some of these tasks are not USED, but there for future reference or usecase!)

## Wait what I don't know grunt or all that crap!

Dont worry there are easy to use installers out there, to set it all up.

### Mac OSX
I recommend **ALL** my friends to Homebrew, it's easy, it's protected and don't jinx your system.
To install follow the instructions on this page
http://brew.sh/#install

***PLEASE NOTE THAT IT WILL ALSO INSTALL XCODE COMMAND LINE TOOLS***

### Windows
Oh well, there is something alike that too on Windows
It's called Chocolatey, it's pretty delicious
https://chocolatey.org/

The things you need to install is:
- [Git](http://git-scm.com/) (YES REALLY!!!)
- [Ruby](https://www.ruby-lang.org/en/)
- [Node.JS](http://nodejs.org/) 
- [Grunt.JS](http://gruntjs.com/)

### Your boilerplate sucks! - I want...
Make your own!! - I highly recommend forking this and turning it into something YOU want to use.
I do not take immediate issues other than notices of breaking changes or immediate setup help - yep, I will help you setup your grunt and stuff to build this if you ask ***NICELY***
