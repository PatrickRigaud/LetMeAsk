import "../../styles/styleGrupoSalas.css"


export function CaixaSala({nomeSala, quantidadePerguntasSala, id}){

    return (<>
        <div className="blocoSala">
            <h3 className="nomeSala">{`${nomeSala} - ID: ${id}`}</h3>
            <div className="quantidadePerguntasSala">{`${quantidadePerguntasSala.length} perguntas`}</div>
        </div>

    </>)
}