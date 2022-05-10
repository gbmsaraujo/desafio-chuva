import "./App.scss";

import Aside from "./components/Aside";
import Discussoes from "./components/Discussoes";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Resumo from "./components/Resumo";
import SectionMain from "./components/Section-Main";

function App() {
	return (
		<div className="App">
			<Aside />
			<Header />

			<main className="ct-main">
				<SectionMain/>
				<Resumo />
				<Discussoes/>
				<Posts 
				classe="ct-posts"
				like="1 like" 
				resposta="1 resposta"/>
				<Posts
				classe="ct-posts-select" />
			</main>
		</div>
	);
}

export default App;
