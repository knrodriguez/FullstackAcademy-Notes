Foundation of our server
- Servers built on Node.js
  - Runtime environment (Chrome V8 JS engine)
  - Allows us to write JavaScript in an Operating System
  - Gives us path, module, require, etc.
  - built on http module using express
  - Express
    - Application written with Node.js
    - Provides a framework for writing web servers
  - Sequelize
    - Application written with Node.js
    - Provides a framework with interacting with a database from a Node application
    - ORM, it maps out rows that we get back from **pg** into instance and class types we are able to use in our JavaScript
    - Turns our request into SQL, sends it to pg, where pg sends to postgres and postgres responds to pg, and pg sends to Sequelize which will send to us in JavaScript datatypes.
  - Webpack
    - Module bundler to create one big file and import into our index.html
    - Loads babel to handle JSX
    - App written with Node.js
    - Takes many .js files and "bundles" them into one
    - Compiles special syntax like JSX into browser-safe JS using **Babel**
    - gives us access to import/export
  - Listens on port 8080
- Tables and instances are built inside PostgreSQL
  - Open source, object-relational database system
  - Is a server (always listening for SQL queries)
  - Communicate with postgres:// protocol using 'pg'
  - Listens on port 5432
- FrontEnd
  - React
    - Known as frontend framework
    - JavaScript library for building user interfaces
    - Executed on browser usually
    - Avails itself of special syntax not recognized by browsers (JSX)
    - Uses **babel** to convert JSX to HTML and JavaScript

1. Make HTTP GET "/" request
2. Looking for Index.HTML in our public folder (using express.static)
3. Send it back
4. HTTP GET "/style.css"
5. Express.static middleware, look for style.css file
6. Send style.css file back
7. HTTP GET "/bundle.js"
8. Express.static middleware, look for style.css file
9. Render the rest of the page since bundle.js is deferred
10. Execute our bundle.js file
11. in client : this.state{
  albums: []
}
12. HTTP GET /api/albums
13. Express middleware to find the route for it,
14. send back the data
15. in client: setState({...})


### Juke Data Flow Walkthrough
- What happens when I type in `http:localhost:8080`?
#### CLIENT SIDE
1. typed in localhost:8080 into the address bad and press enter

#### SERVER SIDE
`GET /`

2. i send an HTTP request to my server that is listening on port 8080
- find the entry point for my server -> wherever app = express() is located
  - we can check where we're listening from by looking inside of out `package.json` file to find out where ot all begins
- inside of `main.js` is where we start listening, whcih means the server's entry point is actually inside of `server/index.js`
3. run through all express middleware from top down: volletball (logging middleware - or morgan), body parsing middleware, express.static - look inside of our public folder
  - looking for `index.html` --> DO I HAVE IT? It's not there!
  - express.static is going to call `next` and we have to match on a different route
  - passes through express.static for some CSS files in node modules
  - passes through the `/fonts` route and does NOT match so we call next
  - does it match on `/api`? It does NOT match!
  - does it have some sort of extension? (is this a file of some sort?) We don't! soooo it calls next
  - OH HEY! It's a GET / route and we MATCH on it, so we send back the file `client/index.html`

#### CLIENT SIDE
4. the server responds with a 200/304 with the `index.html` file.
5. Browser's rendering engine needs to render our HTML!
  - the browser will make some separate API request to https://fonts.googleapis.com
  - hey! I might make a request for favicon eventually
6. we make a request for `/font-awesome.min.css`

#### SERVER SIDE
`GET /font-awesome.min.css`
  - hey there's probably a node module file that has this extension you're looking for!
  - res.sendFile(that file!)

#### CLIENT SIDE
7. make another request for `style.css`
- hunts over to the server + sends back this file!

#### SERVER SIDE
`GET /style.css`
  - hey there's probably a node module file that has this extension you're looking for!
  - res.sendFile(that file!)

