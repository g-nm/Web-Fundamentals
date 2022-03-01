# Colors

-  The color css property is used to set the foreground color of a text or text-decoration, it also sets the current color of an item
-  The color property can be set to a named value, hex value, rgb value, hsl value and keyword value such as current color
-  Alpha values can also be set on the hex,rgba and hsla values

```css
p {
	color: red;
}
p {
	color: #f00;
}
p {
	color: #ff0000;
}
p {
	color: rgb(255, 0, 0);
}
p {
	color: rgb(100%, 0%, 0%);
}
p {
	color: hsl(0, 100%, 50%);
}

/* 50% translucent */
p {
	color: #ff000080;
}
p {
	color: rgba(255, 0, 0, 0.5);
}
p {
	color: hsla(0, 100%, 50%, 0.5);
}
```
