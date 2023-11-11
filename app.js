alert('Boas vindas ao jogo do número secreto');
let NumeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()*NumeroMaximo+1);
let chute;
let tentativas=1;

while (numeroSecreto!=chute){
    chute = prompt(`Escolha um número entre 1 e ${NumeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else { 
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';

    alert(`Isso aí, você descobriu o ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
