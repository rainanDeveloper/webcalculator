import React, {useState} from 'react';
import './App.css';

function App() {
	const welcome = "Bem vindo!"
	const [display, setDisplay] = useState(welcome)
	
	function sqrt(n){
		return Math.pow(n, 1/2)
	}

	function calculate(){
		try{
			setDisplay(eval(display).toString().substring(0,22))
		}
		catch(error){
			alert('Expressão inválida!')
		}
	}

	function handleKey(event){
		var key = event.target

		if((display+key.dataset.value).length<=22){
			if(display===welcome && key.dataset.value!=='sqrt'){
				if(key.dataset.value==='.'){
					setDisplay('0'+key.dataset.value)
				}
				else{
					setDisplay(key.dataset.value)
				}
			}
			else{
				if(key.dataset.value==='sqrt'){
					if(display!==welcome){
						setDisplay(`sqrt(${display.replace(/^[/.*+-]/g, '').replace(/[/.*+-]$/g, '')})`)
					}
					else{
						setDisplay(`sqrt(0)`)
					}
				}
				else{
					setDisplay((display+key.dataset.value).replace(/0(\d)/g, '$1').replace(/([/.*+-])[/.*+-]/g, '$1').replace(/(\d+\.\d+)\.(\d{0,})/g, '$1$2'))
				}
			}
		}
	}

	function setInverse(){
	
		if(display!==welcome){
			try{
				setDisplay((-eval(display)))
			}
			catch(error){
				alert('Expressão inválida!')
			}
		}
		else{
			setDisplay('0')
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

	function clear(){
		setDisplay('0')
	}

	function calculatePercentual(){
		let lastValue = 0
		let newValue = 0
		if(display!==welcome){
			try{
				lastValue=eval(display.replace(/(.+)[-/+*].+/g, '$1'))
				newValue=eval(display.replace(/.+[-/+*](.+)$/g, '$1'))
			}
			catch(error){
				alert('Erro: expressão inválida!')
				return false
			}
			console.log(lastValue)
			console.log(newValue)
			setDisplay(display.replace(/([\d.]+)$/g, (lastValue*newValue/100).toString()))
		}
	}

  return (
    <div className="App">
			<div className="adsHeader"></div>
  			<div className="Calculator">
					<div className="display">{display}</div>
					<div className="virtualKeyboard">
						<KeyButton value="AC" handleKeyClick={clear}/>
						<KeyButton keyValue="sqrt" value="&#8730;x" handleKeyClick={handleKey}/>
						<KeyButton value="%" handleKeyClick={calculatePercentual}/>
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
						<KeyButton value="+/-" handleKeyClick={setInverse}/>
						<KeyButton value="=" handleKeyClick={calculate}/>						
					</div>
				</div>
			<div className="adsFooter"></div>
		</div>
  );
}

export default App;
