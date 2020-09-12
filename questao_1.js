/**
    QUESTÃO I
    Dado um array de números inteiros, retorne os índices dos
    dois números de forma que eles se somem a um alvo
    específico.
    Você pode assumir que cada entrada teria exatamente uma
    solução, e você não pode usar o mesmo elemento duas
    vezes.
 */

function get_indexes(array, target) {
    let x, y, sum;
    
    for (let i = 0; i < array.length; i++) {
        x = array[i];
        for (let j = 0; j < array.length; j++) {
            y = array[j];
            sum = x + y;
            if (sum == target) {
                return [i, j];
            }
        }
    }

    return false;
}

let n_arr = [1, 2, 3, 4, 5];
let target = 9;

console.log(get_indexes(n_arr, target));