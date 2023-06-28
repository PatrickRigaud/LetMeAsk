import "../../styles/styleGrupoSalas.css"
import { Link } from 'react-router-dom'


export function CaixaSala({nomeSala, quantidadePerguntasSala, id}){
    

    return (<>
        <Link to={`/sala`} className="link" onClick={()=>{
            localStorage.setItem('id', `${id}`)
            localStorage.setItem('nomeSala', `${nomeSala}`)
        }}>
            <div className="blocoSala">
                <h3 className="nomeSala">{`${nomeSala} - ID: ${id}`}</h3>
                <div className="quantidadePerguntasSala">{`${quantidadePerguntasSala.length} perguntas`}</div>
            </div>
        </Link>
    </>)
}