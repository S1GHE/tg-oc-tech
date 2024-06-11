import {ChangeEvent, useEffect, useState} from "react";

export type TValidators = {
    isEmpty: boolean,
    regExp: RegExp,
}

export const useInput = (initialValue: string, valdations: TValidators) => {
    const [value, setValue] = useState<string>(
        initialValue
    );

    const [isDirty, setIsDirty] = useState<boolean>(
        false
    );

    const valid = useValidation(value, valdations)

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    const onBlur = (): void => {
        setIsDirty(true)
    }

    return {
        value, isDirty, onChange, onBlur, ...valid
    }
}


const useValidation = (value: string, valdations: TValidators) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(
        true
    );

    const [isValid, setIsValid] = useState<boolean>(
        false
    );

    const [regExpError, setRegExpError] = useState<boolean>(
        false
    );

    useEffect(() => {
        for(const key in valdations){
            switch (key){
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case "regExp":
                    setRegExpError(valdations.regExp.test(value))
            }
        }
    }, [valdations, value]);


    useEffect(() => {
        if(isEmpty || !regExpError){
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [isEmpty, regExpError]);

    return{
        isEmpty, regExpError, isValid
    }
}