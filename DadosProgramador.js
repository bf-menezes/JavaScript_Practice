// Armazenar dados do programador

const programador = {
    Nome: 'Bruno',
    Idade: 30,
    Tecnologias: [
        {nome: "C++", especialidade: 'Desktop',},
        {nome: "Python", especialidade: 'Data Science',},
        {nome: "JavaScript", especialidade: 'Web/Mobile',},
    ]
}

console.log(`O usuário ${programador.Nome} tem ${programador.Idade} anos e utiliza a tecnologia ${programador.Tecnologias[0].nome} com especialidade em ${programador.Tecnologias[0].especialidade}.`)

