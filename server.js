/*
const EventEmitter = require('events')

let monEcouteur = new EventEmitter()

monEcouteur.on('saute', function (a, b) {
    console.log("J'ai sauté", a, b)
})

monEcouteur.emit('saute', 10, 20)
monEcouteur.emit('saute')
monEcouteur.emit('saute')
monEcouteur.emit('saute')
*/
let app = require('express')()

app.get('/', (request, response) => {
    response.send('Salut tu es à la racine')
})

app.get('/demo', (request, response) => {
    response.send('Salut tu es sur la démo')
})

app.listen(8080)
/*
let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name    
    fs.readFile('index.html', 'utf-8',  (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            data = data.replace('{{ name }}', name)
            response.end(data)
        }
    })
    
})
server.listen(8080)
*/
