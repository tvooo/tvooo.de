---
layout: post
title: React Higher-Order Components with TypeScript
date: 2022-11-23T07:58:48.315Z
tags:
  - blog
---
It had been a few years since I've last created a higher-order component. Somehow they got out of style with the advent of React Hooks.

However, last week I was working on a task to make it easier to apply a tooltip to an existing component.

Imagine you have a `Tooltip` component that, when hovering your mouse over a trigger (all accessibility issues considered, this is just for simplification), shows a floating label. The API looks something like this:
