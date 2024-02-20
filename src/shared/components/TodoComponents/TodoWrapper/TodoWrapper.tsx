import './TodoWrapper.scss'
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";

const TodoWrapper = () => {
    return (
        <div className={'todo-app-wrapper'}>
            <AddTodoForm />
            <TodoList />
        </div>
    );
}

export default TodoWrapper;