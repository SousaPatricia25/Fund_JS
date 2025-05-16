// const usuario = {
//     nome: "Patricia",
//     idade:29,
//     hobbies: ["leitura", "programação"]
// }

// const json = JSON.stringify(usuario);

// const novoUsuario = JSON.parse(json);
// console.log(novoUsuario.hobbies[1]);

// const promessa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Dados perdidos no meio do caminho.");
//     },3000 );
// });

// promessa
// .then((resultado) => {
//     console.log(resultado);
// })
// .catch(erro)=>{
//     console.error(`Erro:  ${erro}`;
// });

// new Promise((resolve, reject) => {
//     resolve(10);
// })
// .then(numero => {
//     return numero * 2;
// })
// .then(numero => {
//     return numero + 5;
// })
// .then(numero => {
//     console.log(numero);
// })

// const nome = prompt("Qual seu nome?")
// const idade = prompt("Quantos anos você tem?")

// const promessa = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         idade>= 21 ? resolve (`Olá, ${nome} você pode entrar na festa.`)
//         : reject(`Você não pode entrar na festa.`)
//     },3000)
// })


// .then((resultado)=> {
//     console.log(resultado);
// })

// .catch((reject) => {
//     console.error(reject);
// })


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resposta => resposta.json())
//     .then(dados => {
//         console.log(dados);
//     })
//     .catch(erro => {
//         console.error(`Erro: ${erro}`);
//     })
  

//um modo
// const nomeDoUsuario = prompt("Qual o seu nome?")

// function saudar(nome, callback) {
//     callback(nome);
// }

// function mensagem(nome) {
//     alert(`Olá, ${nome}!`);
// }

// saudar(nomeDoUsuario, mensagem)

const nomeDoUsuario = prompt("Qual o seu nome?");

function saudar(nome){
    return new Promise((resolve) => {
       resolve(nome); 
    })
}

function exibirMensagem(nome) {
    alert(`Olá, ${nome}`);    
}

saudar(nomeDoUsuario).then(nomeVindoDoArgumento => {
    exibirMensagem(nomeVindoDoArgumento);
});

