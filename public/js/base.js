const nome = "thaís emig"
let nome2 = ""

console.log ("valor inicial")
console.log(nome2);

nome2 = "isabela"

console.log("valor alterado")
console.log(nome2);

function alterarnome() {
    nome2 = "maria silva";
    console.log("valor alterado");
    console.log(nome2);
}
    
function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome");
    console.log(nome2);
}



recebeEalteraNome("joao silva")
recebeEalteraNome("maria silva")

//alterarnome();