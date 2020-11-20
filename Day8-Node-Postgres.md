# Node-Postgres

Daemon - background process
Postgres is a TCP server on port 5432 by default listening for requests, and sends one response.
Postgres is a server and a rDBMS.
Your computer is running a Postgres server.

||Transport protocol|Message Protocol|Content Type|
|:--|:---|:---|:---|
|Node + Express|TCP/IP|http://|Anything, HTML JSON XML TXT, etc.|
Postgres|TCP/IP|postgres://|SQL|

TCP maintains an open connection, IP is how info gets from one place to another
Mailing system
info from http:// gets split into small packets
IP will send them to the right address
TCP will arrange that package on the other side.

Package follows http:// or postgres:// protocol.

- database driver - implement protocol to talk to database
- implements postgres protocol in Node module
- Gives us a 'client' object that we can pass SQL to
asynchronously talks via the TCP

express talkts to client vis http:
pg inside of express talks in postgress and gives back to out client


Sending the database request

    Node app: our code calls a function provided by pg, passing a string SQL query
    pg driver: connects to postgres as a client and sends the SQL query using correct protocol
    postgres server: translates query into executing a series of file system operations

Receiving the database response

    postgres server: sends result of file system ops back to connected pg driver
    pg driver: parses the raw response and builds a JS array of row data
    Node app: receives a Promise that will eventually contain the array.

## Express.js

### Review
Client - something that makes (HTTP) requests
Server - something that respond to (HTTP) requests
Request - a formatted message sent over the nextwork by a client. Contains VERB, URI (route), headers, and body.
Response - server's reply to a request (formatted message). Contains headers, payload (e.g., wizard exercise, payload = html we sent back), and status.

Request-Response Cycle - the client always initiates by sending one request, and the server completes it by sending exactly one response.

Express Middle - function that receives the request and response objects of an HTTP request/response cycle and sends us on the next route.
`function (req,res,next) {}`
    - Execute any code such as logging then move to the next middleware function int he chain
    - Modify the request and the response objects then pass them to the next middleware function in the chain
    - End the request-response cycle (e.g., res.send)
### Express.Router
Method on express object that is able to create route handlers.
- Express providers a router middleware to create modular, mountable route handlers.
- Think of it as a "mini-app" that nests within an existing app.
- It lets you break up the major partsof your application into separate modules.
### RESTful
- Archietecture style for designing backend applications
### Request Body and Body Parser
- Post, put HTTP requestes can contain information in the body
- the request body is streamed and frequently compressed
express comes with a built-in middleware that automatically parses incoming request bodies.
- uses .urlencoded({extended:false});
So crud is all the things you can do, and REST is how you should do it

app.use(express.urlencoded or express.json) manipulate your req object to ADD a property called 'body'.


##Notes
- `npm run <script-name>` script-name is in package.json
