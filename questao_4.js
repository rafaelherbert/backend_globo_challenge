/**
    QUESTÃO IV
    Dados n inteiros não negativos representando um mapa de
    elevação onde a largura de cada barra é 1, calcule quanta
    água é capaz de reter após a chuva.
 */


function rainmeter(array) {
    let parsed = [0]; // Não consideramos o 0.
    let rain = 0;

    array.forEach((elevation, first_index)=> {
        if (!parsed.includes(elevation)) {
            parsed.push(elevation); // Guardamos em um array a ocorrência desse nivel de elevação X para não calcular novamente

            for (var last_index = array.length; last_index >= 0; last_index--) {
                if (array[last_index] == elevation) { // Encontramos a ultima ocorrencia do nível de elevação X.
                    break;
                }
            }

            for (let k = first_index; k < last_index; k++) {
                if (array[k] < elevation) { 
                    rain++; // Para cada elevação menor que o nível de elevação X entre a primeira e ultima ocorrencia dele, adicionamos 1 ao total de chuva retida.
                }
            }
        }
    });

    return rain;
}

console.log(rainmeter([0,1,0,2,1,0,1,3,2,1,2,1]));