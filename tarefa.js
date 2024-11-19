// Classe abstrata
function Animal(nome) {
    this.nome = nome;
    this.pedeComida = function() {
        console.log(this.nome + " pede comida");
    }
}

//Classes herdeiras
function Gato(nome, idade, cor, tamanho) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.tamanho = tamanho;
}

function Cachorro(nome, idade, cor, tamanho, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.tamanho = tamanho;
    this.raça = raça;
}

//Instâncias de objetos
const animal1 = new Animal ("Mate");
const gato1 = new Gato ("Mate", 5, "Branco", "Porte grande");

const animal2 = new Animal ("Feijao");
const gato2 = new Gato ("Feijao", 3, "Preto", "Porte médio");

const animal3 = new Animal ("Bento");
const cachorro1 = new Cachorro ("Bento", 6, "Preto e branco", "Porte médio", "Vira-lata");



console.log (cachorro1);







