## Introduction to CSS Grid

CSS Grid is a 2 dimensional grid-based layout system

### Grid Container

To use grid you must define a display property of grid on a container element and set the row sizes with grid-template-columns and grid-template-rows

### grid-template-columns/grid-template-rows

Defines the columns and rows of a grid. They take in a track size e.g in fr,px,percentages...and an optional grid line name
if a grid line name is not provided they are assigned a positive number starting from one.

```css
grid-template-columns: 100px 1fr auto;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: minmax(10px, 1fr) 3fr;
```

### grid-template-areas

Defines a grid template which can be referenced using the grid area property in a grid item.
A period represents an empty cell

```css
/* in a grid container */
grid-template-areas:
	"header header header"
	"leftsidebar main rightsidebar"
	"footer footer footer";
/* grid item */
grid-area: header;
```

### grid-template

This is a shorthand property which is used to set grid-template-rows,grid-template-columns and grid-template-areas.Setting the value to none resets all three values to their initial state

```css
/* format <grid-template-rows> / grid-template-columns */
grid-template:
	"header header header"
	"leftsidebar main rightsidebar"
	"footer footer footer" / 1fr 1fr 1fr;
/* is similar to  */
grid-template-areas:
	"header header header"
	"leftsidebar main rightsidebar"
	"footer footer footer";
grid-template-rows: 1fr 1fr 1fr;
```

### Setting gaps

Gaps are used to set the size of the grid lines.  
The property ie on the grid container and takes a size as a value e.g

```css
column-gap: 10px;
row-gap: 10px;
grid-row-gap: 10px;
grid-column-gap: 10px;
/* gap is a shorthand taking row-gap column-gap */
gap: 10px;
```

### Aligning content in a container

- justify-items

  - Aligns grid items along the row axis

  ```css
  justify-items: start|end|center|stretch(default);
  ```

- align-items
  - Aligns grid items along the column axis
  ```css
  align-items;start|end|center|stretch(default);
  ```
- place-items
  - Shorthand property to set align-items and justify-items
  - If one value is provided it is set on both properties
  ```css
  /* value:align-items justify-items */
  place-items: center stretch;
  ```
- justify-content
  - When a grid is smaller than it's grid container this property can be used to align the grid along the row(inline axis)
  ```css
  justify-content: start| end| center| stretch| space-around| space-evenly|
  	space-between;
  ```
- align-content
  - Similar to justify content this property can be used to align the grid on the column(block axis)
  ```css
  align-content: start| end| center| stretch| space-around| space-evenly|
  	space-between;
  ```
- place-content

  - Shorthand property to set align-content and justify-content.

- grid-auto-columns / grid-auto-rows
  - This specifies the size of auto-generated/incoming grid tracks
  - This ensures that any added grid track will have a set size rather than the default width of zero
- grid-auto-flow
  -This property helps in auto placing grid items in the grid for items which are not explicitly placed
  ```css
  grid-auto-flow: row(default) |column|dense;
  ```
- grid

  - A shorthand property to set grid-template-row,grid-template-columns,grid-template-areas,grid-auto-rows,grid-auto-columns and grid-auto-flow

  ```css
  /* using none sets all sub properties to their initial properties */
  grid:
  	none|<grid-template> |<grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?|
  	[ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>;
  ```

### Properties on grid items (children)

- grid-(column|row)-(start|end)
  - The property determines a grid items location inside a grid
  ```css
  grid-column-start: <line>| span <number>| span <name>| auto;
  ```
- grid-(column|row)
  - SHorthand property of the above
  ```css
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  ```
  - If no second value is not provide the item will span one grid track
- grid-area
  - This property gives a grid item a name based on the grid template areas, this thus affects the positioning of the item in the grid.
  - This property can also used as a shorthand for grid-row-start/grid-column-start/grid-row-end/grid-column-end
  ```css
  /*Positions the item based on the name header in the grid-template areas*/
  grid-area: header;
  /*Using the grid item position */
  grid-area: 1 / col4-start / last-line / 6;
  ```
- justify-self
  - Aligns the grid item based on the row(inline) axis within its cell
  ```css
  justify-self: start | end | center | stretch;
  ```
- align-self
  - Aligns the grid item based on the column(block) axis within its cell
  ```css
  align-self: start | end | center | stretch;
  ```
- place-self
  - This is a shorthand property of align-self and justify-self
