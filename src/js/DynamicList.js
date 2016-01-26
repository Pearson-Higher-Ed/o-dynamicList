import React    from 'react'
import ReactDom from 'react-dom'
import { data } from '../data.json'


export default class DynamicList extends React.Component {


	constructor(props) {
		super(props)
		console.log("*******************DynamicList Constructor*******************")

		this.state = {
			header : 'Assignments',
			data   : data || {}
		}

		this.generateListItem = this.generateListItem.bind(this)

	}

	generateListItemSection(data, index){

		let listItemHeader = data.dueDate

		return(
				<div key={`listItemContainer${index}`} id='listItemContainer' className='listItemContainer'>
					<div id='listItemHeader'>{listItemHeader}</div>
				  { data.items.map((item,i) => this.generateListItem(item, i) )}
				</div>
		)
	}

	generateListItem(item, index){

		let listItemTopLeft  = item.courseName
		, listItemTopRight   = item.dueTime
		, listItemBottom     = item.couseSummary

		return(
			<div key={`listItem${index}`} id='listItem' className='listItem'>
				<div id='listItemTopLeft'  className='listItemTopLeft'>{listItemTopLeft}</div>
				<div id='listItemTopRight' className='listItemTopRight'>{listItemTopRight}</div>
				<div id='listItemBottom'   className='listItemBottom'>{listItemBottom}</div>
			</div>
		)
	}

	render(){

		let { data } = this.state

		return(
			<div id= 'mainContainer' className='mainContainer'>
				<div id='header' className='header'>{this.state.header}</div>
				<div id='listContainer' className='listContainer'>
					{data.map((d,i) => this.generateListItemSection(d,i) )}
				</div>
			</div>
		)
	}

}

ReactDom.render(<DynamicList />, document.getElementById('mount'))
