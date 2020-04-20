import React, {Component} from "react"
import {v4 as uuidv4} from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

class App extends Component {
	state = {
		items: [],
		id: uuidv4(),
		item: "",
		editItem: false,
	}

	// Methods
	handleChange = e => {
		this.setState({
			item: e.target.value,
		})
	}
	handleSubmit = e => {
		e.preventDefault()
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		}
		const updatedItems = [...this.state.items, newItem]
		this.setState({
			items: updatedItems,
			item: "",
			id: uuidv4(),
			editItem: false,
		})
	}
	clearList = () => {
		this.setState({
			items: [],
		})
	}
	handleDelete = id => {
		console.log(`handle delete ${id}`)
	}
	handleEdit = id => {
		console.log(`handle edit ${id}`)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h3 className="text-uppercase text-center">Todo Input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
