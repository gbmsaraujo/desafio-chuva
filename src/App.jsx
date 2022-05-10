import "./App.scss";


import Aside from "./components/Aside";
import Header from "./components/Header";
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
			</main>
		</div>
	);
}

export default App;
