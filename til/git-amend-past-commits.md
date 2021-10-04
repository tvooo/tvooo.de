---
layout: til
date: 2021-10-04
tags: [blog, til]
til: how to edit past Git commits
---

When making code changes in Git, I often forget something or notice a typo slightly too late.

Most frequently, I want to improve my last commit message. In those cases, I can easily amend the commit:

```
git commit --amend
```

Sometimes, however, I'd like to do the same for a commit that is _further in the past_. Or maybe I want to edit multiple commit messages at once. For this, we can make use of interactive rebasing:

```
git rebase -i HEAD~N
```

(You can address the earliest commit also by its SHA, but I like the `HEAD~N` syntax, as I most often think of it in terms of "I need to edit the 3 last commits.")

When it's just about fixing typos in commit messages, you can rely on the `reword` command. For editing the commit contents, use `edit`, and if you want to keep a commit as-is, use `pick`.

Today I had to do this on already merged changes and noticed that the merge commit went missing after the rebase. It turns out that you can opt to preserve merge commits by passing the `-r` flag:

```
git rebase -r -i HEAD~N
```

For more details, check out [this article by Tarık Yurt](https://mtyurt.net/post/2019/git-rebase-merges-option.html), which contains great illustrations of the process with and without the `-r` flag.

Enjoy ravaging your commit history!

:boom:

*[TIL]: Today I learned