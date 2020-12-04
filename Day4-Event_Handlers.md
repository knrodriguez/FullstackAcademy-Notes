# Event Handlers and Triggers
## Event Handlers

```js
  element.addEventListener('click',callbackFunction);
```

- Keep looking for any clicks on this element, and when clicked, execute this callbackFunction.
- Event examples:
  - click
  - form (submit)
  - mouseover
  - scroll

## Bubbling (Event Propogation)

Events will trigger on the specific innermost element, and then trigger outward to each outer element until you reach the outermost layer (i.e. document).

```js
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function (evt) {
  console.log('button was clicked!');
});
const dib = document.getElementById('one');
div.addEventListener('click', function (evt) {
  console.log('something in the div was clicked!');
})
/* evt = callback function parameter given from the addEventListener method */
```
```bash
document
|--body
|--|--div (triggers 'something in the div was clicked!' alert)
|--|--|--button (triggers 'button was clicked!' alert)
|--|--div
|--|--div
```

## Event Delegation
We can manipulate the fact that events will bubble from lowest level nodes and place a listener higher up the chain to handle the smaller node events.
- `this` keyword is based on the element bound to .addEventListener().
```bash
action: a button is clicked!!

document
|--body
|--|--section -> register 1 event handler on parent (target=button, this=section)
|--|--|--div (target=button, this=div)
|--|--|--|--button (target=button, this=button)
|--|--|--|--button
```

## Event Capture
- How events traverse the DOM, deepest first and then bubble up.

## Stop Propogation
- Stop the bubbling up
`e.stopPropogation()`

<!-- @nested-tags:event handlers-->
