const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Our Homepage')
    }

    if(req.url==='/about'){
        res.end('This is About us')
    }

    res.end(`<h1>Oops</h1>
    <p>We cant find your page</p>
    <a href="/">back home</a>`)
})

server.listen(5000)