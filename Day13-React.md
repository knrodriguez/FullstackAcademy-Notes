# React.JS
A JavaScript library for building user interfaces

**Problem:** Making a User Interface is hard!
  **Why?** So much stuff to remember!

### State + View
- Every user interface has data (which we often call "state") and presents something based on that data.
- Any change to the underlying data should be reflected in the view.

## React
- DAta is called "state
  - More precisely: "state" is data that changes
- When you update "state", React re-renders the view for you in a performant way.

### Set State
- We do not directly mutate "state", we use a method called setState
  - Ex: this.setState({showStatus: "all"})
- **Why?** So that React can handle things intelligently if multiple updates happen all at once.
- When you set state, React will update its view.

### State and Props
- Reusing components with props
- Unidirectional data flow via props
- Class components vs. stateless functional components

```js
class Something extends React.Component{...}
//or
const Pizza = () => {
  return <div>Pizza Pie!</div>
}
```


## Notes
- Virtual DOM
- **The First Law:** State must always be initialized with the appropriate data type

<!-- @nested-tags:react-->
