// function processarUsuario (objeto, callBack){
//      if (usuario === true){
//          prompt("Digite seu nome.")
//         callBack(`Usuário ${nome} está ativo.`);
//     } else {
//         callBack(`Usuário ${nome} está ativo.`);
// }
// }
        
// processarUsuario();

// function exibeMensagem (mensagem){
//     console.log(exibeMensagem);
    
// }
// const usuario = {
//     nome: "Patricia",
//     ativo: true
// }

// exibeMensagem ();


const  usuario = {
    nome: "Patricia", 
    ativo: true
}

function processarUsuario (meuUsuario, funcaoCallback){
    if (meuUsuario.ativo) {
      return funcaoCallback (`Usuario ${meuUsuario.nome} está ativo.`);
    }
    return funcaoCallback(`Usuario ${meuUsuario.nome} está inativo.`)
}
function exibirMensagem(mensagem){
    console.log(mensagem);
}
processarUsuario(usuário, exibirMensagem);