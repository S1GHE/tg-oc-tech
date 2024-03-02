import {FC} from "react";
import {BtnType} from "src/shared/ui/btn";
import classes from "src/shared/ui/btn/base-btn/baseBtn.module.scss";
import {useCombineClass} from "src/shared/hooks";
import {StateBtnType} from "src/shared/ui/btn/type/btnType.ts";

export interface IBaseBtn extends BtnType {
    state?: "green" | "orange" | "black" | "primary"
}

export const BaseBtn: FC<IBaseBtn> = (props) => {
    const {
        children,
        onClick,
        state="primary"
    } = props;

    const stateClasses: StateBtnType = {
        green: classes["green"],
        orange: classes["orange"],
        black: classes["black"],
        primary: classes["primary"]
    }

    return (
        <button className={useCombineClass([
            classes.base_btn, stateClasses[state]
        ])}
                onClick={onClick}>
            {children}
        </button>
    );
};