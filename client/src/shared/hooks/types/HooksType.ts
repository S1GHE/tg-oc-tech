import {ChangeEvent, FocusEventHandler} from "react";
import {InputInterface} from "src/shared/ui/input";

export interface IValidators extends InputInterface{
    isValid:boolean
    isDirty:boolean
    isEmpty:boolean
    regExpError:boolean
    onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?:FocusEventHandler<HTMLInputElement>
}