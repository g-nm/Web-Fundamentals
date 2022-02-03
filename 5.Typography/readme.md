## Typography

Typography is about usability and the ability to convey information to the reader.  
After the typography satisfies usability can it now convey infromation such as does it complement the content on the page, does it show your brand identity and how does it make the reader feel.

### Difference between a typeface and a font

**Typeface** - Is the design of a collection of glyphs(letters,numbers,symbols) this is how the glyphs are are shaped. This brings out the major difference.  
**Font** - Is the size,weight or style of a typeface.  
Currently both terms are used interchangeably and convey a similar message

### Categories of fonts

THe two major categories of fonts are serif and sans-serif typefaces. A “serif” is a small stroke attached to the ends of letters, giving them a traditional feel such as in books and newspapers.sans-serif typefaces do not have these stroke and are smooth giving them a modern feel  
Serif is further divided into didone(looks expensive), slab(like a book) and old style(like a newspaper). San-serif is also divide into humanist, geometric and grotesk.  
Monospace fonts have equal spacing between the glyphs hence the mono(one space)

### Things to consider when choosing fonts

1. Legibility of the font such as in paragraphs or in small sizes
2. Font style variants e.g fake variants will slant text to make it italic while true variants have a specific italic style
3. LAnguage support for foreign characters and glyphs
4. Ligature support
5. Font File size

### Using fonts on the web

Fonts can be added to a website using @fontface declaration such as the below

```css
@font-face {
	font-family: "MyWebFont";
	src: url("webfont.eot"); /* IE9 Compat Modes */
	src: url("webfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
			url("webfont.woff2") format("woff2"),
		/* Super Modern Browsers */ url("webfont.woff") format("woff"), /* Pretty Modern Browsers */
			url("webfont.ttf") format("truetype"),
		/* Safari, Android, iOS */ url("webfont.svg#svgFontName") format("svg"); /* Legacy iOS */
}
body {
	font-family: "MyWebFont", Fallback, sans-serif;
}
```

or by linking to a cdn using the link tag in html

```html
<html>
	<head>
		<link
			href="https://fonts.googleapis.com/css?family=Roboto"
			rel="stylesheet"
		/>
		<style>
			body {
				font-family: "Roboto", sans-serif;
			}
		</style>
	</head>
</html>
```
