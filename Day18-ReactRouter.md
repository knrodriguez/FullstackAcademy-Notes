# React Router

Not Single Page Application (SPA)
  - User clicks link
  - GET request sent to server
  - Server responds with .html
  - GET /settings
  - Server responds with settings.html (but we lost index.html data)
  - Views are stored on the server, served up as HTML pages
  - When user goes to a new page, the browser navigates in totality, refreshing and retrieving a brand new HTML document.

Express Router is a middleware and:
  - router allows you to separate routes into individual set of buckets

## React Router
- keeps your UI in sync with the URL
- ties into URL and history to allow for easy navifation to and between different parts of your application
- easily integrates nesting of components

### Ingredients
- Router (either HashRouter or BrowserRouter)
- Routes (define where things are gonna go)
- Links (fancy anchor to talk to react router and retrieve correct information)

```jsx
import {HashRouter as Router} from 'react-router-dom';
// or import {BrowserRouter as Router} from 'react-router-dom';
const Main = () => {
  return (
    <Router>
      {/*basically everything else*/}
    </Router>
  );
}

//Syntax for a route
//if url = path, render component
//uses fuzzy matching ('/somepath/stuff' will match)
<Route path='/somepath' component={SomeComponent} />

//exact keyword will match entirely
//<Route path='/somepath' exact component={SomeComponent} />

//Syntax for link
// Like an a tag but better
//On click, find route that matches path, and render that component from Route
<Link to='somePath'>Go to SomePath</Link>
```

## Routes
### Route props
match: contains info about how a route's path matched the current url
- contains an especially useful param

history: manipulates browser history programmatically
  - an navigate using history.push
  - other methods for dealing with history (goBack, goForward)
  - alternative to using ```Link```

location: contains information about where the url is now

```jsx
//match------------------------------------------------
<Route path='/puppies/:puppyId' component={Puppy} />

const Puppy = (props) => {
  return <div>{props.match.params.puppyId}</div>
}
//------------------------------------------------------

//history-----------------------------------------------
class Puppy extends React.Component {
  handleClick =() => {
    console.log('You clicked!');
    this.props.history.push('/elsewhere');
  }
  render(){
    return (
      <button onClick={this.handleClick}>Go Elsewhere</button>
    )
  }
}
//------------------------------------------------------

//location----------------------------------------------
<Route path='/puppies' component={Puppies} />

class MainPage extends React.Componet {
  construction(){
    super();
    this.state = {
      user: {}
    }
  }
  render(){
    return (
      <Router>
        <div>
          <Route
            path = '/puppies'
            render={() => <Puppies user={this.state.user} />}/>
        </div>
      </Router>
    )
  }
}
//1st way to pass props
<Route
  path='/puppies'
  render={()=> <Puppies propName={propValue} />} />

//2nd way to pass props
<Route
  path='/puppies'
  render={(routeProps) => <Puppies {...routeProps} />} />
//------------------------------------------------------
```

