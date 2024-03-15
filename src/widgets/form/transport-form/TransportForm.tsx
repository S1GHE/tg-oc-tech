import {BaseInput} from "src/shared/ui/input";
import classes from "src/widgets/form/transport-form/style/TransportForm.module.scss";
import {InputForms, RenderInputType} from "src/widgets/items/input-form";
import {useInput} from "src/shared/hooks";
import {numbersOnlyRegex, regDate, regName, regPhone, regTime} from "src/shared/constants";
import {BaseBtn} from "src/shared/ui/btn";
import {DelimiterForm} from "src/widgets/form/transport-form/widgets/delimiter-from/DelimiterForm.tsx";
import {SelectRoute} from "src/features/select-rote";
import {useEffect, useState} from "react";

export const TransportForm = () => {
    const renderInput:Array<RenderInputType> = [
        {
            input: {
                label: "Имя",
                error: "Имя указано не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regName}
            )
        },
        {
            input: {
                label: "Количество человек",
                error: "Данные введены не корректно",
                success: "Данные ведены корректно",
                type: "number"
            }, validators: useInput(
                "", {isEmpty: true, regExp: numbersOnlyRegex}
            )
        },
        {
            input: {
                label: "Номер контактного лица",
                error: "Номер телефонна введен не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regPhone}
            )
        },
        {
            input: {
                label: "Дата поездки",
                error: "Дата введена не корректно",
                success: "Данные ведены корректно",
                type: "date",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regDate}
            )
        },

        {
            input: {
                label: "Время поездки",
                error: "Время поездки введено не корректно",
                success: "Данные ведены корректно",
                type: "time",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regTime}
            )
        },

        {
            input: {
                label: "Структурное подразделение",
                error: "Данные введены не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", {isEmpty: true, regExp: regName}
            )
        },
    ];

    const [statusSend, setStatusSend] = useState<boolean>(true)

    useEffect(() => {
        setStatusSend(!renderInput.every(el => el.validators.isValid))
    }, [renderInput]);

    return (
        <div className={classes.transport_form}>
            <DelimiterForm>
                Персональная информация
            </DelimiterForm>

            <div className={classes.transport_form__grid_input}>
                {
                    renderInput.map((el) =>
                        <InputForms validators={el.validators} render={el.input}>
                            <BaseInput {...el.input} {...el.validators}/>
                        </InputForms>)
                }
            </div>

            <SelectRoute/>


            <div className={classes.transport_form__flex_btn}>
                <BaseBtn state={"orange"} disabled={statusSend}>
                    Отправить
                </BaseBtn>
            </div>
        </div>
    );
};