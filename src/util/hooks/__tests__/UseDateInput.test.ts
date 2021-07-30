import { renderHook, act } from "@testing-library/react-hooks"
import { ChangeEvent } from "react";
import useDateInput from "../UseDateInput"

describe("UseDateInput", () => {
    it("starts with empty dateValues if not set", () => {
        const { result, unmount } = renderHook(() => useDateInput(undefined, undefined, undefined));
        expect(result.current.dateValues).toEqual({
            "day": "",
            "month": "",
            "year": ""
        });
        unmount();
    });

    it("starts with defaultValue if set", () => {
        const defaultValue = {
            day: "01",
            month: "02",
            year: "03"
        }

        const { result, unmount } = renderHook(() => useDateInput(undefined, defaultValue, undefined))
        expect(result.current.dateValues).toEqual(defaultValue);
        unmount();
    });

    it("starts with value if set", () => {
        const value = {
            day: "01",
            month: "02",
            year: "03"
        }

        const { result, unmount } = renderHook(() => useDateInput(value, undefined, undefined))
        expect(result.current.dateValues).toEqual(value);
        unmount();
    });

    it("prefers value over defaultValue when both are set", () => {
        const value = {
            day: "01",
            month: "02",
            year: "03"
        }
        const defaultValue = {
            day: "04",
            month: "05",
            year: "06"
        }

        const { result, unmount } = renderHook(() => useDateInput(value, defaultValue, undefined))
        expect(result.current.dateValues).toEqual(value);
        unmount();
    });

    it("updates values on subsequent render if changed", async () => {
        const value = {
            day: "01",
            month: "02",
            year: "03"
        }
        const { result, rerender, unmount } = renderHook(({ dateValue }) => useDateInput(dateValue, undefined, undefined), {
            initialProps: {
                dateValue: value
            }
        });

        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "02",
            year: "03"
        });

        rerender({
            dateValue: {
                day: "04",
                month: "05",
                year: "06"
            }
        });

        expect(result.current.dateValues).toEqual({
            day: "04",
            month: "05",
            year: "06"
        });

        unmount();
    });

    it("handles events without an onChange handler", () => {
        const { result, unmount } = renderHook(() => useDateInput(undefined, undefined, undefined));

        expect(result.current.dateValues).toEqual({
            day: "",
            month: "",
            year: ""
        })

        const changeEvent = { target: { value: "01" }, stopPropagation: jest.fn() } as unknown as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange("day", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "",
            year: ""
        });

        changeEvent.target.value = "02"
        act(() => {
            result.current.handleChange("month", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "02",
            year: ""
        })

        changeEvent.target.value = "03"
        act(() => {
            result.current.handleChange("year", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "02",
            year: "03"
        })

        unmount()
    })

    it("handles events with an onChange handler", () => {
        const onChangeMock = jest.fn();

        const { result, unmount } = renderHook(() => useDateInput(undefined, undefined, onChangeMock));

        expect(result.current.dateValues).toEqual({
            day: "",
            month: "",
            year: ""
        })

        const changeEvent = { target: { value: "01" }, stopPropagation: jest.fn() } as unknown as ChangeEvent<HTMLInputElement>
        act(() => {
            result.current.handleChange("day", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "",
            year: ""
        });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock.mock.calls[0][0].target.value).toEqual({
            day: "01",
            month: "",
            year: ""
        })

        changeEvent.target.value = "02"
        act(() => {
            result.current.handleChange("month", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "02",
            year: ""
        });
        expect(onChangeMock).toHaveBeenCalledTimes(2);
        expect(onChangeMock.mock.calls[1][0].target.value).toEqual({
            day: "01",
            month: "02",
            year: ""
        })

        changeEvent.target.value = "03"
        act(() => {
            result.current.handleChange("year", changeEvent);
        });
        expect(result.current.dateValues).toEqual({
            day: "01",
            month: "02",
            year: "03"
        })
        expect(onChangeMock).toHaveBeenCalledTimes(3);
        expect(onChangeMock.mock.calls[2][0].target.value).toEqual({
            day: "01",
            month: "02",
            year: "03"
        })
        unmount()
    })
})

