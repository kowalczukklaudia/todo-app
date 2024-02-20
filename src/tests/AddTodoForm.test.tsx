import { render, screen, cleanup, waitFor } from '@testing-library/react';
import AddTodoForm from '../shared/components/TodoComponents/AddTodoForm/AddTodoForm';
import { Provider } from 'react-redux';
import store from '../redux/store';

afterEach(() => {
    cleanup();
});
test('should render AddTodoForm component', () => {
    render(
        <Provider store={store}>
            <AddTodoForm />
        </Provider>);

    const addTodoFormElement = screen.getByTestId('add-todo-form-testid');
    expect(addTodoFormElement).toBeInTheDocument();
});

test('should render an input inside AddTodoForm component', () => {
    render(
        <Provider store={store}>
            <AddTodoForm />
        </Provider>);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
});

test('should render a button inside AddTodoForm component', () => {
    render(
        <Provider store={store}>
            <AddTodoForm />
        </Provider>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

test('should check if input inside AddTodoForm component is empty', async() => {
    render(
        <Provider store={store}>
            <AddTodoForm />
        </Provider>);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
});

// test('should check if submit button is disabled when input is empty', async() => {
//     render(
//         <Provider store={store}>
//             <AddTodoForm />
//         </Provider>);

//     const input = screen.getByRole('textbox');
//     expect(input).toHaveValue('');

//     const button = screen.getByRole('button');
//     expect(button).toBeInTheDocument();
// });