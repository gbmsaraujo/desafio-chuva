import "./styles.scss";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import profilePic from "./icons/Imagem.png";

const Header = () => {
	return (
		<header className="ct-header">
			<div className="ct-header__texts">
				<h3>
					Anais do Simpósio Latino Americano de Ciências de Alimentos
				</h3>
				<h2>
					Anais do 13º Simpósio Latino Americano de Ciência de
					Alimentos
				</h2>
				<p>ISSN: 1234-5678</p>
			</div>

			<div className="ct-header__lang">
				<GrLanguage />
				<p> Pt, Br </p>
				<IoMdArrowDropdown />
			</div>

			<div className="ct-header__login">
				<div className="box-texts">
					<p>Bem-Vindo!</p>
					<p>alguem12@galoascience.com</p>
				</div>
				<img src={profilePic} alt="Foto de perfil" />
			</div>
		</header>
	);
};

export default Header;
