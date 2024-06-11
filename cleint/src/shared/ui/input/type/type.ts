import {ChangeEvent, HTMLInputTypeAttribute} from "react";

export interface InputInterface {
    type?: HTMLInputTypeAttribute;
    placeholder?: string | undefined;
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaInterface{
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}