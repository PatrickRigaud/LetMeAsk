import {listaPerguntas} from '../bancoPerguntas/bancoPerguntas'


export const qtdPerguntasIcon = (quantidadePerguntas) => {


    let temPergunta = ''

    if(listaPerguntas.length > 0){
        temPergunta = <span>{`${quantidadePerguntas} perguntas`}</span>
    } else{
        temPergunta = 'Sem perguntas'
    }

    return temPergunta
}