import {FC} from "react";
import {InputFormsType} from "src/widgets/items/input-form/types/InputFormType.ts";
import classes from "src/widgets/items/input-form/InputForm.module.scss";
import {CSSTransition} from "react-transition-group";
import {useCombineClass} from "src/shared/hooks";
import {TextStyle} from "src/shared/style/text";
import {circleCheck, circleError} from "src/shared/assets/icons/ui";


export const InputForms: FC<InputFormsType> = (props) => {
    const {
        children,
        validators: {isDirty, isValid},
        render
    } = props;

    return (
        <div className={classes.input_form_container}>
            <label className={TextStyle.span_regular}>
                {render.label}
            </label>

            {children}

            <CSSTransition
                classNames={{
                    enter: classes.alert_enter,
                    enterActive: classes.alert_enter__active,
                    exitActive: classes.alert_exit__active,
                    exit: classes.alert_exit
                }}
                timeout={300} unmountOnExit
                in={!(!isValid && !isDirty)}
            >
                {
                    (!isValid && isDirty) ? <div className={
                        useCombineClass([
                            TextStyle.span_regular, classes.state_container, classes["error"]])}>

                        <img src={circleError} alt="circleError"/>
                        <p>{render.error}</p>

                    </div> : <div className={useCombineClass([
                        TextStyle.span_regular, classes.state_container, classes["success"]])}>

                        <img src={circleCheck} alt="circleCheck"/>
                        <p>{render.success}</p>

                    </div>
                }
            </CSSTransition>
        </div>
    );
};
