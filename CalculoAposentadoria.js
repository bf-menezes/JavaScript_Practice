// Cálculo da Aposentadoria

const nome = 'Bruno'
const sexo = 'M'
const idade = 60
const contribuicao = 35

const regra = (idade + contribuicao)

if (sexo === 'M') {
    if (contribuicao >= 35 && regra >= 95) {
        console.log(`${nome}, você pode se aposentar.`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar.`)
    }
}

else if (sexo === 'F') {
    if (contribuicao >= 30 && regra >= 85) {
        console.log(`${nome}, você pode se aposentar.`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar.`)
    }
}

else {
    console.log('Sexo não identificado.')
}

