import classes from "src/shared/ui/input/base-input/baseInput.module.scss";
import {FC, FocusEventHandler, useEffect, useState} from "react";
import {InputInterface} from "src/shared/ui/input";
import {useCombineClass} from "src/shared/hooks";

export interface IBaseInput extends InputInterface{
    className?: string | undefined;
    isValid?: boolean;
    isDirty?: boolean
    onBlur?: FocusEventHandler<HTMLInputElement>
}

export const BaseInput:FC<IBaseInput> = (props) => {
    const {
        type,
        placeholder,
        value,
        className,
        isValid,
        isDirty,
        onBlur,
        onChange,
    } = props;

    const [statusClassName, setStatusClassName] = useState<string>(
        ""
    )

    useEffect(() => {
        if (!isDirty && !isValid){
            setStatusClassName("")
        } else if (isDirty && !isValid){
            setStatusClassName(classes["error"])
        } else if (isDirty && isValid){
            setStatusClassName(classes["success"])
        }
    }, [isValid, isDirty]);
    

    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            className={
                useCombineClass([
                    className, classes.base_input, statusClassName
                ])
            }
        />
    );
};
