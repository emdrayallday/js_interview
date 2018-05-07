// go to moo.com
// you get javascript that requests from foo.com
// by default browser only wants data from moo.com
// it exists b/c of security feature

// cors lets you selectively unblock certain requests

/*

get requests to foo.com and sets origin to moo.com
is value to header access-control-allow-origin is same as were request
came from.

server can also pass a *, which will allow all access to it.

if origin doesn't match the access-control-allow-origin, then it will block it

 ****** the response is blocked, not the request going out!! *****

*/

/*
put requests
delete
post

sends a pre=flight requests

HTTP request with options, origin: moo.com , access-control-request-method: put

basically asking foo.com (server) if we can make a change to server

SERVER SENDS BACK

access-control-allow-origin: moo.com
access-control-allow-methods: put

IF pre-flight is successful, only then will the origin request the put. and server will
return back the access-control-allow-origin. to check again.

*/
