/* - Arrays são listas de dados.
- Obrigatoriamente começam com colchetes [].
- São acessados pelo índice.
*/

// Array de números
const numeros = [2,4,6,12,24];

// Array de strings
const cores = ["rosa", "laranja", "roxo", "verde"];

// Array misto
const numerosCores = [2,4,6,12,24, ["rosa", "laranja", "roxo", "verde"]];

// Quantidade de elementos 
console.log(numerosCores.length)

// Acessando os elementos
console.log(numerosCores[5][2])

// MANIPULANDO ARRAYS \\

// Adicionando elementos
numeros.push(36) // <--- Adiciona no final
console.log(numeros)
numeros.unshift(-2) // <--- Adiciona no início
console.log(numeros)

// Removendo elementos
cores.pop(); // <--- Remove o último elemento
console.log(cores)
cores.shift(); // <--- Remove o primeiro elemento
console.log(cores)

// Alterando elementos
cores[0] = "azul";
console.log(cores)






