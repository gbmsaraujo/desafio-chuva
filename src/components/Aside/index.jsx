import "./styles.scss";
import logo from "./imgs/logo.svg";
const Aside = () => {
	return (
		<aside className="ct-aside">
			<div className="ct-aside__logo">
				<h2>SLACA 2019</h2>
			</div>
			<img src={logo} alt="Logo do Simpósio" />
			<nav>
				<ul>
					<li>
						<a href="/#">Comitês</a>
					</li>
					<li>
						<a href="/#">Apresentação</a>
					</li>
					<li>
						<a href="/#">Autores</a>
					</li>
					<li>
						<a href="/#">Eixos temáticos</a>
					</li>
					<li className="trab-style">
						<div></div>
						<a href="/#">Trabalhos</a>
					</li>
					<li>
						<a href="/#">Contato</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Aside;
