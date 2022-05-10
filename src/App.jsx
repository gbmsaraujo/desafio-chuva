import { useState } from "react";
import "./App.scss";
import Aside from "./components/Aside";
import Discussoes from "./components/Discussoes";
import Header from "./components/Header";
import Posts from "./components/Posts";
import RespostasPosts from "./components/Respostas-Post";
import Resumo from "./components/Resumo";
import SectionMain from "./components/Section-Main";
import FooterImg from "./imgs/footer.png";

function App() {
	const [clicked, setClicked] = useState(false);
	return (
		<div className="App">
			<Aside />
			<Header />

			<main className="ct-main">
				<SectionMain />
				<Resumo />
				<Discussoes />
				<Posts classe="ct-posts" like="1 like" resposta="1 resposta" />

				{clicked ? (
					<>
						<Posts
							classe="ct-posts-select"
							like="4 likes"
							resposta="4 respostas"
							event={()=> setClicked(false)}
						/>
						<RespostasPosts />
					</>
				) : (
					<Posts
						classe="ct-posts-select"
						like="1 like"
						resposta="1 resposta"
						event={()=> setClicked(true)}
					/>
				)}
			</main>

			<footer className="ct-footer-main">
				<img src={FooterImg} alt="Footer" />
			</footer>
		</div>
	);
}

export default App;
