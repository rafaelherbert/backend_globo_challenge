/**
    QUESTÃO II
    Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].
    Dois brackets são considerados um par combinado se o bracket de abertura (isto
    é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
    mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).
    Um par de brackets correspondente não é balanceado se o de abertura e o de
    fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
    porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
    abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].
    Dado sequencias de caracteres, determine se cada sequência de brackets é
    balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
    NAO.
 */

const pairs = [
    '[]',
    '{}',
    '()'
];

function check_brackets(str) {
    for (let i = 0; i < str.length / 2; i++) {
        let pair = str[i] + str[str.length - (i + 1)];
        if (!pairs.includes(pair))
            return false;
    }
    
    return true;
}

console.log(check_brackets("{{[[(())]]}}"));