import './styles.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const Posts = ({ like, resposta, event, classe }) =>{
    return(
        <section className={classe} onClick={event}>
            <h2>Assunto da pergunta aparece aqui</h2>
            <p>Carlos Henrique Santos</p>
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
            
            <footer className='ct-footer'>
                <BsThreeDotsVertical className='footer_three' />
                <button> <AiFillHeart className='footer__heart'/> </button>
               <div className='footer__texts'>
                    <p> {like} </p>
                    <p> {resposta} </p>
               </div>
            </footer>

        </section>
    )
}

export default Posts