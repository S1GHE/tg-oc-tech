import {ChangeEvent, FocusEventHandler} from "react";

export interface IValidators{
    isValid:boolean
    isDirty:boolean
    isEmpty:boolean
    regExpError:boolean
    onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?:FocusEventHandler<HTMLInputElement>
}