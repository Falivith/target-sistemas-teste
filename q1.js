function progressao_incremento(){
    let INDICE = 13, SOMA = 0, K = 0;
    while(K < INDICE){
        K++;
        SOMA = SOMA + K;
    }
    return SOMA;
}

console.log(progressao_incremento());
