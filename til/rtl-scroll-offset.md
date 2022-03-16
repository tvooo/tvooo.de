---
layout: til
date: 2022-03-16
tags: [blog, til]
til: that horizontal scroll offsets are negative for right-to-left elements
---

From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft):

> If the element's `direction` is `rtl` (right-to-left), then `scrollLeft` is 0 when the scrollbar is at its rightmost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content.

In retrospect, this seems logical --- given the many CSS and JS APIs similarly named without regard for bidirectionality, such as `margin-left`. What did I expect, `scrollRight`? But it still tripped me up when fixing the RTL behaviour of a component in our Design System at work.

For scrollable content, we show a shadow to indicate that "there's more content" in a certain direction when you're not in the base scroll position --- a fairly common pattern, given that many modern browsers and operating systems (especially touch-focused) don't show scrollbars anymore at rest. However, in RTL mode our shadows were messed up.

Turns out we were using the `scrollLeft` property to decide when to show and hide the respective shadows to the left and right of our scollable container. Once we've identified the issue, it was luckily an easy fix.

I'm very glad more modern browser APIs are designed with RTL in mind, and reflect this in their naming. For example, it's `align-items: flex-start`, not `align-items: left`. (Granted, this is likely due to the way that Flexbox revolves around horizontal and vertical axes.) It's similar (I'd argue, even better) in the Grid API.

Now let's make the web more welcoming by properly supporting RTL languages!

*[TIL]: Today I learned
*[RTL]: Right-to-Left