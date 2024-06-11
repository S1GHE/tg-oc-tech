import {BtnType} from "src/shared/ui/btn";
import {FC} from "react";
import {useCombineClass} from "src/shared/hooks";
import {StateBtnType} from "src/shared/ui/btn/type/btnType.ts";
import classes from "src/shared/ui/btn/icon-btn/IconBtn.module.scss";

export interface IIconBtn extends BtnType{
    state?: "green" | "orange" | "black" | "primary"
}

export const IconBtn:FC<IIconBtn> = (props) => {
    const {
        children,
        state="primary",
        onClick
    } = props;

    const stateClasses: StateBtnType = {
        green: classes["green"],
        orange: classes["orange"],
        black: classes["black"],
        primary: classes["primary"]
    }

    return (
        <button className={useCombineClass([
            classes.icon_btn, stateClasses[state]
        ])} onClick={onClick}>
            {children}
        </button>
    );
};