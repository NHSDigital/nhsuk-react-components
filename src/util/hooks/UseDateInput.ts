import { ChangeEvent, useEffect, useRef, useState } from "react"

export type DateInputValue = {
    day: string;
    month: string;
    year: string;
};

export type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement & { value: DateInputValue };
    currentTarget: HTMLInputElement & { value: DateInputValue };
};

type HandleChangeFunc = (inputType: "day" | "month" | "year", event: ChangeEvent<HTMLInputElement>) => void;

type UseDateInputType = (
    value: Partial<DateInputValue> | undefined,
    defaultValue: Partial<DateInputValue> | undefined,
    onChange?: (e: DateInputChangeEvent) => void
) => {
    handleChange: HandleChangeFunc,
    dateValues: DateInputValue
};

const useDateInput: UseDateInputType = (value, defaultValue, onChange) => {
    const [dateValues, setDateValues] = useState<DateInputValue>({
        day: value?.day || defaultValue?.day || "",
        month: value?.month || defaultValue?.month || "",
        year: value?.year || defaultValue?.year || ""
    });

    useEffect(() => {
        setDateValues(values => {
            if (!value) return values;
            const { day, month, year } = value;
            const newDateValues = { ...values }
            if (day && value.day !== newDateValues.day) newDateValues.day = value.day;
            if (month && value.month !== newDateValues.month) newDateValues.month = value.month;
            if (year && value.year !== newDateValues.year) newDateValues.year = value.year;
            return newDateValues;
        })
    }, [value]);


    const handleChange: HandleChangeFunc = (inputType, event) => {
        event.stopPropagation();
        setDateValues(values => {
            const newDateValues = {
                ...values,
                [inputType]: event.target.value
            }
            if (onChange) {
                const newEvent = {
                    ...event,
                    target: { ...event.target, value: newDateValues },
                    currentTarget: { ...event.target, value: newDateValues }
                } as DateInputChangeEvent
                onChange(newEvent);
            }
            return newDateValues;
        })
    }

    return { dateValues, handleChange }
}

export default useDateInput
