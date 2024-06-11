import {FC, ReactNode} from "react";
import classes from "src/widgets/form/transport-form/widgets/delimiter-from/delimiterFrom.module.scss";
import {TextStyle} from "src/shared/style/text";

export interface IDelimiterForm{
    children: ReactNode
}

export const DelimiterForm:FC<IDelimiterForm> = ({children}) => {
    return (
        <div className={classes.delimiter_form}>
            <div className={classes.delimiter_form__svg}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.5 7.00322C0.5 3.41152 3.41025 0.5 7 0.5C10.5898 0.5 13.5 3.41152 13.5 7.00322C13.5 10.5952 10.5897 13.5067 7 13.5067C3.41026 13.5067 0.5 10.5952 0.5 7.00322ZM3.72905 7.00322C3.72905 8.81044 5.19341 10.2754 7 10.2754C8.80659 10.2754 10.271 8.81044 10.271 7.00322C10.271 5.19632 8.80663 3.73099 7 3.73099C5.19337 3.73099 3.72905 5.19632 3.72905 7.00322Z"
                        stroke="#0D1B2A" stroke-opacity="0.25"/>
                </svg>
            </div>

            <h4 className={TextStyle.h6}>{children}</h4>
        </div>
    );
};