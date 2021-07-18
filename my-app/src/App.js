// import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navigation/NavigationBar'
import Header from './components/HomePage/Header/Hero/Header'
import WhyCelleno from './components/HomePage/WhyCelleno/WhyCelleno'

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<WhyCelleno />
		</div>

		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	)
}

export default App
