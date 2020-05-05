// Programa que armazena um array de usuários

const programadores = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


function ImprimeTecnologia (prof) {
    for (let i = 0; i < prof.length; i++) {
        console.log(`${prof[i].nome} trabalha com ${prof[i].tecnologias[0]} e ${prof[i].tecnologias[1]}`)
    }
}

ImprimeTecnologia (programadores)

function checaCSS (prof) {
    for (let i = 0; i < prof.tecnologias.length; i++) {
        if (prof.tecnologias[i] === 'CSS') {
        return true
        }
    }return false
}


for (let i = 0; i < programadores.length; i++) {
    const progtrabCSS = checaCSS (programadores[i]);

    if (progtrabCSS) {
        console.log(`O profissional ${programadores[i].nome} trabalha com CSS`);
    }
}

