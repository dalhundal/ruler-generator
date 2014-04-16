Ruler Generator
===============

Simple JS tool to generate ruler images that can be used to measure pixels.

A work in progress (as of April 16th 2014), it is quite unfriendly.

Why the hell did you make this?
-------------------------------

While developing a site, I needed a quick way to overlay a ruler / grid on a page for testing. I needed this ruler / grid to scroll along with some content, so I though I'd just whack a background image in the element.

I thought I'd find an image online that I could use as a ruler, or even better a tool to generate one based on some parameters.

I didn't find one, and I didn't want to do it in Photoshop - so I did this.

Basic usage
-----------

    var ruler = rulerGenerator({
        width: 1000,
        tickInterval: 100,
        tickParts: 4
    });
    
Will generate a rule 1000px wide, with a major tick every 100px and a minor tick every 25px (100/4).

To display the image, you can access the `img` property which provides an `<img>` tag. So for example, to add the ruler to a page:

    document.body.appendChild(ruler.img);
    
That's all I'm telling you for now.
