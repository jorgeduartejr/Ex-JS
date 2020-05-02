// Este conceito se chama recursividade, na qual uma função chama a outra.
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(7))

// n!= n x (n-1)!