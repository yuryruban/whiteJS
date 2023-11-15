import { CommonView } from '../../common/view'

export class ViewMain extends CommonView{
	render(){
		const div = document.createElement('div')
		div.innerHTML = 'Main page22'
		this.app.append(div)
		return this.app
	}
}