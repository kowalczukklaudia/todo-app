import './TodoItem.scss'
import MyButton from "../../../MyButton/MyButton";
import { ButtonIcons } from '../../../MyButton/MyButtonEnums';
import { Todo } from '../../../../../utils/Todo';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../../../../redux/slices/todoSlice';


export interface TodoItemProps extends Todo {}

const TodoItem = (props: TodoItemProps) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(completeTodo({ id: props.id, isCompleted: !props.isCompleted}));
	}

	const handleRemoveTodo = () => {
		dispatch(removeTodo({ id: props.id }));
	}

	const { title, isCompleted } = props; 

    return (
		<li className={`todo-list-wrapper ${isCompleted && 'completed'}`} >
			<div className='todo-list-wrapper-item'>
				<span className='todo-list-wrapper-item-title'>
					<hr/>
					{title}
				</span>
				<MyButton icon={ButtonIcons.DONE} class={'todo-btn todo-btn-done'} onClick={handleCompleteClick}/>
                <MyButton icon={ButtonIcons.TRASHBIN} class={'todo-btn todo-btn-delete'} onClick={handleRemoveTodo}/>
			</div>
		</li>
	);
}

export default TodoItem;