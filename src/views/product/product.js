import { CommonView } from '../../common/view'

export class ViewProduct extends CommonView{
	render(){
		const div = document.createElement('div')
		div.innerHTML = 'Product'
		this.app.append(div)
		return this.app
	}
}