import './styles.scss'
import icon1 from './icons/icone1.svg' 
import icon2 from './icons/icone2.svg' 
import icon3 from './icons/icone3.svg' 
import { AiOutlinePlus } from "react-icons/ai"

const Discussoes = () => {
    return(
        <section className="ct-discussoes">

            <div className="box-title">
                <h2> Discussões </h2>
            </div>

            <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>

            <div className='ct-discussoes__icons'>
                <img src={icon1} alt="Ícone 1" />
                <img src={icon2} alt="Ícone 2" />
                <img src={icon3} alt="Ícone 2" />
            </div>

        <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? 
            Deixe seus questionamentos ou sugestões para o autor!</p>

            <div className="ct-btns">
                <button> <AiOutlinePlus className='ct-btns__icon' /> Criar Tópico </button>
            </div>

        </section>
    )
}

export default Discussoes