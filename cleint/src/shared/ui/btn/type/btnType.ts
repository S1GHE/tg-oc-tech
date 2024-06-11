import {ReactNode} from "react";

export type StateBtnType = {
    green: string
    orange: string
    black: string
    primary: string
}

export interface BtnType {
    onClick?: () => void;
    children: ReactNode;
}