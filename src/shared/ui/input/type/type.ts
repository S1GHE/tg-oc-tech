import {ChangeEvent, HTMLInputTypeAttribute} from "react";

export interface InputInterface {
    type?: HTMLInputTypeAttribute;
    placeholder?: string | undefined;
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}