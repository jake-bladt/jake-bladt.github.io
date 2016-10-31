# Fifteen-minute stand-ups

## 31-October-2016

I may be reinventing the wheel with part of the fractal shoreline project.

I thought I remembered a method for representing directions by radians off of true, counterclockwise. (ie North = 0, West = &pi; / 2.) But, I'm starting to doubt my own memory.

## 28-October-2016

I decided to put aside the image resizing utility aside at least for a while. Both the python and the node solution had problems and the resizing isn't even the core feature. I will have to fix the npm-under-vagrant problem before I can get very far with nodeJs.

In the meantime, I decided to go back to fractal-shoreline - a crucial piece of the worldbuilder project and a neat bit of mathy code for my portfolio. It felt good to just code for a while.

At the end of day, I had the following relevant browser tabs open:

- [Radians](https://www.mathsisfun.com/geometry/radians.html)
- [Convert angle (radians) to a heading vector?](http://math.stackexchange.com/questions/180874/convert-angle-radians-to-a-heading-vector)
- [Point-Slope Equation of a Line](http://math.stackexchange.com/questions/180874/convert-angle-radians-to-a-heading-vector)

## 26-October-2016

Most of my productive time today was spent in mentor mode, which is probably just as well because I'm having a lot of trouble getting traction on the npm-under-vagrant problem and may have just banged my head against a wall for hours.

For my own work, I followed the recommendations on [NPM issue 9901]((https://github.com/npm/npm/issues/9901)) to try to resolve my problem. I installed the newest version of Oracle VM Virtual Box, then tried running my vagrant file against it. Vagrant promptly *downgraded* my VirtualBox to one it recognized. When my npm intall still refused to work, I installed the latest version of Vagrant and *reinstalled* the latest version of VirtualBox. There was still no love, even after trying various combinations of ```npm install --save --no-bin-links sharp```. I either need to dig deeper on this problem or go back to trying to do it in Python3/Pillow or Python2/PIL. But, that's for another day.

Short list of open tabs today:

- [Install nodejs sharp on Azure 32-bit](http://stackoverflow.com/questions/39110318/install-nodejs-sharp-on-azure-32bit)
- [npm install sharp](http://sharp.dimens.io/en/stable/install/)

## 25-October-2016

Some days, I just don't want to be a software developer. Today was one of those days. The interview process is becoming wearying. Winter is coming. Everything I'm working on is stalled. If I hadn't made a commitment to get back into the habit of coding every day as if I had a full-time job, I would have been happy to come home from my mid-afternoon interview today, play a few browser games, and go to sleep.

Taking a page from another domain, I decided to promise myself I would get ten commits before I called it quits today. My commits are fairly atomic, so ten don't represent a lot of work. But, ten of them are enough to have at least gotten into coding something. And they give me a chance to get some enthusiasm flowing for more.

Today, it was just 10.

My focus was on trying to do the resizer tool in node with sharp. I got as far as setting up the VM, initializing for npm, and installing sharp - trying to install sharp. It turns out that there's a bug with npm when it's used in a hosted environment like Vagrant. There's a fix, but I'm not up to pursuing it tonight.

Plenty of open threads for tomorrow:

- [EPROTO: protocol error, symlink '../user-home/cli.js'](https://github.com/npm/npm/issues/9901)
- [sharp](https://github.com/lovell/sharp)
- [sharp API documentation](http://sharp.readthedocs.io/en/stable/api/#resizing)
- [CISCO's CSR Partner - Water for People](http://csr.cisco.com/casestudy/water-for-people)
- [Unit testing C code](http://stackoverflow.com/questions/65820/unit-testing-c-code)

## 24-October-2016

Only a short coding session today. In order to move forward on the agency project I'm using to teach myself more node/express, I need to have copies of all the kitten pictures I brought down yesterday that are appropriately sized for the profile page and for thumbnails on the gallery page.

I could do this manually, but part of how I learn best is treating my learning projects as if they were real deliverables for a real client. In this case, my inner client was telling me that manually resizing the pictures that come in won't scale. I need to automate the process.

I'm sure there's a way to do this in node, but a review of available tools suggests that the easiest method would be to use Python and PIL where this kind of issue is frequently-covered ground.

That's all well and good except that PIL doesn't support Python 3 yet and I haven't touched Python 2. Fortunately, there's a fork of PIL called Pillow which *does* support Python 3.

I copied over the Vagrant build-out I use for my python sandbox, added the installation code for Pillow, vagranted up and...

...the provisioning failed.

Shit.

I poked the configuration files with various-sized sticks, but I couldn't jury-rig an easy solution. It's back to the drawing board tomorrow, either rebuilding a Python 3 / Pillow environment from the ground up or trying it in node. Most of what's open on my desktop is about those two options.

- [GraphicsMagick for nodeJs](http://aheckmann.github.io/gm/)
- [sharp image processing for nodeJs](https://github.com/lovell/sharp)
- [installing pip3 (for python3) on ubuntu 16.04 LTS using a proxy](http://askubuntu.com/questions/778052/installing-pip3-for-python3-on-ubuntu-16-04-lts-using-a-proxy)
- [Open Water](https://publiclab.org/wiki/open-water) - open source hardware and software in hydroinformatics

## 23-October-2016

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

## 22-October-2016

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
