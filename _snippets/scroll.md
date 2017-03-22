---
date: 2017-03-31 17:28
title: Scroll
---
```js
console.log('--- _scroll.js');
$('.do-scroll-to-top').on('click', function (e) {
    $('html, body').animate({scrollTop: 0}, 800);
    e.preventDefault();
});
```
