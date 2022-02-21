## Links

-  Links are used to navigate a user to another page or move the user to a section within the same page

### Types

-  Basic link - links to an absolute URL
-  Relative Link - Link to other URLS under the same site
-  Jump/Hash link - Used to scroll elements in the page with similar id names

```html
<!-- Basic implementation -->
<a href="https://mysite.com">To my site</a>
<!-- Relative link -->
<a href="/pages/about.html">About us</a>
<!-- Jump/Hash Link -->
<a href="#section-2">Section two</a>
<section id="section-2">Content goes here</section>
```

-  A link without a href attribute is the only practical way to **disable a link**. For example on links which require a user to be authenticated to view a page.

### Link attributes

-  If you would like a link to open in a new tab use the target attribute and set it to _\_blank_
-  This should only be used if the user is still using the current page for example when content has not been saved

```html
<a href="https://mysite.com" rel="noopener noreferrer" target="_blank"
	>To my site</a
>
```

-  A link can also be used to trigger a download by adding the download attribute and a href with a path to the file.Paths must be on the same origin for the download to be successful. The download attribute can either have a value or not.Incase a value is provided it is suggested as the name of the file if not the user must provide a name

```html
<a href="https://mysite.com/files/file.pdf" download>Download my pdf</a>
```

-  The rel attribute denotes a relationship between the link and the target. Common examples includes

```html
<a href="https://mysite.com/" rel="noopener noreferrer">To my site</a>
```

1. **rel="noopener"**: Prevents a new tab from using JS window.opener feature, which could potentially access the page containing the link
2. **rel=noreferrer**: Prevents other sites or tracking software from identifying your page as the source
3. **rel="alternate"**: Alternate version of the document.
4. **rel="author"**: Author of the document.
5. **rel="help"**: A resource for help with the document.
6. **rel="license"**: License and legal information.
7. **rel="manifest"**: Web App Manifest document.
8. **rel="next"**: Next document in the series.
9. **rel="prev"**: Previous document in the series.
10.   **rel="search"**: A document meant to perform a search in the current document.
11.   **rel="directory"**: Indicates that the destination of the hyperlink is a directory listing containing an entry for the current page.
12.   **rel="tag"**: Indicates that the destination of that hyperlink is an author-designated “tag” (or keyword/subject) for the current page.
13.   **rel="payment"**: Indicates that the destination of that hyperlink provides a way to show or give support for the current page.
14.   **rel="help"**: States that the resource linked to is a help file or FAQ for the current document.
15.   **rel="me"**: Indicates that its destination represents the same person or entity as the current page.

-  Links also have an aria role of link
-  A title can also be set on a link but should be avoided as they can't be styled and are not accessible as the content in between the link tag is announces
-  Links with only icons are not sufficient and should provide some text for it to be accessible if this is not possible the below solution can be used

```html
<!-- NOT -->
<a href="/">😃</a>

<a href="/">
	<svg>...</svg>
</a>

<!-- OK -->
<a href="/">
	<!-- Hide the icon from assistive technology -->
	<svg aria-hidden="true" focusable="false">...</svg>
	<!-- Acts as a label that is hidden from view -->
	<span class="visually-hidden">Useful link text</span>
</a>
```

-  visually hidden is a class used to hide the label text

```css
.visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
```

### Link states

-  **:hover**: For styling when a mouse pointer is over the link
-  **:visited**: For styling when the link has been followed
-  **:link**: For styling when the link has not been visited
-  **:active**: For styling when the link is being pressed
-  **:focus**: For styling when the users attention is on the element e.g through keyboard navigation

### Javascript considerations on links

-  A link has a default behavior of shifting the user's focus to a new page or content, to prevent this default behavior use the function **preventDefault()**

```JS
const jumpLinks = document.querySelectorAll("a[href^='#']");

jumpLinks.forEach(link => {
 link.addEventListener('click', event => {
    event.preventDefault();
    // Do something else instead, like handle the navigation behavior yourself
  });
});
```

-  To prevent the user from opening another link in scenarios such as content has not been save by the user a beforeunload event can be added to the window object
