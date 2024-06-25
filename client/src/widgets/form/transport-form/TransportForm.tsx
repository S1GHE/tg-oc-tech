import {BaseInput, BaseTextarea} from "src/shared/ui/input";
import classes from "src/widgets/form/transport-form/style/TransportForm.module.scss";
import {InputForms, RenderInputType} from "src/widgets/items/input-form";
import {useInput} from "src/shared/hooks";
import {numbersOnlyRegex, regDate, regName, regPhone, regTime} from "src/shared/constants";
import {BaseBtn} from "src/shared/ui/btn";
import {DelimiterForm} from "src/widgets/form/transport-form/widgets/delimiter-from/DelimiterForm.tsx";
import {routerInputType, SelectRoute} from "src/features/select-rote";
import {useEffect, useState} from "react";
import axios from 'axios';


export const TransportForm = () => {
    const renderInput: Array<RenderInputType> = [
        {
            input: {
                label: "Имя",
                error: "Имя указано не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", { isEmpty: true, regExp: regName }
            )
        },
        {
            input: {
                label: "Количество человек",
                error: "Данные введены не корректно",
                success: "Данные ведены корректно",
                type: "number"
            }, validators: useInput(
                "", { isEmpty: true, regExp: numbersOnlyRegex }
            )
        },
        {
            input: {
                label: "Номер контактного лица",
                error: "Номер телефонна введен не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", { isEmpty: true, regExp: regPhone }
            )
        },
        {
            input: {
                label: "Дата поездки",
                error: "Дата введена не корректно",
                success: "Данные ведены корректно",
                type: "date",
            }, validators: useInput(
                "", { isEmpty: true, regExp: regDate }
            )
        },
        {
            input: {
                label: "Время поездки",
                error: "Время поездки введено не корректно",
                success: "Данные ведены корректно",
                type: "time",
            }, validators: useInput(
                "", { isEmpty: true, regExp: regTime }
            )
        },
        {
            input: {
                label: "Структурное подразделение",
                error: "Данные введены не корректно",
                success: "Данные ведены корректно",
            }, validators: useInput(
                "", { isEmpty: true, regExp: regName }
            )
        },
    ];

    const [statusSend, setStatusSend] = useState<boolean>(false);
    const [statusRoute, setStatusRoute] = useState<boolean>(false);
    const [textareaValue, setTextareaValue] = useState<string>("");
    const [selectData, setSelectData] = useState<routerInputType[]>();

    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    useEffect(() => {
        setStatusSend(renderInput.every(el => el.validators.isValid && statusRoute));
    }, [renderInput]);

    const handlerSend = () => {
        const initData = Telegram.WebApp.initDataUnsafe;
        const chatID = initData?.user?.id;

        axios.post("https://a28077-86fc.t.d-f.pw/api/", {
            chatID: chatID ? chatID : 1,
            name: renderInput[0].validators.value,
            numberPeople: renderInput[1].validators.value,
            phone: renderInput[2].validators.value,
            date: renderInput[3].validators.value,
            time: renderInput[4].validators.value,
            division: renderInput[5].validators.value,
            notes: textareaValue,
            routes: selectData?.map(el => el.value)
        }).then(() => {
            Telegram.WebApp.close();
        }).catch((e) => {
            console.error(e)
        });
    };


    return (
        <div className={classes.transport_form}>

            <DelimiterForm>
                Персональная информация
            </DelimiterForm>

            <div className={classes.transport_form__grid_input}>
                {
                    renderInput.map((el) =>
                        <InputForms key={el.input.label} validators={el.validators} render={el.input}>
                            <BaseInput {...el.input} {...el.validators}/>
                        </InputForms>)
                }
            </div>

            <DelimiterForm>
                Дополнительные комментарий
            </DelimiterForm>

            <BaseTextarea value={textareaValue} onChange={(e) => {
                setTextareaValue(e.target.value)
            }}/>

            <SelectRoute changeStatusSelect={setStatusRoute} getInfo={setSelectData}/>

            <div className={classes.transport_form__flex_btn}>
                <BaseBtn state={"primary"} onClick={() => {Telegram.WebApp.close()}}>
                    Закрыть
                </BaseBtn>
                <BaseBtn state={"orange"} disabled={!statusSend} onClick={() => handlerSend()}>
                    Отправить
                </BaseBtn>
            </div>
        </div>
    );
};