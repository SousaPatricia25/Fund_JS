// function verificarNumero (numero, callBack) {
//     if (numero >= 10){
//         callBack("Numero alto")
//     } else {
//         callBack("Numero baixo")
// }
// }
// function mensagem (texto){
//     console.log(texto);
// }
// verificarNumero(2, mensagem);


// const lista = ["Alex", "Yoshi", "Mario"];

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
    
// }

// const  lista =["Alex", "Yoshi", "Mario"]

// lista.unshift("Luigi")
// console.log(lista);

// const lista = ["a", "b","c", "d","e"]

// for(let item of lista) {
//     console.log(item);
    
// }

// function contarPares (lista){
//     let acumulador = 0;

//     for(let i = 0; i < lista.length; i++){
//         if (lista[i] % 2 === 0){
//             acumulador = acumulador + 1;
//         }
//     }

//     return acumulador;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(contarPares(arr));

const pessoas = [
    pessoa1 = {
        nome:"Alex",
        idade:29,
     },
    pessoa2 = {
        nome: "Yoshi",
        idade: 18,
    },
    pessoa3 = {
        nome:"Mario",
        idade:24,
    },
];
for (let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade >= 21){
    console.log(`${pessoas[i].nome} pode se  casar pois tem ${pessoas[i].idade} de idade`);
    } else{
        console.log(`${pessoas[i].nome} não pode se casar pois tem ${pessoas[i].idade} de idade`);
    }

}
