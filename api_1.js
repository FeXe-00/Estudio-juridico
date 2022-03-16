
function crearApis(app) {
    app.get('/hello', hello)
    app.get('/formulario', form)
}

function hello(req, res) {
    return res.send('hello World!')
}

function form(res, req) {
    res.send('formulario enviado...');
}




module.exports = crearApis;

