 // http moduleall work will revolve around server.

 const http = require('http');

 const server = http.createServer((req,res)=>{
    // console.log(req);

    if(req.url === '/'){
        res.write('welcome')
        res.end();
    }
// res.write('Welcome to our homepage');
// res.end();
if(req.url === '/about')
    {
        res.write('here is our short history')
        res.end();
    }
    res.write(`<h1>oops</h1>
    <p>we cant see what you want</p>
    <a href="/">go back</a>`)
    res.end();
 })

 server.listen(5000);