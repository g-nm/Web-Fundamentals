## Introduction to Flexbox

Flexbox is a one dimensional layout technique which arranges items in rows and columns

Flexbox allows us to

-  Vertically and horizontally center items within their parent
-  Make children of a container have equal width and height
-  Make columns in a multiple-column layout adopt the same height even if they contain a different amount of content

When an element is given a display value of flex it interacts as a block level element but it's children act as flex items.

```css
.container {
	display: flex;
	flex-direction: row | row-reverse | column | column-reverse;
	/* row(default) */
}
```

When elements are laid out as flex items they are along two axes

-  The main axis which is laid out in the direction of the flex items (defaults to row unless set by flex-direction property)
-  The cross axis which runs perpendicular to the main axis
   e.g  
   If an element's flex items are laid out in a row the main axis is along the row and the cross axis is perpendicular to the row (column)

Incases where a fixed height and width (by default flex items try to fit on one line) is set on a container flex items can overflow, to mitigate this a flex-wrap property can be set to the flex container

```css
.container {
	flex-wrap: nowrap | wrap | wrap-reverse;
}
```

-  The flex-flow shorthand can be used to define the flex-direction and flex wrap in one property

```css
.container {
	flex-flow: row wrap;
	/* flex-direction  flex-wrap */
}
```

-  The flex shorthand property can be used to define
   -  flex-grow which denotes how many times will the flex item in comparison to it's counter parts. Defaults to 0
   -  flex-shrink which defines how far the element will shrink to prevent an overflow. Every flex item has a default flex shrink of 1 making the element occupy the smallest space possible
   -  flex-basis which is the minimum size of a flex item. Flex basis can also override a width and height set on an item

```css
.item {
	flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

-  Flexbox can also be used to vertically and horizontally align flex items.
-  The align-items property controls where the flex items are placed on the cross axis
-  Justify-content property controls where flex items are placed on the main axis
-  Flexbox also provides an order property which which can be set on a flex item to position it in the flex container.Flex items with higher order values will appear later in the display order, items have a default value of 0
