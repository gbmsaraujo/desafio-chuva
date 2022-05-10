import "./styles.scss";

import { BsFillStarFill } from "react-icons/bs";
import doiIcon from "./icons/Doi.png";
import videoImg from "./images/video.png";
import round from "./images/round.png";

const SectionMain = () => {
	return (
		<>
			<section className="ct-txtsEbtns">
				<h1>
					Análise sensorial de preparações funcionais desenvolvidas
					para escolares entre 09 e 15 anos, do município de
					Campinas/SP
				</h1>

				<div className="ct-txtsEbtns__btns">
					<button className="ct-buttons__download">Download</button>

					<BsFillStarFill className="ct-buttons__icons" />

					<button className="ct-buttons__icons">
						<img src={doiIcon} alt="Ícone do Doi" />
					</button>
				</div>
			</section>

			<p className="how-to-cite">COMO CITAR ESSE TRABALHO?</p>

			<section className="ct-overEdetails">
				<div className="ct-overEdetails__over">
					<h2>
						Análise sensorial de preparações funcionais
						desenvolvidas para escolares entre 09 e 15 anos, do
						município de Campinas/SP
					</h2>
					<div className="overlay-img"></div>
					<img src={videoImg} alt="Imagem do vídeo" />

					<div className="ct-overlay__contents">
						<div className="contents-icon">
							<img src={round} alt="Ícone Round Video" />
						</div>
						<div className="contents-txts">
							<h4>Beatriz Christiane Melo</h4>
							<h5>FCA / Universidade Estadual de Campinas</h5>
						</div>
					</div>
				</div>

				<div className="ct-overEdetails__details">
					<div className="box-title">
						<h2>Detalhes</h2>
					</div>

					<p>Tipo de Apresentação: Pôster </p>
					<p>Eixo temático: Alimentação e saúde (AS)</p>
					<p>
						Palavras-chaves: Alimentos funcionais, alimentação
						escolar.
					</p>

					<h3>Autores:</h3>

					<p>
						Galileo Galilei <sup>1</sup>
					</p>
					<p>
						Berta Lange de Morretes <sup>2</sup>
					</p>
					<p>
						Isaac Newton <sup>3</sup>
					</p>
					<p>
						Cesar Lattes <sup>1</sup>
					</p>
					<p>
						Stephen Hawking <sup>4</sup>
					</p>

					<footer className="ct-asidefooter">
						<p>
							<sup>1</sup>Universidade Estadual De Campinas
						</p>

						<p>
							<sup>2</sup>Universidade De São Paulo
						</p>

						<p>
							<sup>3</sup>Instituto Nacional de Pesquisas
							Espaciais
						</p>
						<p>
							<sup>4</sup>Universidade Federal Do Rio de Janeiro
						</p>
					</footer>
				</div>
			</section>
		</>
	);
};

export default SectionMain;
