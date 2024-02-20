import './TodoList.scss'
import { useSelector } from 'react-redux';
import { Todo } from '../../../../utils/Todo';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {

const todos = useSelector((state: any) => state.todos);

    return (
        <ul className='todo-list'> 
            {todos.length > 0 ? todos.map((todo: Todo, index: number) => {
                return <TodoItem key={index} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} ></TodoItem>
            }) : <h3>There aren't any todos! Yay!</h3>}
        </ul>
    );
};

export default TodoList;