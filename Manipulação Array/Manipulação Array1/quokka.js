const numeros = [10, 20, 30, 40, 50]

const total = numeros.reduce((acc, item) => {
    console.log(acc) 
    console.log(item) 

    return acc + item
}, 5)

//console.log(total)

const palavras = ['oi', 'amigo', 'palalelepipedo', 'ola']

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    console.log(maiorPalavra)
    console.log(palavraAtual)

    if(palavraAtual,length > maiorPalavra.length){
        return palavraAtual
    }

    return maiorPalavra
}, '')

console.log('qual é a maior palavra?', maiorPalavra)