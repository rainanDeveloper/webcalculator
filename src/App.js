import React, {useState} from 'react';
import './App.css';

function App() {
	const welcome = "Bem vindo!"
	const [display, setDisplay] = useState(welcome)
	
	function sqrt(n){
		return Math.pow(n, 1/2)
	}

	function handleKey(event){
		var key = event.target

		if(display===welcome){
			setDisplay(key.dataset.value)
		}
		else{
			setDisplay(display+key.dataset.value)
		}
	}

	function KeyButton(props){
			return  <button data-value={props.keyValue&&props.keyValue} onClick={props.handleKeyClick} onMouseEnter={event=>{
							event.target.classList.add('hovered')
						}}
						onMouseOut={event=>{
							event.target.classList.remove('hovered')
						}}
						>{props.value&&props.value}</button>
	}

  return (
    <div className="App">
			<div className="adsHeader"></div>
  			<div className="Calculator">
					<div className="display">{display}</div>
					<div className="virtualKeyboard">
						<KeyButton value="AC"/>
						<KeyButton keyValue="sqrt(" value="&#8730;x" handleKeyClick={handleKey}/>
						<KeyButton value="%"/>
						<KeyButton keyValue="/" value="&divide;" handleKeyClick={handleKey}/>
						<KeyButton keyValue="7" value="7" handleKeyClick={handleKey}/>
						<KeyButton keyValue="8" value="8" handleKeyClick={handleKey}/>
						<KeyButton keyValue="9" value="9" handleKeyClick={handleKey}/>
						<KeyButton keyValue="*" value="&times;" handleKeyClick={handleKey}/>						
						<KeyButton keyValue="4" value="4" handleKeyClick={handleKey}/>
						<KeyButton keyValue="5" value="5" handleKeyClick={handleKey}/>
						<KeyButton keyValue="6" value="6" handleKeyClick={handleKey}/>
						<KeyButton keyValue="-" value="-" handleKeyClick={handleKey}/>						
						<KeyButton keyValue="1" value="1" handleKeyClick={handleKey}/>
						<KeyButton keyValue="2" value="2" handleKeyClick={handleKey}/>
						<KeyButton keyValue="3" value="3" handleKeyClick={handleKey}/>
						<KeyButton keyValue="+" value="+" handleKeyClick={handleKey}/>						
						<KeyButton keyValue="0" value="0" handleKeyClick={handleKey}/>
						<KeyButton keyValue="." value="." handleKeyClick={handleKey}/>
						<KeyButton value="+/-"/>
						<KeyButton value="="/>						
					</div>
				</div>
			<div className="adsFooter"></div>
		</div>
  );
}

export default App;
