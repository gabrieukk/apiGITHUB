import {dobro,somar,temperatura,corprimaria, cinemaIngresso, maiorNumero,frequenciaCaracter} from './services.js'

import { Router } from "express";
const server = Router();


server.get('/ping',(req,resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero',(req,resp) => {
     const numero = Number(req.params.numero);

     const d = dobro(numero);

     resp.send({
        dobro : d
    });
})

server.get('/somar', (req,resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar(a,b);

    resp.send({
        soma : x
    })
})

server.post('/somar', (req,resp) => {
    try {
        const {valores: { a, b }} = req.body;

        const x = somar(a,b);

        resp.send({
            soma : x
        })

    } catch (err) {
        resp.status(404).send({
            erro : err.message
        })
    }

})

server.get('/temperatura',(req,resp) => {
    const a = Number(req.query.a);

    const x = temperatura(a);

    resp.send({
        febre : x
    })
})

server.get('/corprimaria/:cor', (req,resp) => {
    try {
        const a = (req.params.cor);

        const x = corprimaria(a);

        resp.send({
            primaria : x
        });
    }   catch (err) {
        resp.send({
            erro : err.message
        })
}


})

server.post('/dia2/ingressocinema', (req,resp) => {
    try {
        const {qtdInteiras, qtdMeias, dia, nacionalidade} = req.body;

        const x = cinemaIngresso(qtdInteiras,qtdMeias,dia,nacionalidade);

        resp.send({
            valor : x
        });
    } catch (err) {
        resp.send({
            erro : err.message
        })
    }
})

server.post('/dia2/maiornumero', (req,resp) => {
    try {
        const numeros = req.body;

        const x = maiorNumero(numeros);
        resp.send({
            MaiorNumero : x
        });
    } catch (err) {
        resp.send({
            erro : err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere',(req,resp) => {
    try {
        const { texto, caractere } = req.params;
        const freq = frequenciaCaracter(texto,caractere);
        resp.send({
            frequencia : freq
        })
    } catch (err) {
        resp.send({
            erro : err.message
        })
    }
})

export default server;