// function somar(a, b, c){
//     console.log(a + b + c);
// }
// somar(64, 75, 6565);


// let nome = prompt("Digite seu nome");
// function mostrarMensagem(n) {
//     alert(`Olá,${n}! Bem-vindo(a)!`);
// }

// mostrarMensagem(nome);


// let numero = Number (prompt("Digite um número maior ou igual a 10"));
// function Decrementar (numero) {
//     while (numero >= 0) {
//         console.log(numero);
//         numero --;
//     }
// }
// Decrementar(numero);


// function Saudar (nome = "visitante"){
//    alert(`Olá ${nome}`);
// }

// Saudar();
    
// let numero = Number (prompt("Digite um numero"));
// const funcao = function(n) {
//     if (numero % 2 === 0){
//     return `O número ${n} é par`
// } else {
//     return `O número ${n} é impar`
// }
// }
// console.log(funcao);

// const verificar = function (numero) {
//     if (numero % 2 === 0) {
//       return alert ("Seu numero é par");
//     }
//     return alert("Seu numero é impar");
// }
// const numero = Number(prompt("Digite um número:"));

// verificar(numero);

// const saudar = () => {
//     console.log("Olá");
    
// }

// saudar();

// const dobro = numero => numero *2;

// console.log(numero);


// let palavra;
// const verificar = palavra => {
//     do {
//         palavra = prompt("Digite uma palavra:");
//     alert(`Digite a palavra 'sair' para sair` )
//     } while (palavra !== `sair`);
//     console.log("Você saiu");
// }
   
// verificar(palavra);
   

// const executar =  () => {
//     let palavra;

//     do {
//         palavra = prompt("Digite uma palavra:");

//         alert(`Sua palavra foi ${palavra}`);
//     } while (palavra !== "sair");
//     alert("Programa encerrado.");
// }

// executar();


function executarCallback(numero1, numero2, outraFuncao) {
    outraFuncao(numero1, numero2);
}

executarCallback((numero1 , numero2)=> {
    console.log(numero1 + numero2);
    
})