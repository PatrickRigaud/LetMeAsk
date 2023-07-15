
export const qtdPerguntasIcon = (quantidadePerguntas, listaPerguntasLenght) => {


    let temPergunta = ''

    if(listaPerguntasLenght > 0){
        temPergunta = <span>{`${quantidadePerguntas} perguntas`}</span>
    } else{
        temPergunta = 'Sem perguntas'
    }

    return temPergunta
}