### Links

-  Links are used to navigate a user to another page or move the user to a section within the same page
   -  Basic link - links to an absolute URL
   -  Relative Link - Link to other URLS under the same site
   -  Jump/Hash link - USed to scroll elements in the page with similat id names

```html
<!-- Basic implementation -->
<a href="https://mysite.com">To my site</a>
<!-- Relative link -->
<a href="/pages/about.html">About us</a>
<!-- Jump/Hash Link -->
<a href="#section-2">Section two</a>
<section id="section-2">Content goes here</section>
```

-  A link without a href attribute is the only practical way to disable a link. For example on links which require a user to be authenticated
-  If you would like a link to open in a new tab use the target attribute ana set it to _\_blank_
-  This should only be used if the user is still using the current page e.g content has not been saved

```html
<a href="https://mysite.com" rel="noopener noreferrer" target="_blank"
	>To my site</a
>
```

-  A link can also be used to trigger a download by adding the download attribute and a href with a path to the file.

```html
<a href="https://mysite.com/files/file.pdf" download>To my site</a>
```

-  The rel attribute denotes a relationship between the link and the target. Common examples includes

```html
<a href="https://mysite.com/" rel="noopener noreferrer">To my site</a>
```

-  More can be found at [rel attribute](https://css-tricks.com/a-complete-guide-to-links-and-buttons/#the-rel-attribute)
