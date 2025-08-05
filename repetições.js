// Exemplo de Array de Objetos

const livros = [
  { id: 1, nome: "JS para Iniciantes", categoria: "programação", preco: 59.9, vendidos: 120 },
  { id: 2, nome: "Node.js na Prática",   categoria: "programação", preco: 79.9, vendidos: 80  },
  { id: 3, nome: "UX Essencial",         categoria: "design",      preco: 64.9, vendidos: 50  },
];

/* FOR - Para percorrer cada livro pelo nome */
for(const element of livros){
    console.log(element.nome);
}


