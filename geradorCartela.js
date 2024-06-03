const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const I = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const N = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const G = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const O = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

const bingo = [B, I, N, G, O]
let cartela = []; 

for (let i = 0; i<bingo.length; i++){    
    gerarCartela(bingo[i])
}


function gerarCartela(array){ 
    for (let i = 0; i < 5; i++){
        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * array.length);
        } while (cartela.includes(array[numeroSorteado])); // Verifica se o número já está na cartela
        cartela.push(array[numeroSorteado]);
    }  
}

console.log(cartela.length);



