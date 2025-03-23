const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path ='public'} = options
    
    const app = express ()

    //para poder usar middlewars se usa la palabra "use" (de express)
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible para su uso 

    app.get('*', (req, resp) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        resp.sendFile(indexPath);
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)

    })

}

module.exports = {
    startServer
}