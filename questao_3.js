/**
    QUESTÃO III
    Digamos que você tenha um array para o qual o elemento i
    é o preço de uma determinada ação no dia i.
    Se você tivesse permissão para concluir no máximo uma
    transação (ou seja, comprar uma e vender uma ação), crie
    um algoritmo para encontrar o lucro máximo.
    Note que você não pode vender uma ação antes de
    comprar.
 */

function max_profit(array) {
    let best_profit = 0, diff, buy_day, sell_day;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (i == j) continue;
            diff = (array[j] - array[i]);
            if (diff > best_profit) {
                best_profit = diff;
            }
        }
    }

    return best_profit;
}

console.log(max_profit([7,1,5,3,6,4]));