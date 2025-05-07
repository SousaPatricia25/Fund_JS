// let nota = 75;

// if (nota >= 90) {
// console.log("Aprovado com Excelencia");
// }  else if (nota >= 60) {
//  console.log("Aprovado");
// }  

// else {
//     console.log("Reprovado");
    
// }

// let idade = 20;
// let habilitado = false

// if (idade >= 18 && habilitado); {
//     console.log();
    
// }

// let idade = prompt("Qual é a sua idade?")

// if (idade>=18){
//     alert("Maior de idade");
// } else {
//     console.log("Menor de idade");  
// }

// let nome = prompt("Qual o seu nome?");
// let idade = prompt("Qual a sua idade?");

// if (idade >= 18){
//     alert(`Olá ${nome}! Você pode dirigir`)
// }else {
//     alert(`Olá ${nome}! Você não pode dirigir`)
// }

// let nome = prompt ("Digite seu nome");
// let idade = prompt ("Digite sua idade");

// if (idade >=18) {
//     let habilitado = confirm("VocÊ é habilitado?");

//     if (habilitado){
//         alert(`Olá, ${nome}! Você pode dirigir.`);
//     } else {
//         alert(`Olá ${nome}! Você não pode  dirigir.`);
//     }   
// } else {
//     alert(`Olá ${nome}! Você é menor de idade.`);
// }

// let temperatura = prompt("Qual a temperatura local?");

// if(temperatura >35) {
//     alert("Calor extremo"); 
// } else if
//     (temperatura >=24) {
//         alert("Clima quente");
// } else if 
//     (temperatura >=14) {
//         alert("Clima agradável");
// } else if
//     (temperatura >=5) {
//         alert("Clima frio");
// } else {
//     (temperatura <5) 
//         alert("Frio intenso");
// }

// let ternario = 18 > 10 ? console.log("Verdadeiro.") : console.log("Falso.");


// let temperatura = prompt("Qual a temperatura atual?");

// temperatura > 35 ? alert("Calor extremo"):
// temperatura >=25 ? alert("Clima quente"):
// temperatura >=15 ? alert("Calor agradável"):
// temperatura >= 5 ? alert("Clima frio"): alert("Frio intenso");


// let numero = prompt("Digite o número");

// numero % 2 === 0 ? alert("É par") : alert("É ímpar");


// let cor = "vermelho"
// switch (cor) {
//     case "vermelho":
//         alert("Pare");
//         break;
//     case "amarelo":
//         alert("Atenção");
//         break;
//     case "verde":
//         alert("Siga");
//         break;
//     default:
//         alert("Semáforo com defeito.");
// }


let opcoes = parseInt (prompt(`Digite a opção desejada:
    1-Saque
    2-Transferencia
    3-Saldo
    4-Extrato`));

switch (opcoes) {
    case 1:
    alert("Sacar ***");
    break;
    case 2:
    alert("Transferir para ***********");
    break;
    case 3:
    alert("Seu saldo é *******");
    break;
    case 4:
    alert("O resumo da sua conta é ****************");
    defalt:
    ("Nenhuma das opçoes anteriores");
}
