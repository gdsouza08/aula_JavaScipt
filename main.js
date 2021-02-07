
function voltar(){
    document.getElementById("trocar").innerHTML = ("Tirou o mouse")
}


function trocar(){
    document.getElementById("trocar").innerHTML = ("Passou o mouse")
}


function carregar(){
    alert("Página Carregada")//funcao onload
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = ("<b><i>Obrigado por clicar</i></b>");//exibir msg ao clicar
    //alert("Botão foi clicado");
}

function redimensionar(){
    window.open("https://www.google.com.br/");//redireciona para outra aba
    //redireciona na mesma aba
    //window.location.href = ("https://www.google.com.br/");
}

/*
var validaCPF;
function valida(CPF){
    if(CPF == "429.539.688-57"){
        validaCPF = true;
    }else{
        validaCPF = false;
    }
    return validaCPF;
}

var CPF = prompt("Digite seu CPF");
valida(CPF);
console.log(validaCPF);
*/
//function soma(n1, n2){
 //   return n1 - n2;
//}
//alert(soma(20, 10));

//var d = new Date();
//alert(d.getMinutes());



//var count;
//for(count = 0; count <= 5; count ++){
  //  alert(count)
//}

//var count = 0;
//while (count <= 5) {
  //  alert(count)
    //count++;
//}

//var idade = prompt("Qual sua idade?")

//if(idade >= 18){
//  alert("Maior de idade")
//}else{
//  alert("Menor de idade")
//}



// dicionários
/*
var frutas = [{ nome: "maçã", cor: "Vermelha" }, { nome: "uva", cor: "roxa" }]//json
console.log(frutas)



var fruta = { nome: "maçã", cor: "Vermelha" }//json
console.log(fruta.nome);


var lista = ["maçã", "melão", "melância", "laranja"]

console.log(lista)
lista.push("uva") //adiciona um item no final da lista
lista.pop()//retira o ultimo item da lista
console.log(lista.reverse())// inverte a ordem do array

console.log(lista.toString())// mostra o array como string
console.log(lista.join(" | "))// personaliza a separação das strings
*/

//var nome = "Guilherme Amorim";
//var idade = 25;
//var frase = "O rato roeu a roupa do rei de Roma"
//alert(nome + " tem " + idade + " anos");
//console.log(frase.replace("O rato roeu a roupa do rei de Roma", "..."));
//console.log(frase.toUpperCase);
//console.log(frase.toLowerCase);
