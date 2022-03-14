function add(n1, n2){
    return n1 + n2;
}

function substract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    if (n2 === 0) {
        console.log('NO SE PUEDE DIVIDIR POR CERO');
    } else {
        return n1 / n2;   
    }
}

exports.add = add;

