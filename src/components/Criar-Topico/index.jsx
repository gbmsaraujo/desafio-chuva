import "./styles.scss";
import Negrito from "./icons/negrito.png";
import Italico from "./icons/italico.png";
import { useState } from "react";
import TopicoEnviado from "../Topico-Enviado";

const CriarTopico = ({ event }) => {
	const [sentTopic, setSentTopic] = useState();
	return (
		<>
			{sentTopic ? (
				<TopicoEnviado event={() => setSentTopic(false)} />
			) : (
				<section className="ct-topicos">
					<div className="box-title">
						<h2> Discussões </h2>
					</div>
					<h3>
						Tem uma dúvida ou sugestão? Compartilhe seu feedback com
						os autores!
					</h3>

					<div className="ct-topicos__assunto">
						<h3> Assunto </h3>
						<div className="box-assunto">
							<p>
								Defina um tópico sucinto para notificar os
								autores...
							</p>
						</div>
					</div>

					<div className="ct-topicos__conteudo">
						<h3> Conteudo </h3>
						<div className="box-conteudo">
							<div className="box-rodape">
								<img
									src={Negrito}
									alt="Ícone Negrito"
									className="negrito-icon"
								/>
								<img
									src={Italico}
									alt="Ícone Itálico"
									className="italico-icon"
								/>
								<button onClick={() => setSentTopic(true)}>
									Enviar
								</button>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default CriarTopico;
