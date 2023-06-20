import {listaPerguntas} from '../bancoPerguntas/bancoPerguntas'


export const qtdPerguntasIcon = () => {


    let temPergunta = ''

    if(listaPerguntas.length > 0){
        temPergunta = `${listaPerguntas.length} perguntas`
    } else{
        temPergunta = 'Sem perguntas'
    }

    return temPergunta
}