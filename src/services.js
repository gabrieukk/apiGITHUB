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
    if (c == "vermelho" || c == "azul" || c == "amarelo") {
        return true;
    }
    else {
        return false;
    }
}

export function cinemaIngresso (qtdInteira,qtdMeia,dia,nacionalidade) {

    let total = 0;

    if (nacionalidade == "brasileira") {
        total = (qtdInteira + qtdMeia) * 5.0;
    }

    else if (dia == "quarta-feira") {
        total = (qtdInteira + qtdMeia) * (28.5/2);
    }
    else {
        total = (qtdInteira * 28.5) + (qtdMeia * 28/2);
    }

    return total;
}

export function maiorNumero (numeros)
{
    let maior = - 1;

    for(let item of numeros)
    {
        if (item > maior)
        {
            maior = item;
        }
        return maior;
    }
}

