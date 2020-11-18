
/*Ajustar tabuleiro ao tamanho*/
function ajustetab(){
  alert("Ajustando o tabuleiro !");

  resizeTo(150,150)
}

/*Imprimir de quem é a vez*/
function vez(jogador){
    document.write("Vez de: " + jogador);
}

/*Verificar de quem é a vez*/
function verifvez(jogador){
    if(jogador == "O"){
  
    var vez = document.getElementById("vez");
    var text = 'Vez de O';

    vez.textContent = text;
  }
 else if (jogador == "X"){
    var vez = document.getElementById("vez");
    var text = 'Vez de X';

    vez.textContent = text;
 }
}

/*Gera um numero aleatório*/
function numRandom() {
    var numaleatorio = Math.floor(Math.random() * 2);
    if (numaleatorio == 0){
        jogador = "X";
        alert("Jogador 1 começa com " + jogador);
    }
    else if (numaleatorio == 1){
        jogador = "O";
        alert(" Jogador 1 começa com " + jogador);
    }    
  }
numRandom()
 
/*Coloca a jogada no tabuleiro*/
var njogadas = 0;
function jogada(celula){
    celulaclicada = document.getElementById(celula).innerHTML;
   if (celulaclicada == "X" || celulaclicada == "O"){
       alert("Este quadrado já foi selecionado!");
   }
   else{
        document.getElementById(celula).innerHTML = jogador;
        if (jogador == "X"){
            jogador = "O";
            njogadas += 1;
            
        }else{
            jogador = "X";
            njogadas += 1;
        }
   }
}

/*Verifica se alguem ganhou*/
function verificaganhou(){
    c11 = document.getElementById('cel11').innerHTML;
    c12 = document.getElementById('cel12').innerHTML;
    c13 = document.getElementById('cel13').innerHTML;
    c21 = document.getElementById('cel21').innerHTML;
    c22 = document.getElementById('cel22').innerHTML;
    c23 = document.getElementById('cel23').innerHTML;
    c31 = document.getElementById('cel31').innerHTML;
    c32 = document.getElementById('cel32').innerHTML;
    c33 = document.getElementById('cel33').innerHTML;
    
    if (((c11 == 'X') && (c12 == 'X') && (c13 == 'X') && (c11 == c12) && (c12 == c13)) || ((c11 == 'X') && (c22 == 'X') && (c33 == 'X') && (c11 == c22) && (c22 == c33)) || ((c11 == 'X') && (c21 == 'X') && (c31 == 'X') && (c11 == c21) && (c21 == c31)) || ((c21 == 'X') && (c22 == 'X') && (c23 == 'X') && (c21 == c22) && (c22 == c23)) || ((c31 == 'X') && (c32 == 'X') && (c33 == 'X') && (c31 == c32) && (c32 == c33)) || ((c12 == 'X') && (c22 == 'X') && (c32 == 'X') && (c12 == c22) && (c22 == c32)) || ((c13 == 'X') && (c23 == 'X') && (c33 == 'X') && (c13 == c23) && (c23 == c33)) || ((c31 == 'X') && (c22 == 'X') && (c13 == 'X') && (c31 == c22) && (c22 == c13))){
        alert('O Jogador "X" ganhou');
    }
    else if (((c11 == 'O') && (c12 == 'O') && (c13 == 'O') && (c11 == c12) && (c12 == c13)) || ((c11 == 'O') && (c22 == 'O') && (c33 == 'O') && (c11 == c22) && (c22 == c33)) || ((c11 == 'O') && (c21 == 'O') && (c31 == 'O') && (c11 == c21) && (c21 == c31)) || ((c21 == 'O') && (c22 == 'O') && (c23 == 'O') && (c21 == c22) && (c22 == c23)) || ((c31 == 'O') && (c32 == 'O') && (c33 == 'O') && (c31 == c32) && (c32 == c33)) || ((c12 == 'O') && (c22 == 'O') && (c32 == 'O') && (c12 == c22) && (c22 == c32)) || ((c13 == 'O') && (c23 == 'O') && (c33 == 'O') && (c13 == c23) && (c23 == c33)) || ((c31 == 'O') && (c22 == 'O') && (c13 == 'O') && (c31 == c22) && (c22 == c13))){
        alert('O Jogador "O" ganhou');
    }
    else if (njogadas == 9){
        alert ('Empate!')
    }
 }