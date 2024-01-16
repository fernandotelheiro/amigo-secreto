//Adicionar: formulário receber nomes e adicioná-los numa lista (amigos incluidos)
var friend = document.getElementById("nome-amigo"); //friend recebe o nome digitado
let amigosIncluidos = document.getElementById("lista-amigos"); // variavel que recebe campo dos nomes digitados
var friends = [];
var newFriends =[];
let scrambledFriends = document.getElementById("lista-sorteio");
var count = 0; // var contadora
var goneFriends = []; // var de nomes já sorteados
var goneFriend = []; // var de nomes digitados que receberão sorteio

function adicionar(){
    if (friends.includes(friend.value)){
        alert("Nome já digitado no sorteio.");
        friend.value = "";
        return;
    }
    if (friend.value === ""){ //caso não preencha o campo (string vazia)
    alert("Digite o nome de um amigo. Texto em branco.")
    }else{
    friends.push(friend.value); // array friends recebe friend
    document.getElementById("nome-amigo").value = ""; //esvazia campo de nome para proximo preenchimento
    amigosIncluidos.innerHTML = friends; //campo recebe array friends 
   }
}

function sortear(){
    //fisher-yates algorithm
    var newFriends = friends.slice();
    
    if (friends.length<4){
        alert(`Insira mais ${4 -friends.length} nome(s) para realização do sorteio. Valor mínimo para realização do sorteio é: 4.`);
        return;
    }
    if (count < 1){
    embaralhar(newFriends)
    for (let i = 0; i < friends.length ; i++ ){

           
        if (newFriends.length > 0 ){
                 if (friends.includes(goneFriend[i])){
                   goneFriend[embaralhar[i]];  // embaralha index do elemento para evitar repetições no sorteio
                   console.log("Rolou")        
                }
                scrambledFriends.innerHTML = scrambledFriends.innerHTML + friends[i] + '-->' + newFriends[i] + '<br>';
                goneFriends.push(newFriends[i]);  // adicionar elemento já sorteado num array próprio
                goneFriend.push(friends[i]); // adicionar elemento que ja apareceu como receptor de sorteio num array  
                count++;           
        };
        } 

    }   
    else {
        alert("Sorteio já realizado. Caso queira outro, clique em Reiniciar.")
    }
    
}

function newNew(array, currentIndex) { //trata o caso de A=A (a pessoa tirar a si mesma no sorteio)
    let newNew;

    do {
        newNew = embaralhar(array);
    } while (newNew === array[currentIndex]);

    return newNew;
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    friend.innerText = ""; //friend recebe o nome digitado
    amigosIncluidos.innerHTML = ""; // variavel que recebe campo dos nomes digitados
    friends = [];
    newFriends = [];
    scrambledFriends.innerHTML = "";
    count = 0;
} 

