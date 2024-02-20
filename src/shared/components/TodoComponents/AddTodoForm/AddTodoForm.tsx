import './AddTodoForm.scss'
import { FormEvent, useState } from 'react';
import MyInput from '../../MyInput/MyInput';
import MyButton from '../../MyButton/MyButton';
import { ButtonIcons, ButtonTypes } from '../../MyButton/MyButtonEnums';
import { addTodo } from '../../../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    id: uuid(),
                    title: value,
                    isCompleted: false
                })
            );
            
            setValue('');
        }
    };

    return (
        <>
            <form onSubmit={(ev) => onSubmit(ev)} className='add-form' data-testid='add-todo-form-testid'>
                    <MyInput
                        placeholderText='Add new todo here...'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <MyButton
                        type={ButtonTypes.SUBMIT}
                        icon={ButtonIcons.ADD}
                        isDisabled={!value}
                        class='submit-btn'
                    />
            </form>
        </>
    );
};

export default AddTodoForm;