import {BaseInput} from "src/shared/ui/input";
import {TextStyle} from "src/shared/style/text";
import classes from "src/widgets/form/transport-form/style/TransportForm.module.scss";
import {InputForms, RenderInputType} from "src/widgets/items/input-form";
import {useInput} from "src/shared/hooks";
import {regEmail, regUsername} from "src/shared/constants";
import {BaseBtn} from "src/shared/ui/btn";

export const TransportForm = () => {
    const renderInput: RenderInputType[] = [
        {
            input: {
                label: "Имя",
                error: "Имя указано не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regUsername}
            )
        },
        {
            input: {
                label: "Почта",
                error: "Email указан не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regEmail}
            )
        }
    ]


    return (
        <div className={classes.transport_form}>
            <div className={classes.transport_form__head_text}>
                <h4 className={TextStyle.h4}>
                    Заявка на транспорт
                </h4>

                <p className={TextStyle.paragraph_regular}>
                    В данной форме вы заполняете, заявку на подачу, транспорта
                </p>
            </div>

            <div className={classes.transport_form__grid_input}>
                {
                    renderInput.map((el) =>
                    <InputForms validators={el.validators} render={el.input}>
                        <BaseInput {...el.input} {...el.validators}/>
                    </InputForms>)
                }
            </div>

            <div className={classes.transport_form__flex_btn}>
                <BaseBtn>
                    Задать вопрос
                </BaseBtn>

                <BaseBtn>
                    Оправить
                </BaseBtn>
            </div>
        </div>
    );
};