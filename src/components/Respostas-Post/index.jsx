import "./styles.scss";
import { BsCheckAll } from "react-icons/bs";

const RespostasPosts = () => {
	return (
		<section className="ct-respostas">
			<div className="ct-respostas__autor">
				<div className="ct-autor">
					<h3>Adriano da Silva</h3>
					<div className="autor-check">
						<p>Autor</p>
						<BsCheckAll className="check-icon" />
					</div>
				</div>
				<p>
					Resposta do autor é aqui. Relato inscreve-se no campo da
					análise da dimensão e impacto de processo formativo situado
					impacto de processo formativo processo resente relato
					inscreve-se no campo da análise da dimensão e impacto de
					processo formativo situado impacto de processo formativo
					processo.
				</p>
			</div>

			<div className="ct-respostas__usuario">
				<div className="ct-autor">
					<h3>Carlos Henrique Santos</h3>
				</div>
				<p>
					Consegui entender melhor agora! Parece que a variação da
					análise da dimensão e impacto de processo formativo situado
					impacto de processo formativo.
				</p>
				<p>
					Obrigada pela resposta, muito interessante o seu trabalho!
				</p>
			</div>

			<div className="ct-respostas__autor">
				<div className="ct-autor">
					<h3>Carmila Ferreira Andrade</h3>
					<div className="autor-check">
						<p>Coautor</p>
						<BsCheckAll className="check-icon" />
					</div>
				</div>
				<p>
					Também ínteressante lembrar que o relato inscreve-se no
					campo da análise da dimensão e impacto de processo formativo
					situado impacto de processo formativo processo resente
					relato inscreve-se no campo da análise da dimensão e impacto
					de processo formativo situado impacto de processo formativo
					processo.
				</p>
				<p>
					Situado impacto de processo formativo processo resente
					relato inscreve-se no campo da análise da dimensão e impacto
					de processo formativo situado impacto de processo formativo
					processo.
				</p>

                <div className="ct-respostas__autor">
				<div className="ct-autor">
					<h3>Ana Carolina</h3>
					<div className="autor-check">
						<p>Coautor</p>
						<BsCheckAll className="check-icon" />
					</div>
				</div>
				<p>
                Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
				</p>
			</div>
			</div>
		</section>
	);
};

export default RespostasPosts;
