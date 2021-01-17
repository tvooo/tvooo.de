---
layout: post
date: 2021-01-21
tags: [blog]
title: Installing Node.js on Linux
---

> **TL;DR** --- Install Node (including NPM) from the [NodeSource](https://github.com/nodesource/distributions) repositories, Yarn from, and [`n`](https://github.com/tj/n) using `npm install -g n`. Never look back.

I've recently got a shiny new laptop for work. This is always a great feeling: new hardware and a fresh install of your operating system of choice.[^ubuntu] Some time into setting it up, I naturally wanted to install Node.js --- and landed in a small rabbit hole.

See, if I were using a Mac, I would just `brew install nodejs` and be done with it. But on Linux, it's a wee bit more complicated. Normally, you would use your distribution's package manager to install most software; but Node.js has its own package manager, `npm`, which itself is... just a package. In addition to that, most distribution's package repositories are too outdated for my taste.[^arch]

To me, there are three questions:

1. How do I install the three (to me) _core_ packages: Node.js, NPM, and Yarn?
2. How do I keep them up to date?
3. How can I switch versions if I need to?




<!-- - multiple questions
- install node, npm, and yarn
- keep them up to date
- switch version if needed -->

## Package management is a mess

Package management on Linux is a mess. Every distribution has a _native_ package management system, and when you stick to just one distribution, it's easy to wrap your head around.

The distribution and package maintainers usually package software for these systems --- at least popular software. All the common systems have support for third-party package repositories, so maybe _someone else_ has package what you're looking for. Arch Linux, for example, has the wonderful [Arch User Repository](https://aur.archlinux.org/).

Recently, we have also seen distribution-agnostic packaging formats, such as [Snap, Flatpak, and AppImage](https://www.fosslinux.com/42410/snap-vs-flatpak-vs-appimage-know-the-differences-which-is-better.htm). And projects like NixOs are trying completely different approaches to traditional binary package management.

It gets even more interesting once you are writing software and are looking for libraries for your language of choice. Programming languages often come with their own package managers; Rust has _cargo_, Python has _pip_, Haskell as _Cabal_ and _Stack_, JavaScript has _Yarn_ and _NPM_.


- also for binaries: for example, because I wanted to isntall alacritty, i needed cargo
- could have gotten it from snap or wherever, but meh


## A million ways to install Node.js

With this out of the way, let's quickly look at all the options we have for installing Node.

- Your distribution's package manager. Assuming Ubuntu, it's a simple `sudo apt install nodejs`.
- nodejs.org binary
- source
- their own repo

And yarn

- distro pkg manager
- yarnpkg.com binary
- npm -g yarn
- their own repo

https://github.com/nodesource/distributions

- install node from nodesource. this also installs npm
- install yarn from they deb repo
- keeps dependencies to a minimum
- getting node from offical debian/ubuntu repos wanted to install a gazillion node- packages
  - https://packages.ubuntu.com/groovy/npm
  
## Installing Node.js on Mac

## Managing versions

- version management
- nave + nvm use env variables; create an environment like py venv does
- n symlinks binary, so works across terminal sessions
- question is: what do you need?
- for me: n

- and that's it. so easy.

[^ubuntu]: I am very happy I can use Linux as my desktop operating system. Unfortunately I cannot use Arch Linux, as BitDefender does not support it; I've therefore picked Ubuntu (Kubuntu, to be precise).
[^arch]: Arch Linux has a rolling release model and is therefore usually pretty up to date. With Ubuntu, it depends on the release. Debian comes in three variants: dated, old, and ancient.