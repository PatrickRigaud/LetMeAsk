import '../../styles/styleExcluirPergunta.css'
import excluir from '../../assets/excluir_vermelho.svg'



export function ExcluirPergunta({isOpen, setModalOpen, id, setLista, lista, encerrarItem, confirmacaoDelete, atualizarQuantidadePerguntas, link, url, comando}) {
    
    const excluirItem = () => {
        const listaNova = lista.filter(elemento => {
            return id != elemento.id
        })
        
        setModalOpen()
        setLista(listaNova)
        atualizarQuantidadePerguntas(listaNova.length)
        return listaNova
    }


    if(isOpen){

    return (<>
            <div className="telaInteira">
                <main className="caixaDialogo">
                    <img className="iconeLixo" src={excluir}alt="Icone Excluir"/>
                    <h2>{encerrarItem}</h2>
                    <p>{confirmacaoDelete}</p>
                    <div className="botoes">
                        <button className="btnCancelar" onClick={setModalOpen}>Cancelar</button>
                        <button className="btnConfirmarExclusao" onClick={() => {
                            if(link){
                                return link(url)
                            } else{
                                 setLista(excluirItem())   
                            }
                            
                            
                        }}>{`Sim, ${comando}`}</button>
                    </div>
                </main>
            </div>
    </>)
    }
    
    return null
    

}