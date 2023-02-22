const http = require('http')

// a网站
let server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    const obj = {
        a:1
    }
    res.end(JSON.stringify(obj))
    // res.end(`callback(${JSON.stringify(obj)})`)
})
server.listen(1234, () => {
    console.log('server is running......')
})
