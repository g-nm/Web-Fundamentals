## Introduction to Flexbox

Flexbox is a one dimensional layout technique which arranges items in rows and columns

Flexbox allows us to

- Vertically and horizontally center items within their parent
- Make children of a container have equal width and height
- Make columns in a multiple-column layout adopt the same height even if they contain a different amount of content

When an element is given a display value of flex it interacts as a block level element bu it's children act as flex items.  
WHen elements are laid out as flex items they are along two axes

- The main axis which is laid out in the direction of the flex items
- The cross axis which runs perpendicular to the cross axis
  e.g  
  If an element's flex items are laid out in a row the main axis is along the row and the cross axis in perpendicular to the row (column)

Incases where a fixed height and width is set on a container flex items can overflow therefore to mitigate this a flex-wrap property can be added to the flex container

- The flex-flow shorthand can be used to define the flex-direction and flex wrap in one property
- The flex shorthand property can be used to define
  - flex-grow which denotes how many times will the flex item in comparison to it's counter parts
  - flex-shrink which defines how far the element will shrink to prevent an overflow
  - flex-basis which is the minimum size of a flex item
    Flexbox can also be used to vertically and horizontally align flex items  
     The align-items property controls where the flex items sit on the cross axis  
     Justify-content property controls where flex items sit on the main axis
    FLexbox also provides an order property which which can be set on a flex item to position it in the flex container.Flex items with higher order values will appear later in the display order items have a default value of 0
