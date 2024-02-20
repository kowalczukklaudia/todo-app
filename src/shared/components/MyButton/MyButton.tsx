import './MyButton.scss';
import React, {  MouseEventHandler, useMemo } from 'react';
import { ButtonTypes, ButtonIcons, ButtonColors } from './MyButtonEnums';
import { IoAddSharp, IoCheckmarkDoneSharp, IoClose, IoTrashSharp } from "react-icons/io5";

interface MyButtonProps {
    icon: ButtonIcons;
    text?: string;
    class?: string;
    type?: ButtonTypes;
    color?: ButtonColors;
    isDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton = (props: MyButtonProps) => {
    const color = useMemo(() => {
        return props.color ? props.color : ButtonColors.TRANSPARENT;
    }, [props.color]);

    const iconMap = (icon: ButtonIcons) => {
        switch (icon) {
            case ButtonIcons.DONE:
                return <IoCheckmarkDoneSharp />;
            case ButtonIcons.DELETE:
                return <IoClose />;
            case ButtonIcons.ADD:
                return <IoAddSharp />;
            case ButtonIcons.TRASHBIN:
                return <IoTrashSharp />;
            default:
                break;
        }
    }

    return (
        <button 
            type={props.type ? props.type : 'button'}
            className={`my-button ${color} ${props.class} `}
            onClick={props.onClick}
            disabled={props.isDisabled}
        >
            {iconMap(props.icon)} {props.text}
        </button>
    );
};

export default MyButton;