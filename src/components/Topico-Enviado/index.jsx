import "./styles.scss";
import { BsCheckAll } from "react-icons/bs";

const TopicoEnviado = ({ event }) => {
	return (
		<section className="ct-enviado">
			<div className="box-title">
				<h2> Discussões </h2>
			</div>

			<h3>Seu tópico foi enviado com sucesso! :D</h3>

			<h4>
				Agradecemos por sua contribuição, uma notificação será enviada
				ao seu email assim que seu tópico for respondido!
			</h4>

			<p>Descubra outros trabalhos!</p>

			<div className="separator"></div>

			<button onClick={event}> Criar Novo Tópico </button>

			<div className="ct-enviado__feedback">
				<BsCheckAll className="check-icon" />
				<h3>Aguardando feedback dos autores</h3>
				<p> Editar Tópico </p>
			</div>
		</section>
	);
};

export default TopicoEnviado;