#### CLIENT SIDE
8. MADE IT TO `/bundle.js`
- go BACK to the server side and look for a route that matches on `GET /bundle.js`

#### SERVER SIDE
`GET /bundle.js`
9. pass through all of our usual middleware and look inside of the public folder first since it's the first route that looks for a static file
- HUZZAH! We _DO_ have bundle.js here, so we send it back!

#### CLIENT SIDE
10. Wait to load bundle.js until after our entire HTML is created, which includes creating the div on line 12 of index.html so we can access it and inject our React!
11. after index.html is rendered to the DOM, we load out bundle.js
- we have to find the entry point! Where is the entry point to our bundle? And how can we find it?
  - look inside of our webpack config file (webpack.config.js) to find its entry point.
  - `client/index.js`

12. REACT!!! ReactDOM.render ---> Audio component
13. Audio component is a large file with pieces of information we don't care _too_ much about, but we do know that it runs its constructor, and other methods, and then RENDERS its component to the DOM.
14. renders `MAIN.JS`
  - runs constructor

  ```js
  this.state = {
    albums: [],
    selectedAlbum: {} // is an empty object: this.state.selectedAlbum.id -> undefined
  }
  ```
  - renders the Sidebar & `this.state.selectAlbum.is` is initially UNDEFINED so we render `AlbumsList`& also `Player`
  - both `Sidebar` and `Player` are functional components so we don't have to look into their state/etc.
  - `AlbumsList albums = {this.state.albums}` `albums = []`
    - map over albums, but since albums is EMPTY, we don't render anything
  - AlbumsList is mounted (functional component)
  - Sidebar and Player are mounted (functional component)
  - Main is mounted (class component) -> we get to run its lifecycle method `componentDidMount!`
    - make an axios call (HTTP request in the background) to `/api/albums`

#### SERVER SIDE
`GET /api/albums`

15. run through express middleware and don't match on any static files
16. we DO match on `GET /api` and enter the api folder
  -if I am requiring a folder, what file am I going to ? `api/index.js`
17. Inside of `/api/index.js` I have now prepended all of my URLs with `api`
18. Does this now match on `/albums`? --> `/api/albums`? YES! We match,s o wer get to go inside of the `albums.js` file.
19. We are prepended with `/api/albums`, which mean which route am I looking to match?
  - match on the `/` route
20. We then have Sequelize doing a query

##### QUERYING DATABASE (pg CLIENT TALKS TO POSTGRES SERVER)
21. Sequelize takes this query and turns it into SQL
22. Gives SQL to pg
23. pg makes a postgres request with SQL to Postgres
24. the Postgres database requrns data based off that query
25. pg gives this information _back_ to Sequelize
26. Sequelize transforms this data into JAvascript objects basedo n the classes we've created (i.e. models and instances)

#### SERVER SIDE (after Sequelize is done)
27. We get tgus data as `albums` on line 6 of `server/api/albums.j`
- send back this data to the client

#### CLIENT SIDE
28. We receive our albums instide of the `data` object from out axios request.
29. We can _setState_ to _CHANGE_ the _albums_ state from an empty array to data
```js
this.state.albums =[] // before
this.state.albums = [{id:1, name:...},{id:2, name:...}] //AFTER
```
30. After calling setState on a mounted component, what method fires? RENDER
31. Main's RENDER method is fired, and anythign that use `this.state.albums` is _rerendered_
  - Sidebar doesn't care
  - Player doesn't care
  - AlbumsList DOES care -> albums = {this.state.albums}
  - RERENDER AlbumsList
32. We receive the new Albums are props
33. WE then map over the NEW list of albums
```js
props = [{id: 1, name:...},...]
```
34. Render a list of Album components
35. New component wow! Album -> regular functional component
36. Everything then is rendered.
37. See if our user makes an other clicks, but that is the page displayed after we type in localhost:8080


<!-- @nested-tags:react,HTTP lifecycle,Juke Data Flow Walkthrough-->
