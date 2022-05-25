export function somar(a,b) {
    return a + b;
}

export function dobro(n) {
    return n * 2;
}

export function temperatura (t) {
    if (t > 37.8) {
        return true;
    }
    else {
        return false;
    }
}

export function corprimaria (c) {
    c=c.toLowerCase();
    if (c == "vermelho" || c == "azul" || c == "amarelo") {
        return true;
    }
    else {
        return false;
    }
}

export function cinemaIngresso (qtdInteira,qtdMeia,dia,nacionalidade) {

    if (nacionalidade.toLowerCase() == "brasileira") {
        return (qtdInteira + qtdMeia) * 5;
    }

    else if (dia.toLowerCase() == "quarta-feira") {
        return (qtdInteira + qtdMeia) * (28.5/2);
    }
    else {
        return (qtdInteira * 28.5) + (qtdMeia * 28/2);
    }

}

export function maiorNumero(numeros){
    let maior = Number.MIN_VALUE;
    for (let item of numeros){
        if (item > maior)
        
            maior = item;
        }
        return maior;
    }


export function frequenciaCaracter(texto,caractere) {
    let qtd = 0;
    for (let letra of texto) {
        if (letra == caractere)
            qtd++;
    } 
    return qtd;
}


