import { listaPerguntas } from "./bancoPerguntas"


const listarPerguntasSala = (idSala) => {
    const listaPerguntasId = listaPerguntas.filter(elemento => elemento.idSala === idSala)

    return listaPerguntasId
}


export const listaSalas = [
    {idSala: 1,
        nome: 'Descarga/Defesa'},
        
    {idSala: 2,
        nome: 'Coleta'}
    
]

listaSalas.forEach(sala => {
    sala.perguntas = listarPerguntasSala(sala.idSala)
})
