---
date: '2012-11-11T00:00:00.000+00:00'
title: How Designers can help Developers
layout: post
description: How Designers can help Developers
---
Traditionally, developers aren’t great designers, and vice versa. There are many exceptions, but generally the art of one group is a mystery to the other - yet we routinely have to collaborate on projects. I’ve put together a list of tips for designers, on how they can make life easier for the developers who have to bring those designs to life as apps and web sites.

## Photoshop hygiene

Developers often have to deal with Photoshop PSDs from designers, so anything that benefits designers themselves is also good for developers. These tips pertain to creating maintainable, understandable PSDs for everyone.

#### Use an intelligent method of version-control

A folder full of ambiguously-named versions of PSDs is the bane of any designer’s life. Either decide on a sensible naming scheme for file versions (ideally one that will cause the files to show in strictly sorted order when viewed alphabetically), or use an actual asset management or version control system.

#### Keep your layers

Don’t flatten anything that doesn’t absolutely have to be flattened. Do exports by grouping and hiding/showing layers, exporting, then restoring the document to its previous state. Don’t destroy useful data. Machine performance isn’t a reason to flatten: get more RAM, or a better machine!

#### Name all your layers meaningfully

I know it’s a pain, but it really aids comprehension, particularly when reusing elements of a document. Make sure that the names of text layers reflect their content (they can get out of sync), and that duplicated layers are renamed to something more appropriate than “copy”.

#### Use groups, and do so sensibly

A discrete visual element composed of multiple layers should be in a group, and overall the groups should usually follow a standard left-to-right, top-to-bottom pattern if the document is a single design. Hierarchy and order are better than colour-coding your layer labels, because colours have to be maintained when layers are moved around.

#### Prune unneeded layers

Old versions, templates and reference materials, temporary duplicates and such should be deleted if they’re of no further use. Occasionally do a quick run-through of your layers, getting rid of anything that isn’t serving a purpose.

#### Use Layer Comps

Photoshop’s Layer Comps feature lets you create sets of layer states, such as visibility, position and even Layer Styles. You can use it to neatly incorporate multiple parts of a design (like multiple tabs in a web layout, or screens in an app) into a single document. It can reduce the need to duplicate layer groups and maintain them, and can thus reduce file size too. Make it part of your toolkit.

#### Keep everything as vectors, and scaleable effects

Go to extreme lengths to keep designs fully resizable. For app design particularly, it’s comparatively common to suddenly need the entire same set of artwork at twice the dimensions, for newer devices with doubled pixel-density. Make sure you don’t need to redraw a load of bitmap art at short notice.

## Helping developers

There are also several tips which pertain specifically to designs for apps and web pages, which naturally have their own requirements and constraints.

#### Learn how to preserve rounded corners while resizing

Operating systems tend to standardise on a particular corner-radius for rounded elements, and use it everywhere (on iOS, it’s usually 12 pixels). Whilst Adobe Fireworks knows to keep a rounded rectangle’s corner-radius the same during scaling, Photoshop doesn’t - so make sure you’re familiar with the Direct Selection tool for selecting corner-producing points and resizing shapes the old-fashioned way.

#### Design at 72 ppi

A pixel is a pixel, and more of them just means a bigger document. Don’t confuse matters by changing the document’s resolution.

#### Snap to whole pixels

