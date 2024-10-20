// Não podemos criar constantes com palavras reservadas 
// Ex: let, console, if

// Constantes precisam ter nomes significativos
// Ex: nomeCliente, nome, amigo

// Não posso começar o nome de uma constante com um número
// Ex: 1nome, 23nomedocliente

// contantes não pode conter espaços ou traços
// Ex: nome-cliente, nome do cliente, nome,cliente

// Utilizamos camelCase (mesclar letras Maiusculas e Minusculas)
// Ex: nomeCompletoDoCliente

// Case-Sensitive (Letra maiuscula e minuscula faz total diferença)
// Ex: let nomeCliente = 'Felipe'(Usando letra maiuscula Felipe), let nomecliente = 'Dede'(usando minuscula Dede)

// Não podemos modificar o valor de uma constante

// NÃO UTILIZE VAR, UTILIZE CONST

// + - * / operadores aritmeticos

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado)
let resultadoDuplicado = resultado * 2;
resultadoDuplicado = resultadoDuplicado + 10; // Valor alterado
console.log (resultadoDuplicado);

console.log ( typeof primeiroNumero ); // TYPEOF = tipo da variável primeiroNumero