// Funções são ações executadas assim que são chamadas ou em decorrencia de algum evento
// Uma fundão pode receber parâmetros e retornar um resultado
// Uma função no js só pode ter 1 retorno.
function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(2)
console.log(res)

//https://github.com/gabrieldarezzo/helpjs-ravi