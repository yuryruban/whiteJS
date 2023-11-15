import './app.css'

class App {
	render(){
		const app = document.getElementById('root')
		const div = document.createElement('div')
		div.innerHTML = 'Main'
		app.append(div) 
	}
}

new App().render()