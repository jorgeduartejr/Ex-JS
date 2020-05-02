// Array/vetot ou uma variável composta é uma variável que tem vários elementos. Cada elemento é composto por seu valor e por uma chave de identificação
// let num =[ 5,8,4] setar uma variável composta
// num[3] = 6 - coloca o número 6 na chave 3
// num.push(7) - coloca o valor 7 na última chave possível
// num.length -  serve para contar quantos elementos tem (mas não precisa colocar parentese)
// num.sort() -  pega todos os valores e coloca em ordem crescente
// num.indexOf(7) - retorna a chave onde está o número

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}