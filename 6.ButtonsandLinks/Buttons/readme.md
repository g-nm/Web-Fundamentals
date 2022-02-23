### Button

-  Buttons are used to trigger functions, a button would be used in situations where javascript is needed for an action to be performed
-  Buttons in a form submit the form by default

```html
<button>CLick me</button>
```

-  In a form buttons by default submit the form they can also be set to reset the form clearing all values or behave as a normal button using the type attribute

-  Buttons can also override various form attributes such as formaction,formenctype,formmethod,formnovalidate and formtarget

```html
<form>
	<input type="text" />
	<!-- Default behavior submit  form -->
	<button>Submit</button>
	<!-- Clear all form inputs -->
	<button type="reset">Clear form</button>
	<!-- Normal button -->
	<button type="button">Click me</button>
	<!-- override the action -->
	<button formaction="/elsewhere/" type="submit">Submit to elsewhere</button>

	<!-- override encytype -->
	<button formenctype="multipart/form-data" type="submit"></button>

	<!-- override method -->
	<button formmethod="post" type="submit"></button>

	<!-- do not validate fields -->
	<button formnovalidate type="submit"></button>

	<!-- override target e.g. open in new tab -->
	<button formtarget="_blank" type="submit"></button>
</form>
```

-  Buttons can also have a autofocus attribute which will set the focus to the button on page load.This should generally be avoided since shifting the users focus without their permission leads to a bad user experience. This can still be used in situations such as showing modals to users
-  Buttons also have a disabled attribute which can be styled to show it cannot be clicked
-  Buttons have various states such as hover,active, focus and visited
-  Breakout buttons are buttons which have an expanded clickable area.This can be achieved by styling the buttons pseudo element to make it fill its parent.
-  Buttons can have listeners which will fire when an event has been executed such as a click
-  These can be added by

   1. Adding an event listener to the element. In the options object the once property can be set to true to make sure the event is only fired once

   ```JS
   document.querySelector("button").addEventListener('click', function(event) {
   event.currentTarget.setAttribute("disabled", true); }, { once: true });
   ```

   2. Using an onevent listener (inline event listener)

-
