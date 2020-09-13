function buscaSequencial (lista, valorBusca) {
    for(let i = 0; i < lista.length; i++){
        //Encontrou o que esta buscando: Retorna a posição em que foi encontrado
        if(lista[i] === valorBusca) return i
    }
    return - 1 // valorBusca nãom foi encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaSequencial(listaNomes,'FAUSTO'))
console.timeEnd('FAUSTO')

//TESTE DE SALVAMENTO