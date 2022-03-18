const app = require('../src/app');

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})


/* No código a cima nós estamos importando um modulo que iremos criar nos próximos passos,depois
 estamos definindo uma porta para que ele seja executado, no final estamos passando para o método
  app.listen a porta que queremos que ele escute o nosso projeto e de um console.log com ela. */
