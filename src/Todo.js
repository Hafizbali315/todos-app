import { Button, ListItem, ListItemText } from '@material-ui/core'
import { db } from './firebase_config'

const TodoListItem = ({ todo, inprogress, id }) => {
	const toggleInProgress = () => {
		db.collection('todos').doc(id).update({
			inprogress: !inprogress,
		})
	}

	const deleteTodo = () => {
		db.collection('todos').doc(id).delete()
	}

	return (
		<div style={{ display: 'flex' }}>
			<ListItem>
				<ListItemText primary={todo} secondary={inprogress ? 'In Progress 🙂' : 'Completed 😃💚'} />
			</ListItem>
			<Button onClick={toggleInProgress}>{inprogress ? 'Done' : 'UnDone'}</Button>
			<Button onClick={deleteTodo}>X</Button>
		</div>
	)
}

export default TodoListItem
