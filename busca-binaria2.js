//Pré requisito para busca binaria: O conjunto de dados
//Precisa estar ordenado pelo critério de busca
let comp = 0

//Implementação iterativa
function buscaBinaria(lista, valorBusca, fnComp){
    let inicio = 0
    let fim = lista.length-1

    while(fim >= inicio) {
        //Math.floor(): Retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        //Verifica se o valor na posição meio é o valor de busca
        if(res === 0){
            comp ++
            return meio
         }
        else if(res < 0){
            comp += 2
            fim = meio -1
        }
        else { //res > 0
            comp += 2
            inicio = meio + 1

        }
    }
    return -1 //Valor não encontrado
}

function comparaNome (obj, valorBusca){
    //Quando os dois valores são iguais
    if(valorBusca === obj.first_name) return 0
    //Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    //Um número positivo para indicar que o primeiro > segundo
    else return 1 //valorBusca > obj.first_neme
}

let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes,'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')
console.log('Comparações:', comp)

console.log('--------------------------------------------------')

//Método usando arrow function (Neste caso não compensa muito, pois teira que ordenar o vetor para a busca nova busca)

comp = 0 
console.time('ENEDINO')
console.log(buscaBinaria(listaNomes,'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações:', comp)