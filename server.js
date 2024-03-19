const {Console} = require ('console');
const fs = require('fs');
const htp = require('http');
const port = process.env.PORT || 80;

// Author : CodzLab
// Js server req => res (v1.0)



const server = htp.createServer((req, res) => {
    // res.statusCode = 200;
    console.log(req.url);
    res.setHeader('entent-type', 'text/html');
    if (req.url=='/')
    {
        res.statusCode=200;
        const land = fs.readFileSync('in.html');
        res.end(land.toString());
    }
    else if (req.url=='/home')
    {
        res.statusCode=200;
        const land = fs.readFileSync('in.html');
        res.end(land.toString());
    }
    // as above 'else if' statement, you can add according to your needation
    else{
        res.statusCode=404;
        // const ntf = fs.readFileSync('404.html');
        res.end(`</h1>Error 404 Not Found</h1><p>This is error 404 page or request not found on the website.</p>`)
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port} port (https://codzlab.github.io/:${port}). Develope by Codzlab`);
});


  
