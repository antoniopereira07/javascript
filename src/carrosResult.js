import carros from './carros.js'

// Filtra carros
const filteredCarros = carros.filter( (carros)=> {
    return carros
})

console.log(filteredCarros)

let toPrint = ''

// Lista carros
filteredCarros.forEach(carros => {
    toPrint += carros + ', '
});
console.log(filteredCarros)

// reduce - função com todos os itens do array e devolve um valor único
let sumCarroPreco = filteredCarros.reduce( (prev, next) => {
    return {preco: prev.preco + next.preco}
})
console.log(sumCarroPreco)

// Map - funções em arrays de retorno individual (cada valor array)

let precos = [25000, 105000, 190000, 3000]

let modelo = precos.map( (carro => {
    return carro
}))

console.log(modelo)

document.getElementById('main').innerHTML = toPrint + '<br> Soma de preços dos modelos selecionados: ' + sumCarroPreco.preco + '<br> preço dos modelos: ' + precos + ' '