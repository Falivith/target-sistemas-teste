function checkIfWasOnFib(check){
    
    if (check > 12586269025) // Cinquentésima casa de Fibonacci é o limite arbitrário proposto
    return ("Número grande demais!");

    let array = [0, 1] // Base
    let i = 2;

    while (!(array.includes(check)) && i <= 50){ // Faça enquanto o índice não passsar de 50 e o valor ainda não tiver sido encontrado
        let nextElement = array[i-2] + array[i-1];

        if (check < nextElement && check > array[i-1]){ // Garantia que o cálculo para se "check" não tiver mais chance de estar na sequência, evitando processamento desnecessário.
        array.push(nextElement);
        console.log(array);    
        return check + " não pertence a sequência de Fibonacci. ";
        }

        array.push(nextElement);
        i++
    }

    console.log(array); // Mostra o Array inteiro pra checagem da sequência até o número checado.
    return check + " está presente na sequência de Fibonacci.";
}

console.log(checkIfWasOnFib(5000)); // Altere na chamada da função o número a ser procurado
