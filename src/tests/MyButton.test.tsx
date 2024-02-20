import MyButton from '../shared/components/MyButton/MyButton';
import { ButtonIcons, ButtonTypes } from '../shared/components/MyButton/MyButtonEnums';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

afterEach(() => {
    cleanup();
});
test("should call onSubmit button function", async () => {
    const onSubmit = jest.fn(e => e.preventDefault());

    render(<MyButton type={ButtonTypes.SUBMIT} icon={ButtonIcons.ADD}/>, { wrapper: ({ children }) => <form onSubmit={onSubmit}>{children}</form> });
    const button = screen.getByRole('button'); 
    fireEvent.click(button)
    expect(onSubmit).toBeCalled();
});