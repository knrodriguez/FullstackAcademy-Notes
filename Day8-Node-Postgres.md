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
