function inverterString(string){
    let size = string.length;
    let charArray = string.split(""); // Como Strings em JS são imutáveis, é preciso converter em Array de Char pra poder operar sobre os índices da String.
    let buffer;

    for(let i = 0; i < (Math.trunc(size/2)); i++){ // Basicamente é uma sequência de Swaps, primeiro pelo último, segundo pelo antepenúltimo, e assim sucessivamnte.
        buffer = charArray[size-i-1];
        charArray[size-i-1] = charArray[i];
        charArray[i] = buffer;
    }

    return charArray.join(''); // Aqui o charArray é convertido novamente para String
}

console.log(inverterString("Socorram-me! Subi no ônibus em marrocos")) // Inserir aqui a String a ser inserida.
