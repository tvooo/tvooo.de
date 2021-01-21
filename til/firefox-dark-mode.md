---
layout: til
date: 2021-01-21
tags: [blog, til]
til: how to test Dark Mode in Firefox
---

I have recently considered implementing a _dark mode_ for this site. Many websites use a toggle switch to activate an alternative color scheme, but there is also a media query that respects the user's OS settings. A nice way to use it is to overwrite your CSS variables:

```
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f8f8f8; // bright
    --color-bg: #000e1a;   // dark
  }
}
```

Now, how can I test this? The Firefox Developer Tools have a _Responsive Design Mode_ that allows you to influence which media queries apply for the viewport, but I could not find anything about the preferred color scheme.

The solution is built right into the Properties panel of the Developer Tools' Inspector tab; it's just (as of Firefox 84) [hidden behind a config flag](https://discourse.mozilla.org/t/how-to-test-preferred-color-scheme-dark-mode-with-firefox/40769/4). To enable this feature, you have to navigate to `about:config` and set the value for `devtools.inspector.color-scheme-simulation.enabled` to `true`.

![Screenshot of Firefox Advanced Preferences with the correct value set](/static/images/aboutconfig.png)

If you then open (or re-open, if it was already opened) the Developer Tools, you will see a new icon in the Properties panel, right where you can also toggle print simulation:

![Screenshot of Firefox Developer Tools with a toggle to set "prefers-color-scheme: dark"](/static/images/devtools.png)

Happy developing!

:last_quarter_moon:

*[TIL]: Today I learned
*[OS]: Operating System