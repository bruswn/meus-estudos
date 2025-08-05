/* - Objetos representam entidades do mundo real.
- Pode ser visto como um "recipiente" que contém informações (dados) e comportamentos (funções).
- Semelhantes a objetos do mundo real que possuem características e ações que podem realizar.
- Obrigatoriamente começa com chaves {}.
- Consiste em pares de chave-valor, onde as chaves identificam as propriedades e os valores representam as informações armazenadas.
- São acessados por ponto .
*/

// Definindo um objeto básico
const pessoa = {
    Nome: "Bruna Swinerd",
    Idade: 25,
    BandaPreferida: "Bring me The Horizon"
}
// Acessando uma propriedade
console.log(pessoa.Nome)

// ARRAYS DE OBJETOS

const musicasBMTH = [
    {
        titulo: "Can You Feel My Heart",
        album: "Sempiternal",
        ano: 2013,
        genero: "Metalcore"
    },
    {
        titulo: "Shadow Moses",
        album: "Sempiternal",
        ano: 2013,
        genero: "Metalcore"
    },
    {
        titulo: "Sleepwalking",
        album: "Sempiternal",
        ano: 2013,
        genero: "Metalcore"
    },
    {
        titulo: "Teardrops",
        album: "Post Human: Survival Horror",
        ano: 2020,
        genero: "Rock Alternativo"
    },
    {
        titulo: "Kingslayer",
        album: "Post Human: Survival Horror",
        ano: 2020,
        genero: "Metal Eletrônico",
    }
];

console.log(musicasBMTH[0].genero)

musicasBMTH.push({
    titulo: "Throne",
    album: "That's the Spirit",
    ano: 2015,
    genero: "Rock Alternativo",
});

musicasBMTH.unshift({
    titulo: "It Never Ends",
    album: "There Is a Hell...",
    ano: 2010,
    genero: "Metalcore"
});

console.log(musicasBMTH)






