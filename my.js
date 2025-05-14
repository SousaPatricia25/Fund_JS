// const saudacao = document.querySelector("p"); 

// function saudar (nome = "visitante") {
//     saudacao.textContent = `Olá ${nome}!`;
// }

// saudar();

// const imagem = document.querySelector("img");

// imagem.setAttribute("src ")



// const paragrafo = document.querySelector("p");

// paragrafo.classList.add=("ativo");

// const paragrafo = document.querySelector("p");


// function verificarIdade (idade) {
//     if (idade>=18) {
//         return paragrafo.classList.add("maior")
//     } else{
//         return paragrafo.classList.add("menor")
//     }
// }
// verificarIdade(15);



// const caixa  = document.querySelector("div");
// const paragrafo = document.createElement("p");


// paragrafo.textContent = "E ai";
// caixa.appendChild(paragrafo);

// const paragrafo2 = document.createElement("p");
// paragrafo2.textContent = "Olá";

// caixa.insertBefore(paragrafo2, paragrafo)

const lista = document.querySelector("ul");

function verificarIdade(numero){
    if(numero>=18){
         return  lista.insertAdjacentHTML("beforeend", "<li>menor</li>");
    }else {
       
        return lista.insertAdjacentHTML("aferbegin", "<li>maior</li>");
    }
        }

verificarIdade(15);
