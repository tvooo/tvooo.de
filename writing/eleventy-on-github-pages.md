---
layout: post
date: 2024-05-01
# tags: [blog]
title: "Hosting an Eleventy site on Github Pages"
# image:
#   url: static/images/holyrood-1.jpeg
#   alt: Photo of Holyrood Park in Edinburgh
---

I used to host my static sites on Netlify, but given their odd practices around DDoS and spike protection --- and related pricing --- I've decided to move them elsewhere. While looking for alternatives, mostly Surge.sh, Cloudeflare Pages and Github Pages popped up.

Github Pages used to deploy from a special `gh-pages` branch, but [their recent changes] have made it easy to deploy using a workflow.

To set this up, go to X > Y > Z.
Pick _GitHub Actions_ as source.

Commit the following workflow to your repository.

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - name: Install dependencies & build
        run: |
          yarn install
          yarn build
      - uses: actions/upload-pages-artifact@v3

  # Deploy job
  deploy:
    # Add a dependency to the build job
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
