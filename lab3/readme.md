# HTTP Module 
it is built in NODE.js module which allows developers to create web server ans web client without installing any external package 
one of the  msot important mdooule in NODE.js , originally designed for building scalable network application and web servers

1.create web server 
2.handle client request 
3.build REST APIs 
4. non-blocking I/O
5.Foundation of Express.js

## http status codes

- 200 -> Ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unautharized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal Server Error
  

# HTTP Module
## http status codes -> res.WriteHead( ), res.statusCode 
### server can send to the client
1. html file
2. json data
3. plain file
4. js file
5. any file to download
6. etc

## Type of information -> res.writeHead( ), res.setHeader( )
1. text/html -> for html file/contents
2. text/json -> for json data
3. text/css -> for css file/contents
4. application -> for file
5. text/plain -> for plain text file

### Note: .gitignore -> this files contains the list of files or folder that is not added to git, these files or folder that is not added in git , these files/ folder will not push on github