Make sure relevant shape tools (such as the rounded rectangle tool) are set to snap to pixels. Use the pixel grid and/or guides according to your taste. Prefer strong edges, sitting precisely on the pixel, because sub-pixel rendering on devices will otherwise turn your beautiful design into mush. Relatedly and consequently, work with even-numbered dimensions both overall and for individual elements, to ensure crispness. Thanks to [Matt Drance](http://twitter.com/drance) for this point.

#### Always use RGB mode

This is important not just for colour display, but also for when developers need to sample colours from the document to use in code. You can’t go wrong with RGB.

#### Asset-preparation is part of your job

Many (most) developers don’t know how to use Photoshop for anything but very basic edits. Properly exporting cut-ups for use in apps or on the web is the designer’s job, since they’re most familiar with the document and with Photoshop.

I know it’s a huge pain, and it can take a long time, but it’s the “other 90%” of the job after the design work is done.

#### Be careful with fonts

Different devices and operating systems have different pre-installed fonts, and there’s no guarantee they have all the same fonts that you do on your design machine (indeed, you probably have far more fonts than the average person). It’s always best to render text as actual text in apps or on the web, so fonts are an important consideration in your design not just for visual reasons, but also for feasibility.

Remember that the license you have that allows you to create designs with a given font probably _doesn’t_ allow that font to be embedded in an app (or on the web) in its entirety. Take care to communicate with your dev (and/or client) before relying on a certain font in your design.

#### Mimic the platform’s text-rendering (where possible)

For visual integrity, experiment with Photoshop’s text anti-aliasing settings to best reproduce the target platform’s rendering. For iOS, for example, you’ll likely want the “Crisp” anti-aliasing mode.

#### Be sure of design dimensions

Particularly for apps on mobile devices, screen size isn’t the whole story - you’ll commonly have to account for the presence or absence of system status bars and so forth, and how they affect dimensions in both portrait and landscape orientations (an iOS-like top status bar will reduce the smaller dimension in landscape, and will reduce the larger dimension in portrait, for example). Be sure to check with your dev whether the app is truly full-screen or not.

#### Use the platform’s idioms

Each platform (operating system) has its own idiosyncratic user interface elements, and interaction styles (these will also vary by device category). Be conscious of them. A good rule of thumb is not to design too far outside those concepts, unless you have a compelling reason to do so. On iPad’s particular flavour of iOS, for example, you’ll find these concepts:

1.  A nigh-universal requirement to support both orientations.
2.  Two-pane interfaces being acceptable, simultaneously in landscape and modally in portrait.
3.  Pop-overs as a UI element and grouping mechanism.
4.  A very specific style of documents-browser.
5.  The expectation that hierarchy-navigating back-buttons have a specific left-pointing shape.

And so forth. Be familiar with the platform, because your design has to fit it. There’s no single design that suits all target platforms (not even on the web, without some degree of adaption and flexibility).

#### Design once for landscape, then design again for portrait

Different orientations require different physical interaction styles as by-products of not only screen aspect-ratio, but also the form-factor, weight and balance of the device when held. A design which doesn’t adapt to accommodate more than the raw aspect-ratio change is a weak compromise at best.

#### Design for each major screen-size, and their contexts

In app design, both content and interface presentation should be different on a phone-sized device than they are on a tablet, or a desktop computer. For mobile device categories, we also need to consider attention-span, distractions, the physical impairment of having to support the device while using it, and the possibility of the user being in motion and/or at risk (obstacles while walking, traffic when crossing the street, the need to safely maintain control of a vehicle, etc).

These contexts of use are irretrievably tied to the size and nature of the device, and an effective design will consider these factors.

#### Use genuine or at least realistic content

The hallmarks of good sample content are as follows:

1.  Sample copy spans the entire range of possible lengths, not just what’s convenient for the mockup.
2.  Required data, particularly such as user photos, are occasionally _omitted_, and a concrete design is presented for this situation.
3.  Undesirable examples of input are considered; for example, extremely portrait or extremely landscape aspect-ratios in images which your design would prefer to be square.
4.  Names include ‘extreme’ or unfamiliar examples, including very long and non-breaking forenames and surnames. A poor design features only Bob Janeson and Jane Bobson.
5.  Addresses are not constrained by locale. Almost every possible length, format and arrangement of address can be found somewhere in the world. Allow space and flexibility.
6.  Lorem ipsum is not found anywhere in the design.

#### Consider localisation

When most people think about supporting other languages, they’re thinking about text. When a designer or developer thinks about localisation, however, they should be thinking about _layout_. For localisation purposes, your designs should ideally accommodate a **fifty percent variance** in text-width, for all textual elements, compared to English.

Asian languages can require up to 50% less space than English to display equivalent text, and European languages can require up to 50% _more_ space then English. In particular, your button designs and help-text placement should be very conscious of these statistics.

#### Respect the global light source

As a designer, it’s unlikely you need to be told this, but each platform has its own sacred and inviolable global light-source (on iOS, for example, it’s directly above-centre, or 90 degrees). Any and all lighting and shadow effects should be consistent with the target platform’s light source.

#### Make navigational or organisational constructs explicit

If your design incorporates constructs like tabs, navigational drill-downs or other disclosure mechanisms, make their existence and function clear to the developer. Be sure to respect platform conventions for such constructs, as mentioned above. Developers need to be aware of information hierarchy very early in the implementation process, so be sure your design clearly communicates your intent. Layer Comps are particularly useful in this scenario.

#### Export cut-ups without compression

Use PNG with alpha (transparency) unless explicitly told otherwise. Don’t use JPEGs unless asked. File-size is no object; developers and/or their development environment will suitably optimise the resulting images. Export each element with a transparent background, not a solid colour (even if a background part of your design does feature a solid colour).

#### Ask about shadows

Communicate with your developer about whether shadow effects should be included in exports. Commonly, developers will apply shadows themselves later, using CSS or by drawing them in code, which can actually be easier or more convenient and consistent than using pre-rendered bitmap shadows. Don’t assume that shadows should be baked into the images (though by all means mock them up for design purposes, using layer effects).

#### Understand how buttons are constructed

Buttons in apps or on the web are rarely created using a single image. Instead, they will almost always be either:

*   3-part images, with a left end-cap, a right end-cap, and a single-pixel-wide repeating central section (to allow for horizontal expansion of the button); or
*   9-part images, with top/middle/bottom-left end-caps, top/middle/bottom-right end-caps, and three repeating top/middle/bottom central sections (to allow for horizontal and vertical expansion of the button).

Design your buttons as end-caps with thin repeating middle portions. Take suitable care with gradients. For 9-part images where gradients probably can’t be rendered statically without visual banding after vertical expansion, discuss with your developer whether you can supply transparent-backed image parts and have the gradient applied via code or CSS afterwards.

## Final thoughts

The creation of any kind of software is (or should be) a partnership between graphic design, interaction design, and implementation. None of these disciplines is any less important than another, and all are vital. By being aware of the needs of those working in other fields, we can be more effective and valuable in our own work.