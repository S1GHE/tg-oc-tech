import {FC} from "react";
import {BtnType} from "src/shared/ui/btn";
import classes from "src/shared/ui/btn/base-btn/baseBtn.module.scss";
import {useCombineClass} from "src/shared/hooks";

export interface IBaseBtn extends BtnType {
    state?: "green" | "orange" | "black" | "primary"
}

export const BaseBtn: FC<IBaseBtn> = (props) => {
    const {
        children,
        onClick
    } = props;

    return (
        <button className={useCombineClass([
            classes.base_btn, classes["primary"]
        ])}
                onClick={onClick}>
            {children}
        </button>
    );
};