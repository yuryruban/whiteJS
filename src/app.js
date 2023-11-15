import './app.css'
import { ViewMain } from './views/main/main'
import { ViewProduct } from './views/product/product'

class App {
	routes = [{
		route: '',
		view: ViewMain
	},{
		route: '#product',
		view: ViewProduct
	}]

	constructor(){
		window.addEventListener('hashchange', this.render.bind(this))
		this.render()
	}

	render(){
		const currentView = this.routes.find(r=>r.route == location.hash).view
		this.currentView = new currentView()
		this.currentView.render()
	}
}

new App()