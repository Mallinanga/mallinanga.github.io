---
layout: post
title: A Post with Images
description: Examples and code for displaying images in posts.
tags: 
comments: false
categories: 
date: '2013-05-22T00:00:00.000+00:00'
---
Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

## Figures (for images or video)

### One Up

<figure>[<img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg">](http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg)

<figcaption>[Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr](http://www.flickr.com/photos/80901381@N04/7758832526/ "Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr").</figcaption>

</figure>

### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.

And you'll get something that looks like this:  

<figure class="half">[<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg) [<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg)

<figcaption>Two images.</figcaption>

</figure>

### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

{% highlight html %}

<figure class="third">[<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg) [<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg) [<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg)

<figcaption>Caption describing these three images.</figcaption>

</figure>

{% endhighlight %}

And you'll get something that looks like this:

<figure class="third">[<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg) [<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg) [<img src="http://placehold.it/600x300.jpg">](http://placehold.it/1200x600.jpg)

<figcaption>Three images.</figcaption>

</figure>