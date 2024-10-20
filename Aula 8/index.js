/* Felipe Falavinha tem 23 anos, pesa 98 kg
tem 1.76 de altura e seu indiceMassaCorporal é 31.63739669421488
Felipe Falavinha nasceu em 2001
*/
const nome = 'Felipe'; 
const sobrenome = 'Falavinha';
const idade = 23 ;
const peso = 98;
const alturaEmM = 1.76;
let indiceMassaCorporal; 
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - idade

console.log(anoNascimento);

// + Pode ser utilizado para unir valores 
// ``${} template string 

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg.'); 
console.log(`E tem ${alturaEmM} metros de altura.`);
console.log(`Seu indice de massa corporal é de ${indiceMassaCorporal}.`);
console.log(nome + ' nasceu em,' + ' ' + anoNascimento + '.');

