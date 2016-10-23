# Fifteen-minute stand-ups

## 22-October-2016

I started a review of my Github repos this morning, starting with the ones that haven't been touched in the last three years (when I first opened this account.) There are a few projects in there that date back almost ten years. The code has held up remarkably well in some places (and proven painfully naive in others.)

I added notes to a few and deleted a few that never really got started or now seem like bad ideas. Then, I came across a few that were all fractional projects for what I think of as the WorldBuilder project - an online tool for building fantasy worlds starting from the ground and working your way up.

I haven't done any work on this project in a while, but it's probably the one I would have the most fun building.

The MVP would be a web-based tool for drawing land masses on a new world. The user would draw blocky polygons and WorldBuilder would draw fractal shorelines along the vertices. Every time I start to work on this project, I run into the same roadblock. In order for the tool to work, the users really need a sphere to draw on. So, I spent some time learning about how to draw a sphere in the browser.

After lunch, I focused down on the node image gallery project - sort of. First, I needed to find pictures of at least fifty kittens with a Creative Commons license. Why? Because research, dammit!

Once the kittens were found and given *hysterical* names, I decided to bang out a profile page using HTML5 and CSS. My CSS is slightly less awful than I remember it being and I managed to get [this far](http://i.imgur.com/fW54pii.jpg) by memory. There are even color transitions on the buttons.

When I called it a night, I had the following articles open:

- [Creating a Scene in THREE.js](https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene)
- [Python Imaging Library (PIL)](http://www.pythonware.com/products/pil/)
- [Pillow 2.0.0 - a fork of PIL for Python 3.x](https://pypi.python.org/pypi/Pillow/2.0.0)
- [Shades of blue in CSS](http://www.december.com/html/spec/color3.html)
- [Keep a floating image inside the div with CSS](http://stackoverflow.com/questions/369448/keeping-an-floated-image-inside-the-div-with-css)

As for yesterday's open threads, I've tabled any plans for using Jekyll. It's just too much of a build chain for a site/blog I wouldn't be updating very often. I'm going to tackle the unholy marriage between Ubuntu-XWindows and Windows-RDS again soon, but I'm letting it simmer in my brain for now.

## 21-October-2016

I started out tonight reading about Apache Zookeeper because I'm thinking about a number of projects that involve creating a "distributed platform for X." Whatever X turns out to be, I'll need to pick a platform to develop it on. My first thought (and possibly the one I'll ultimately go with) was Apache Storm. But, I wanted to at least explore a closer-to-the-metal deployment on Zookeeper.

I only got as far as setting up a [Vagrant environment that would install JDK 8](https://github.com/jake-bladt/zookeeper-labs) when I stumbled onto the possibility of using Remote Desktop on my main Windows machine to view an XTerm desktop on a virtual Ubuntu box.

I got [a good way](https://github.com/jake-bladt/remotable-ubuntu-vagrant) towards that goal and continued to fill in my knowledge of Vagrant (and, by extension, Linux administration and automation.) The big win today was learning how to copy a file from my host to my guest and mark it as executable.

For the first time in months, I have project ideas I'm actually excited about building and new technology I'm really interested in learning. This largely seems to have come from a decision to stop trying to prioritize skills that will help the current (or any) job search and just learn what interests me in whatever order it interests me. A small, but significant dam has burst. How long I keep writing these stand-ups will be a metric of whether it amounts to anything.

I left the following articles open at the end of the day to be returned to when I pick up these threads of work:

* [Jekyll Quick-Start Guide](https://jekyllrb.com/docs/quickstart/)
* [AskUbuntu: Access Ubuntu Desktop from Windows Remotely](http://askubuntu.com/questions/592537/can-i-access-ubuntu-from-windows-remotely)
* [Setting up a Java 8 Dev Environment with Vagrant](https://blog.versioneye.com/2015/05/05/setting-up-a-dev-environment-with-vagrant/)

Tomorrow, I hope to spend some more time with my Zookeeper book and to dig a little bit deeper into Node/Express. I'm also hoping to start cleaning/bulking up my public github repos. There are a lot of ideas floating around there. Some of them I tabled after a shallow dive, but many I continued hacking on but either never wrote the code or never checked it in.

Plus, cleaning up repos gives me something "productive" to do when I'm not up to coding.
