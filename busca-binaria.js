//Pré requisito para busca binaria: O conjunto de dados
//Precisa estar ordenado pelo critério de busca

let comp = 0
function buscaBinaria(lista, valorBusca){
    let inicio = 0
    let fim = lista.length-1

    while(fim >= inicio) {
        //Math.floor(): Retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        //Verifica se o valor na posição meio é o valor de busca
        if(valorBusca === lista[meio]){
            comp ++
            return meio
         }
        else if(valorBusca < lista[meio]){
            comp += 2
            fim = meio -1
        }
        else { //valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1

        }
    }
    return -1 //Valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações:', comp)

console.log('------------------------------------------------')

comp = 0
console.time('ZOZIMO')
console.log(buscaBinaria(vetorNomes, 'ZOZIMO'))
console.timeEnd('ZOZIMO')
console.log('Comparações:', comp)

console.log('-------------------------------------------------')

comp = 0
console.time('INSTAGRAMILDA')
console.log(buscaBinaria(vetorNomes, 'INSTAGRAMILDA'))
console.timeEnd('INSTAGRAMILDA')
console.log('Comparações:', comp)

console.log('--------------------------------------------------')

comp = 0
console.time('MARCELO')
console.log(buscaBinaria(vetorNomes, 'MARCELO'))
console.timeEnd('MARCELO')
console.log('Comparações:', comp)