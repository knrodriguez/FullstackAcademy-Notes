# React Lifecycle

### What is "lifecycle"?
- When we render a component, REact components go through several different stages in addition to the "render" stage
- React exposes the abaility to "hook" into these stages so that we can perform certain actions ourselves.
  - Kind of like adding an event listener

## The Initial Render
1. Call ReactDOM.render
2. render
3. Mounted component (converted to nodes on the DOM)
4. componentDidMount

### "Mounting"
- When the JSX your component represents get converted to

Component Did Mount
- Method: `componentDidMount`
- Fires after the initial rendering
  - Doesnot fire on subsequent renderings caused by setState
- A great place to perform AJAX requersts to fetch data from your server
- A great place to attach event listeners to non-React elements
(ex. window.addEventListener('scroll'))

```js
class Blog extends React.Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount(){
    const res = await axios.get('/api/posts')
    const posts = res.data
    this.setState({posts:posts})
  }

  render(){
    //omitted for brevity
  }
}
```
## Subsequent Renders
1. Mounted component
2a. setState | 2b. re-rendered by parent | 2c. removed
3a. render | 3b. render | 3c. componentWillUnmount
Go to 1

### Render
- This is when the component's render method is invoked
  - Or when the functional component itself is invoked
- React compares the JSX output of the render method with it's internal "virtual DOM". and makes a decision about how to update the actual DOM in a performant way.

### Virtual DOM
- Just a big JS Object representing the DOM tree
  - internal, used by React when you render
- Theory: manupulating the actual DOM is more expensve computationally than doing a little bit of JS
- So, React does a little bit of JS first so that it can do as little manipulation of the actual DOM as possible.

### Component Will Unmount
- Method: `componentWillUnmount`
- Great place to "clean up" things
  - clear timers or intervals
  - remove event listeners


### What lifecycle events are being called?
- "render","componentDidMount"

### What aboiut componentWillUnmount?

### What happens when we want to add another color or receive variable data than just 3 hardcoded Color components?

<!-- @nested-tags:react,react/lifecycle-->
