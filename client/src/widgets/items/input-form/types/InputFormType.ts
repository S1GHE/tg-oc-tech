import {HTMLInputTypeAttribute, ReactNode} from "react";
import {IValidators} from "src/shared/hooks";

export interface InputFormsType {
    children: ReactNode
    validators: IValidators
    render: renderInput
}

export interface RenderInputType{
    input: renderInput
    validators: IValidators
}

interface renderInput{
    label: string,
    success: string,
    error: string,
    placeholder?: string | undefined;
    type?: HTMLInputTypeAttribute;
}