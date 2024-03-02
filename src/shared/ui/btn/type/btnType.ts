import {ReactNode} from "react";

export interface BtnType {
    onClick?: () => void;
    children: ReactNode;
}