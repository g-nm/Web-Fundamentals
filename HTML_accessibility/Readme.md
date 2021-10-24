## HTML and Accessibility

Semantic HTML also known as POSH (Plain old semantic HTML) means using the right html elements for their  
intended purpose as much as possible.Using the correct html elements has built in keyboard accessibility

### Benefits of Semantic HTML

- It is easier to develop with since it has built in accessibility
- Good for SEO since search engines give priority to heading and links
- Better on mobile since it is easier to make responsive and lighter

### Good Semantics

- Should display text content using the appropriate HTML elements such as headings,paragraphs and lists
- Should use clear language e.g avoid dashes in numbering !(5-7) use 5 to 7, avoid abbreviations and expand acronyms
- Should use the appropriate sectioning html elements such as header,nav,aside,footer
- Should have the appropriate UI controls which improve keyboard accessibility through tabbing
- Use meaningful text labels such as on links and form inputs
- Use alt text in images this helps the visually impaired interact with images, using a title in an image also provides a tool tip with the title text

Attributes such as tabindex give elements a custom tab order, by setting the tabindex to 0 (tabindex="0")
an element which is not tabbable becomes tabbable and by setting it to -1 makes the element focusable programmatically

### Accessible data tables

Accessible data table make it easy for users with a disability to associate rows and columns this is achieved by...

- Wrapping the table head with a thead element, th element and setting a scope attribute on the th to either row,column
- Using a caption element in the table element which provides a context to non sighted users and also acts as a visual aid to sighted users who may find it useful
