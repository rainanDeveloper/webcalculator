import React, {useState} from 'react';
import './App.css';

function App() {
	const welcome = "Bem vindo!"
	const [display, setDisplay] = useState(welcome)


  return (
    <div className="App">
			<div className="adsHeader"></div>
  			<div className="Calculator">
					<div className="display">{display}</div>
				</div>
			<div className="adsFooter"></div>
		</div>
  );
}

export default App;
