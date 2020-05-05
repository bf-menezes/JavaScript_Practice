// Cálculo de IMC e Nível de Obesidade

const nome = 'Bruno';
const peso = 100;
const altura = 1.70;
const sexo = 'M'

const IMC = peso / (altura * altura)


if (IMC >= 30) {
    console.log(`${nome} seu IMC é de ${IMC}, você está acima do peso`)
} else {
    console.log(`${nome} seu IMC é de ${IMC}, você não está acima do peso`)
}


  



