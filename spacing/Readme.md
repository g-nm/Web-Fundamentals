# Spacing

## Margin

-  Margins are the most outward elements and are placed after the border of an element and separate elements from their neighbors
-  A margin can take 4 values starting from the top side of the element,right, bottom and finally left. This is similar to clock starting at 12 o'clock to 9 o'clock
-  A margin also only takes in a length, a percentage or auto value
-  Margin is a shorthand element
-  When one value is specified, it applies the same margin to all four sides.
-  When two values are specified, the first margin applies to the top and bottom, the second to the left and right.
-  When three values are specified, the first margin applies to the top, the second to the right and left, the third to the bottom.
-  When four values are specified, the margins apply to the top, right, bottom, and left in that order (clockwise).

```css
margin: 1em | 10% | auto;
margin-top: 1em;
margin-right: 1em;
margin-bottom: 1em;
margin-left: 1em;
```

## Padding

-  An elements padding is the space between the element and it's border
-  Padding is a shorthand element

```css
padding: 1em | 10%;
padding-top: 1em;
padding-right: 1em;
padding-bottom: 1em;
padding-left: 1em;
```

## Height

-  The height property defines the height of an element, by default the height is set to the content area but if box sizing is set to border box the height is determined by the border area
-  The min-height and max-height property override the height
-  The height can take a value which is a percentage, length and a keyword value

```css
/* <length> values */
height: 120px;
height: 10em;

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Global values */
height: inherit;
height: initial;
height: revert;
height: unset;
```

-  Heights should not be directly rather the min-height property should be used

## Width

-  The width property defines the width of an element, by default the width is set to the content area but if box sizing is set to border box the width is determined by the border area
-  The min-width and max-width property override the width
-  The width can take a value which is a percentage, length and a keyword value

```css
/* <length> values */
width: 120px;
width: 10em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: unset;
```

-  When setting width use percentages since they are able to grow and shrink but also set a max-width
