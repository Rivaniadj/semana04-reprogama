const Livros = require('./database')


const LivrosNaOrdem = Livros.sort((livro1, livro2) => {
    return livro1.paginas - livro2.paginas
})

const pegarEntrada = require('readline-sync')

///deverá ser possível buscar livros pela categoria

const porCategoria = pegarEntrada.question(' deseja encontrar um livro por categoria(S/N)')
if (porCategoria.toUpperCase() === ('S')) {

    console.log("Esses sao as opcoes disponiveis: Ficcao,Romance,suspence")


    const qualCategoria = pegarEntrada.question('Qual Categoria voce escolhe?')
    console.log(qualCategoria)
    const porCategoria = Livros.filter(Livro => Livro.categoria === qualCategoria)
    console.log(porCategoria)

   // pegar livro por recomendaçãos
} else {

    const livrosRecomendados = pegarEntrada.question("quer uma recomendação de um livro?(S/N)")

    if (livrosRecomendados.toUpperCase() === 'S') {
        const recomendacao = Livros.filter(livro => livro.recomenda === true && livro.leu === true)
        console.log('esses são os que recomendo')
        console.log(recomendacao)

        //Minha lista de desejo: Deverá listar livros que ainda não foram lidos

    } else {
        const desejo = pegarEntrada.question('deseja ver livros nao lidos?(S/N)')
        if (desejo.toUpperCase() === 'S') {
            const naoLidos = Livros.filter(livro => livro.leu === false)
            console.log(naoLidos)
        } else {
            console.log(LivrosNaOrdem)
        }
    }
}
