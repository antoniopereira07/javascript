let carros = [
    {
        marca: 'audi',
        modelo: 'A5',
        ano: 2020,
        combustível: ['gasolina', 'etanol'],
        portas: 4,
        cambio: 'automático',
        km: 50000,
        preco: 25000,
    },
    {
        marca: 'ford',
        modelo: 'mustang',
        ano: 2019,
        combustível: ['gasolina', 'etanol'],
        portas: 4,
        cambio: 'manual',
        km: 1000,
        preco: 105000
    },
    {
        marca: 'jaguar',
        modelo: 'j5',
        ano: 2023,
        combustível: ['gasolina'],
        portas: 4,
        cambio: 'automático',
        km: 0,
        preco: 190000
    },
    {
        marca: 'fiat',
        modelo: 'Novo palio',
        ano: 2011,
        combustível: ['gasolina'],
        portas: 4,
        cambio: 'manual',
        km: 950000,
        preco: 3000
    }
]

function getCarros(){
    return carros
}


console.log(getCarros)

export default getCarros()