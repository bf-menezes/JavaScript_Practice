// Armazenamento de dados da Empresa

const empresa = {
    Nome: 'Cavalcante Odontologia e Estética',
    Cores: 'Verde, Roxo e Branco',
    Foco: 'Odontologia',
    Endereco: {
        Rua: 'Rua Saracura',
        Numero: 168,
        Bairro: 'Santa Mônica',
        Cidade: 'Feira de Santana',
        UF: 'BA',
    }
}

console.log(`A empresa ${empresa.Nome} está localizada na ${empresa.Endereco.Rua}, número ${empresa.Endereco.Numero}, ${empresa.Endereco.Bairro}, ${empresa.Endereco.Cidade}, ${empresa.Endereco.UF}.`)
